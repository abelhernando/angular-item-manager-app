const express = require("express");
const cors = require("cors");
const logic = require("../logic");

const app = express();
const port = "8080";

app.use(cors());

app.listen(port, () => {
  console.log(`Server runing on port ${port}!`);
});

app.get("/products", (req, res) => {
  const sort = { field: req.query.field, order: req.query.order };
  const response = logic.getProducts(req.query.search, req.query.page, sort);

  res.status(200).json(response);
});

module.exports = app;
