
const Booking = require("../models/booking");


exports.addBooking = (req, res) => {
  
  const { age, gender, coronaAffected, notimes, currentstatus, workingtype, problems } = req.body;

  const booking = new Booking( req.body );

  booking.save((error, booking) => {
    if (error) return res.status(400).json({ error: "booking cancelled" });
    if (booking) {
      res.status(201).json({ booking });
    }
  });

};

exports.getBooking = (req, res) => {
  Booking.find({}).exec((error, booking) => {
    if (error) return res.status(400).json({ error });
    if (booking) {
      res.status(200).json({ booking });
    }
  });
};
  