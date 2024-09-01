const FormData = require("../models/formModel");

exports.changeContact = async (req, res) => {
    try {
        const user = req.user;

        if(!req.body.contact) {
            return res.status(400).json({ message: 'Contact is required' });
        }

        const getFormData = await FormData.findOne({
            "nid": user.nid,
        })

        if (!getFormData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        console.log(req.body.contact)
        getFormData.information.mobileNumber = req.body.contact;
        getFormData.markModified('information.mobileNumber');
        await getFormData.save();

        res.status(200).json({ message: 'Data updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error getting or saving data', error });
    }
};