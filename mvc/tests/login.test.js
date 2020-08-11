const app = require("../app.js");
const request = require("supertest");

describe("Tests de Login de usuarios", () => {
  test("POST /login2 (debería ser correcto)", function (done) {
    return request(app)
      .post("/login2")
      .send({
        nombre: "richi",
        pass: "richi1",
      })
      .set("Content-Type", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          done();
        }
      });
  });

  test("POST /login2 (debería ser incorrecto)", function (done) {
    return request(app)
      .post("/login2")
      .send({
        nombre: "richi2",
        pass: "richi2",
      })
      .set("Content-Type", "application/json")
      .expect(500)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          done();
        }
      });
  });

  test("POST /login2 (debería ser correcto)", function (done) {
    return request(app)
      .post("/login2")
      .send({
        nombre: "richi3",
        pass: "richi123",
      })
      .set("Content-Type", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          done();
        }
      });
  });

  test("POST /login2 (debería ser incorrecto)", function (done) {
    return request(app)
      .post("/login2")
      .send({
        nombre: "richi4",
        pass: "richi4",
      })
      .set("Content-Type", "application/json")
      .expect(500)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          done();
        }
      });
  });
});
