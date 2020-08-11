var express = require("express");
var router = express.Router();
const index_controller = require("../controllers/index_controller");
const cors = require("cors");
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.json({ extended: false });

router.get("/ejemplo", index_controller.funcionprueba);

router.get("/view", function (req, res, next) {
  res.render("vista.html");
});

router.get("/login", function (req, res, next) {
  res.render("login.html");
});

router.post("/login2", urlencodedParser, (req, res, next) => {
  var db = [
    {
      us: "richi",
      pass: "richi1",
    },
    {
      us: "richi2",
      pass: "richi123",
    },
    {
      us: "richi3",
      pass: "richi123",
    },
    {
      us: "richi4",
      pass: "richi1",
    },
  ];
  let entrada = req.body;

  let nombre = entrada.nombre;
  let pass = entrada.pass;
  var encontrado = false;

  for (let index = 0; index < db.length; index++) {
    const element = db[index];
    if (element.us == nombre && element.pass == pass) {
      encontrado = true;
      var a = { estado: true };
      res.status(200).send(JSON.stringify(a));
      return;
    }
  }
  var a = { estado: false };
  res.status(500).send(JSON.stringify(a));
});

router.post("/input", (req, res, next) => {
  let entrada = req.body;
  console.log(entrada);
  res.send(JSON.stringify("bienvenido"));
});

module.exports = router;
