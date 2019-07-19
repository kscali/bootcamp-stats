const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeneralAssemblySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  graduationYear: {
    type: Number,
    required: true
  },
  monthsToFindJob: {
    type: Number,
    required: true
  },
  background: {
    type: String
  },
  jobApps: {
    type: Number,
    required: true
  },
  phoneScreens: {
    type: Number
  },
  onSites: {
    type: Number
  },
  referral: {
    type: Boolean
  },
  coldApply: {
    type: Boolean
  },
  haveDegree: {
    type: Boolean
  },
  typeDegree: {
    type: String
  },
  positionHired: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  },
  yrsCoding: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = gA = mongoose.model("gA", GeneralAssemblySchema);
