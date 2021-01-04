
const Confirmed = require("../models/confirmed");


exports.addConfirmed = (req, res) => {
  
  const { age, gender, coronaAffected, notimes, currentstatus, workingtype, problems, token } = req.body;

  const confirmed = new Confirmed( req.body );

  confirmed.save((error, confirmed) => {
    if (error) return res.status(400).json({ error: "confirmed cancelled" });
    if (confirmed) {
      res.status(201).json({ confirmed });
    }
  });

};

exports.getConfirmed = (req, res) => {
  Confirmed.find({}).exec((error, confirmed) => {
    if (error) return res.status(400).json({ error });
    if (confirmed) {
      res.status(200).json({ confirmed });
    }
  });
};
  