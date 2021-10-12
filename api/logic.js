const DB = require("./database.json");

const logic = {
  getProducts() {
    let products = DB.items;

    return products;
  },
};

module.exports = logic;
