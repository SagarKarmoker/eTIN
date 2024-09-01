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

exports.isHavingTin = async (req, res) => {
    try {
        const user = req.user;

        const getFormData = await FormData.findOne({
            "nid": user.nid,
        })

        if (!getFormData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        if (getFormData.information.tin) {
            res.status(200).json({ message: 'Yes, user has TIN', 
                tin: getFormData.information.tin
             });
        } else {
            res.status(202).json({ message: 'No, user does not have TIN' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting data', error });
    }
}