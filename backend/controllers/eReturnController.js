const TaxReturn = require("../models/taxReturnModel");

exports.singlePageReturn = async (req, res) => {
    try {
        const taxReturn = new TaxReturn(req.body);
        taxReturn.isSinglePageReturn = true;

        const checkAlreayExist = await TaxReturn.findOne({ nid: taxReturn.nid, assessment_year: taxReturn.assessment_year });

        console.log(taxReturn)

        if (checkAlreayExist) {
            return res.status(400).json({ error: "Return already submitted for this year" });
        }

        await taxReturn.save();
        res.status(200).json({ message: "Return submitted successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error while submit" });
    }
};

exports.isReturnSubmitted = async (req, res) => {
    try {
        const { user } = req;

        const response = await TaxReturn.findOne({
            nid: user.nid,
            assessment_year: req.body.assessment_year,
        });

        if (response) {
            return res.status(200).json({ isSubmitted: true });
        }
        else{
            return res.status(200).json({ isSubmitted: false });
        }
    } catch (error) {
        res.status(500).json({ error: "Error while submit", error });
    }
}

// TODO: optional
exports.agreeSinglePageReturn = async (req, res) => {
    try {
        const { user } = req;
        const data = req.body;

        res.status(200).json({ message: "Return agreed successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error while agree" });
    }
}
