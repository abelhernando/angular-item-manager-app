const logic = require("./index");
const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe("logic", () => {
  let search, pageNumber, sort;

  beforeEach(() => {
    search = "";
    pageNumber = 1;
    sort = {};
  });

  describe("getProducts", () => {
    it("should return complete product information", () => {
      const response = logic.getProducts(search, pageNumber, sort);
      expect(response).to.have.property("products");
      expect(response.products).to.be.a("array");
      expect(response.products.length).to.equal(5);

      expect(response).to.have.property("totalCount");
      expect(response.totalCount).to.be.a("number");

      expect(response).to.have.property("pageCount");
      expect(response.pageCount).to.be.a("number");
    });

    it("should return the searched products", () => {
      search = "bolso";

      const response = logic.getProducts(search, pageNumber, sort);
      expect(response.products).to.have.length;
      expect(response.products[0].title.toLowerCase()).to.contain(search);
    });

    it("should return the products sorted ascendent", () => {
      sort = {
        field: "price",
        order: "asc",
      };

      const response = logic.getProducts(search, pageNumber, sort);
      expect(response.products).to.have.length;

      expect(Number(response.products[0].price)).to.be.lessThan(
        Number(response.products[1].price)
      );
    });

    it("should return the products sorted descendent", () => {
      sort = {
        field: "price",
        order: "desc",
      };

      const response = logic.getProducts(search, pageNumber, sort);
      expect(response.products).to.have.length;

      expect(Number(response.products[0].price)).to.be.greaterThan(
        Number(response.products[1].price)
      );
    });
  });
});
