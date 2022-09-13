const express = require("express");
const cors = require("cors");
require("./mongodb/conn");
const app = express();
const router = require("./routes/routes");

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(router);

app.listen(port, () => {
  console.log("Hello World ");
});
