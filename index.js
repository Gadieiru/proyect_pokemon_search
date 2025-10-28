import express from "express";
import mysql from "mysql";

const app = express();

app.use(express.json())

// Aqui nos conectamos a la base de datos de mysql a la que queremos acceder
const connection = mysql.createConnection({
    host: "localhost:3306",
    database:  "pokemon_database",
    user: "root",
    password: "",
});

// Hacemos la validacion de conexion, si la conexion falla nos lanzara un error, si la conexion es valida nos arrojara a la consola un "CONEXION EXITOSA";
connection.connect((err) => {
  if(err) {
   throw err;
  }else{
    console.log("CONEXION EXITOSA")
  }
});

app.get('/', (req, res) =>{
    connection.query('SELECT * FROM pokemon', (err, result) => {
        if(err) throw err;
    });
  res.send('Buscador de api');
});
