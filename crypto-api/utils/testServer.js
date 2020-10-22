const supertest = require("supertest");
const app = require('../app');


function testServer() {
  return supertest(app);
}

module.exports = testServer;
