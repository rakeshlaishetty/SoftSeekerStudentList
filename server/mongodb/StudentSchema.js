const mongoose = require("mongoose");

const Student = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
  },
  Address: {
    type: String,
  },
});

module.exports = mongoose.model("Student", Student);
