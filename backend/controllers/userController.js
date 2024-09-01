const FormData = require("../models/formModel");
const Ticket = require("../models/ticketModel");

const getUserData = async (nid) => {
    try {
        const getFormData = await FormData.findOne({
            "nid": nid,
        })

        if (!getFormData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        return getFormData;
    } catch (error) {
        console.log(error)
    }
}

exports.changeContact = async (req, res) => {
    try {
        const user = req.user;

        if (!req.body.contact) {
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
            res.status(200).json({
                message: 'Yes, user has TIN',
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

exports.generateTicket = async (req, res) => {
    try {
        const user = req.user;
        const { requestType, description } = req.body;
        const data = await getUserData(user.nid);

        console.log(data)

        const ticket = new Ticket({
            ticketNumber: Math.random().toString(36).substring(7),
            name: data.information.taxPayersName,
            nid: user.nid,
            phoneNumber: data.information.mobileNumber,
            email: data.information.email,
            requestType: requestType,
            description: description,
            status: 'Pending',
        });

        await ticket.save();
        res.status(201).json({ message: 'Ticket generated successfully', ticketNumber: ticket.ticketNumber });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while generating ticket', error });
    }
}

exports.getTicketStatus = async (req, res) => {
    try {
        const user = req.user;

        const ticket = await Ticket.find({
            "nid": user.nid,
        });

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        res.status(200).json({ message: 'Ticket status', ticket });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while getting ticket status', error });
    }
}