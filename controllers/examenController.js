const examen = require("../models/examen");
exports.home = (req, res, next) => {
    res.render("crear_examen");
}
exports.nuevoExamen = (req, res, next) => {
    const { montoPrestamo, Anios, Interes } = req.body;
    var interes = Number.Interes / 100;
    var meses = Number.Anios * 12;
    req.send(`La cuota a pagar es: ${
        ((Number.montoPrestamo * (interes))/(1 - (1 + (interes))** (- (meses))
    }`);
};