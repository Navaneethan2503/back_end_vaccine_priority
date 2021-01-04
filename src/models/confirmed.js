const mongoose = require("mongoose");

// C
const confirmedSchema = new mongoose.Schema({

    age: {
    type: Number,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true
  },
  coronaAffected: {
    type: Number,
    required: true,
    trim: true,
  },
  notimes: {
    type: Number,
    required: true,
    trim: true,
  },
  currentstatus: {
    type: Number,
    required: true,
    trim: true,
  },
  workingtype: {
    type: Number,
    required: true,
    trim: true,
  },
  problems: {
  	type: Number,
  	required : true,
  	trim: true
  },
  token: {
     type : Number,
     required: true,
     trim: true
  },
 createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });


module.exports = mongoose.model("Confirmed", confirmedSchema);