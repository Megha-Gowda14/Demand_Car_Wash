const MemberModel = require("../model/memberModel");

exports.updateProfile = (req, res) => {
  const id = req.params.washId;
  MemberModel.findByIdAndUpdate({ _id: id },req.body )
    .exec()
    .then(() => {
      MemberModel.findOne({_id:req.params.id}).then(function(washer){
        res.send(washer);
      console.log("Profile Updated Successfully: ");
      });
    })
    .catch((err) => {
      console.log("Profile Update error: " + err);
      res.status(500).json({ "Profile Update error ": err });
    });
};

//Profile delete
exports.deleteProfile = (req, res) => {
  const id = req.params.washId;
  MemberModel.deleteOne({ _id: id })
    .exec()
    .then((response) => {
      res.status(200).json({
        message: "Account Deleted",
      });
    })
    .catch((err) => {
      console.log("Account Delete error: " + err);
      res.status(500).json({ "Account Delete error ": err });
    }); 
};
