const FormData = require("../models/formModel");
const { generateTIN } = require("../utils/tinGenerator");
const { getWalletAddress, submitETin } = require("../utils/wallet");

exports.finalSubmission = async (req, res) => {
    try {
        const { create } = await import('ipfs-http-client');
        const ipfs = create({ url: "http://127.0.0.1:5001/api/v0/add" });

        const { user } = req;
        const { registration, information, final_Preview, finalSubmission } = req.body;
        const tin = generateTIN();

        const formData = {
            registration,
            information: { ...information, tin },
            final_Preview,
            finalSubmission,
        };

        // Save form data in the database
        const formDataModel = new FormData(formData);
        await formDataModel.save();

        // Convert formData to a JSON string for IPFS
        const formDataJson = JSON.stringify(formData);

        // Upload to IPFS
        const ipfsResult = await ipfs.add(formDataJson); // ipfsResult contains the CID

        // Retrieve the IPFS hash (CID)
        const ipfsHash = ipfsResult.path;

        console.log('Data stored on IPFS with CID:', ipfsHash);

        // Blockchain txn (assuming submitETin is your blockchain function)
        const { tx } = await submitETin(user.nid, tin, ipfsHash);

        if (tx) {
            console.log('TIN submitted to blockchain');
            res.status(200).json({ message: 'Data saved successfully', tin, tx });
        }
        else{
            res.status(500).json({ message: 'Error saving data', error });
        }
    } catch (error) {
        console.error('Error saving data', error);
        res.status(500).json({ message: 'Error saving data', error });
    }
};

exports.getTinRecords = async (req, res) => {
    try {
        const records = await FormData.find({}, {
            "information.tin": 1,
            "information.taxPayersName": 1,
            "information.number": 1,
            "information.email": 1,
            "information.permanentAddress": 1,
            "_id": 0
        });

        const tinRecords = records.map(record => ({
            tin: record.information.tin,
            taxPayersName: record.information.taxPayersName,
            number: record.information.number,
            email: record.information.email,
            permanentAddress: record.information.permanentAddress
        }));

        res.status(200).json(tinRecords);
    } catch (error) {
        res.status(500).json({ message: "Error fetching TIN records", error });
    }
};

exports.getMyTin = async (req, res) => {
    try {
        const { user } = req;
        const findTin = await FormData.findOne(
            { "nid": user.nid },
        )  

        console.log(findTin)

        if(findTin){
            res.status(200).json(findTin);
        }else{
            res.status(404).json({ message: 'TIN not found' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching TIN records", error });
    }
}

exports.getUserTinDetails = async (req, res) => {
    try {
        const { tin } = req.params;

        const findTin = await FormData.findOne({
            "information.tin": tin,
        });

        if (!findTin) {
            return res.status(404).json({ message: 'TIN not found' });
        }

        res.status(200).json(findTin);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching user TIN details', error });
    }
}

// TODO: Implement the updateTin function
exports.updateTin = async (req, res) => {
    try {
        const { user } = req;
        const { } = req.body;

        const getFormData = await FormData.findOne({
            "nid": user.nid,
        })

        if (!getFormData) {
            return res.status(404).json({ message: 'Data not found' });
        }



        await getFormData.save();
        res.status(200).json({ message: 'TIN updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error getting or saving data', error });
    }
};

// TODO: Implement the getRequestStatus function (user tin update request)
exports.getRequestStatus = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: 'Error fetching request status', error });
    }
}