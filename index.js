const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;
const urlMongoAtlas =
  "mongodb+srv://admin:admin123456@dylandb.cnyiqrb.mongodb.net/";

//Fichero para levantar el servidor.
mongoose.connect(urlMongoAtlas, (err,res) => {
  try {
      if (err) {
        throw err
      }else{
        console.log("La conexión a la BD es correcta.");
        app.listen(port, () => {
          console.log("Servidor del API REST está funcionando en http://localhost:3000");
        })
      }
  } catch (error) {
    console.error(error);
  }
})

