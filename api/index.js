const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const logic = require("./logic.js");

const app = express();
const port = "8080";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server runing on port ${port}!`);
});

app.get("/products", (req, res) => {
  const search = req.query.search;
  let response;

  if (search) response = logic.getSearchedItems(search);
  else response = logic.getAllItems();

  res.status(200).json(response);
});

module.exports = app;
