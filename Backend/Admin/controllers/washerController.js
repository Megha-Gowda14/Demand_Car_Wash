const Member = require("../model/memberModel");

//FInd Available Mechanics
exports.findAvailable = (req, res) => {
  Member.find({ 
    role:"WASHER",
    status: "AVAILABLE" })
    .exec()
    .then((response) => {
      if (response.length == 0) {
        res.status(200).json({
          message: "No Mechanics are Available",
        });
      } else {
        res.status(200).json({
          response,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//FInd All washers
exports.findAll = (req, res) => {
  Member.find()
    .select("name email mobile status")
    .exec()
    .then((response) => {
      if (response.length == 0) {
        res.status(200).json({
          message: "Add a washer",
        });
      } else {
        res.status(200).json({
          response,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
