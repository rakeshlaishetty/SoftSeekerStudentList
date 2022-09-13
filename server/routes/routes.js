const express = require("express");
const mongoose = require("mongoose");
const Student = require("../mongodb/StudentSchema");

const router = express.Router();

router.get("/api", (req, res) => {
  res.send("HEllo World");
});

router.get("/api/all", async (req, res) => {
  const data = await Student.find();
  res.send(data);
});

router.get("/api/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await Student.findOne({ _id: req.params.id });
  if (data) {
    res.send(data);
  } else {
    res.send({ msg: "Sorry NO data Found " });
  }
});
router.post("/api/post", async (req, res) => {
  const { FirstName, LastName, Email, Address } = req.body;
  const user = new Student({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Address: Address,
  });
  const userdata = await user.save();

  res.send(userdata);
});

router.patch("/api/:id", async (req, res) => {
  const updates = req.body;
  const updatedata = await Student.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: updates,
    }
  );
  res.send(updatedata);
});

router.delete("/api/:id", async (req, res) => {
  const updatedata = await Student.deleteOne({ _id: req.params.id });

  console.log(updatedata);
  if (updatedata) {
    res.send({ msg: "Deleted Successfully" });
  } else {
    res.send({ msg: "SOrry Not found" });
  }
});
module.exports = router;
