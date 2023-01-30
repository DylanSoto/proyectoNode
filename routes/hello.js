const express = require("express");
const HelloController = require("../controller/hello");

const api = express.Router();

//Fichero para generar todas nuestras rutas.
api.get("/hello", HelloController.getHello);

module.exports = api;