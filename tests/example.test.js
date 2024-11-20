const request = require("supertest");
const { expect } = require("chai");
const { getRequest, postRequest } = require("../utils/requestHelper");

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("API Testing Suite", () => {
  it("should fetch a list of posts using Supertest", async () => {
    const response = await request(BASE_URL).get("/posts").expect(200);
    expect(response.body).to.be.an("array");
    expect(response.body[0]).to.have.property("id");
  });

  it("should fetch a single post using Axios", async () => {
    const data = await getRequest(`${BASE_URL}/posts/1`);
    expect(data).to.be.an("object");
    expect(data).to.have.property("id", 1);
  });

  it("should create a new post using Axios", async () => {
    const payload = { title: "foo", body: "bar", userId: 1 };
    const data = await postRequest(`${BASE_URL}/posts`, payload, {
      "Content-Type": "application/json"
    });
    expect(data).to.be.an("object");
    expect(data).to.have.property("id");
  });
});
