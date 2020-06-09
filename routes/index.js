const express = require("express");
const routes = express.Router();

const examenController = require("../controllers/examenController");
module.exports = function() {
    routes.get("/", examenController.home);
    routes.post("/nuevo_examen", examenController.nuevoExamen);
    return routes;
}