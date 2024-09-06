const TaxReturn = require("../models/taxReturnModel");

exports.singlePageReturn = async (req, res) => {
    try {
        const taxReturn = new TaxReturn(req.body);
        taxReturn.isSinglePageReturn = true;
        
        const checkAlreayExist = await TaxReturn.findOne({ nid: taxReturn.nid, assessment_year: taxReturn.assessment_year });

        console.log(taxReturn)

        if(checkAlreayExist) {
            return res.status(400).json({ error: "Return already submitted for this year" });
        }

        await taxReturn.save();
        res.status(200).json({ message: "Return submitted successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error while submit" });
    }
};
