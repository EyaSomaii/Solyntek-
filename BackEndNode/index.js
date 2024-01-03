const express = require("express");
const connection = require("./ConfigDB/ConnetDB");
const app = express();
const port = 8000;
connection();
const userroute = require("./Routes/UtilisateurRoute");
var cors = require("cors");

app.use(cors({ origin: "http://127.0.0.1:5173/" }));

app.use(express.json());
app.use( "/user", userroute );
app.listen(port, () => {
  console.log(
    `Le serveur est en cours d'exécution sur http://localhost:${port}`
  );
});