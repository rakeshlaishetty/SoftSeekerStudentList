const express = require("express");
const cors = require("cors");
require("./mongodb/conn");
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.use(router);

app.listen(8080, () => {
  console.log("Hello World ");
});
