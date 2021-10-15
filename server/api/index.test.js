const api = require("./index");
const chai = require("chai");
let chaiHttp = require("chai-http");
const { expect } = require("chai");

chai.use(chaiHttp);

describe("api", () => {
  describe("get /products", () => {
    it("should GET all the products", (done) => {
      chai
        .request(api)
        .get("/products")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.a("object");
          expect(res.body).to.have.property("products");
          expect(res.body).to.have.property("totalCount");
          expect(res.body).to.have.property("pageCount");

          expect(res.body.products).to.be.a("array");
          expect(res.body.products.length).to.equal(5);

          done();
        });
    });
  });
});
