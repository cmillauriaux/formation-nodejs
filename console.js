const express = require("express");
const mustache = require("mustache-express");
const xml = require("xml");

const app = express();

app.use(express.static("static"));
app.use(express.static("node_modules/bootstrap/dist"));

app.engine("mustache", mustache());

app.set("views", __dirname + "/views");
app.set("view engine", "mustache");

app.get("/", function (req, res) {
  const messages = [
    { titre: "Message A", contenu: "Ceci est le message A !" },
    { titre: "Message B", contenu: "Ceci est le message B !" },
    { titre: "Message C", contenu: "Ceci est le message C !" }
  ];

  returnToClient(messages, "user.mustache", req, res);
});

function returnToClient (resultat, nomTemplate, requete, response) {
  switch (requete.accepts(["html", "json", "xml"])) {
    case "html":
      response.render(nomTemplate, resultat);
      break;
    case "json":
      response.json(resultat);
      break;
    case "xml":
      returnXML(resultat, response);
      break;
    default:
      response.sendStatus(406);
  }
}

app.get("/user/:name*?", function (req, res) {
  let messages = [
    { titre: "Message A", contenu: "Ceci est le message A" },
    { titre: "Message B", contenu: "Ceci est le message B" },
    { titre: "Message C", contenu: "Ceci est le message C" }
  ];

  returnToClient(messages, "user.mustache", req, res);
});

app.post("/prod/add", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(8080, function () {
  console.log("Serveur HTTP lancé !");
});

function returnXML (object, response) {
  response.set("Content-Type", "text/xml");
  response.send(xml(object));
}
