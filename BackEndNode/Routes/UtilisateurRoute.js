const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UtilisateurController");

router
    .post( "/addUser", userController.AjouterUtilisateur )
    .post( "/login", userController.Login )
    .post("/logout",userController.Logout)
    
module.exports = router;