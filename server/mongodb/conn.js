const mongoose = require("mongoose");
let url = "mongodb+srv://admin:admin@softseekers.sdndlpq.mongodb.net/test";
module.exports = mongoose
  .connect(url)
  .then((response) => {
    console.log("COnnection Established");
  })
  .catch((err) => {
    console.log(err);
  });
