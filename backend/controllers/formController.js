const FormData = require("../models/formModel");
const { generateTIN } = require("../utils/tinGenerator");

exports.finalSubmission = async (req, res) => {
    try {
        const { registration, information, final_Preview, finalSubmission } = req.body;
        const tin = generateTIN();

        const formData = new FormData({
            registration,
            information: { ...information, tin },
            final_Preview,
            finalSubmission,
        });

        await formData.save();
        res.status(200).json({ message: 'Data saved successfully', tin });
    } catch (error) {
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
        res.status(200).json(findTin);
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