require('dotenv').config();
const { ethers } = require('ethers');
const sss = require('shamirs-secret-sharing');
const { Buffer } = require('buffer');
const CryptoJS = require('crypto-js');
const ShardKey = require("../models/shardKeyModel");
const Transaction = require("../models/transactionModel");
const WalletContract = require('../abis/WalletContract.json')
const KYCRegistryContract = require('../abis/KYCRegistryV32.json');
const Approved = require('../models/approvedModel');
const Verifier = require('../models/verifierAddress');
const User = require('../models/userModel');

const TaxShieldBD = require('../abis/TaxShieldBD.json')

// user->shard1 (browser)
// nid->shard2 (kms)
// passwordHash->shard3 (blockchain)

// Smart contract ABI and address
const WalletContractAddress = "0xd2d031df2edfd36e58d890f7fe602c27263954b1"
const KYCRegistryContractAddress = "0x18F9c1AeCd8B14448c6845deeEA5D9c17b244202"
const TaxShieldBDContractAddress = "0xB1d598D2535604DE4E3b819c2e69b764f305F255"

const provider = new ethers.providers.JsonRpcProvider("https://vercel-blockchain-proxy.vercel.app");


const getWalletAddress = async (nid) => {
    // Return the wallet address to the user
    const address = await ShardKey.findOne({ nidNumber: nid }).select('address').exec();
    return address;
}

const decryptShard = async (nid, password) => {
    try {
        console.log(nid, password)
        // Retrieve shards from the database
        const shardKey = await ShardKey.findOne({ nidNumber: nid }).exec();
        console.log(shardKey)

        if (!shardKey) {
            throw new Error('ShardKey not found for the given NID');
        }

        // Retrieve encryptedShard3 from the blockchain
        const contract = new ethers.Contract(WalletContractAddress, WalletContract.abi, provider);
        const encryptedShard3 = await contract.getWallet(shardKey.nidNumber);

        if (!encryptedShard3) {
            throw new Error('Shard3 not found on the blockchain for the given NID');
        }

        // Decrypt shardB and shard3
        const shardBDecrypted = CryptoJS.AES.decrypt(shardKey.shardB, "ekycdev").toString(CryptoJS.enc.Utf8);
        const shard3Decrypted = CryptoJS.AES.decrypt(encryptedShard3, password).toString(CryptoJS.enc.Utf8);

        // Convert decrypted shards to buffers
        const shard1 = Buffer.from(shardKey.shardA, 'hex');
        const shard2 = Buffer.from(shardBDecrypted, 'hex');
        const shard3 = Buffer.from(shard3Decrypted, 'hex');

        // Combine shards to retrieve the original secret (private key)
        const secret = sss.combine([shard1, shard3]); // Combine shard1 and shard3

        // Validate the combined secret
        if (!secret || secret.length !== 32) {
            throw new Error('Invalid combined secret length');
        }

        return secret;
    } catch (error) {
        return error;
    }
}

// eTin
const submitETin = async (nid, tin, ipfsHash) => {
    try {
        // decrypt shard
        const secret = await decryptShard(nid, "1234");
        const signer = new ethers.Wallet(secret, provider);
        const contract = new ethers.Contract(TaxShieldBDContractAddress, TaxShieldBD.abi, signer);

        // Send the transaction to store the KYC data on the blockchain
        const tx = await contract.setTIN(nid, tin, ipfsHash, {
            gasPrice: 0
        });
        await tx.wait();

        if (tx !== null) {
            await saveTxDataForWallet(tx, nid, "eTin Submission or Update");
            return { tx: tx };
        }
    } catch (error) {
        console.log(error);
    }
}

const saveTxDataForWallet = async (tx, nid, reason) => {
    try {
        const transaction = new Transaction({
            nid: nid,
            reason: reason,
            nonce: tx.nonce,
            gasPrice: tx.gasPrice.toString(),
            gasLimit: tx.gasLimit.toString(),
            to: tx.to,
            value: tx.value.toString(),
            data: tx.data,
            chainId: tx.chainId,
            v: tx.v,
            r: tx.r,
            s: tx.s,
            from: tx.from,
            hash: tx.hash
        });
        await transaction.save();
    } catch (error) {
        console.log(error)
    }
}
// export the function
module.exports = {
    getWalletAddress,
    submitETin,
}