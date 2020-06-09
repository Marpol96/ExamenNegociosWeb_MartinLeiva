const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("./models/Examen");
const app = express();
app.engine(
    "hbs",
    exphbs({
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes());
app.listen(8000, () => {
    console.log("servidor iniciado en el puerto 8000");
});
//repositorio en github