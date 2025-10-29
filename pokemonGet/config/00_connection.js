import mysql from "mysql2";

// Aqui nos conectamos a la base de datos de mysql a la que queremos acceder
const connection = mysql.createConnection({
  host: "localhost",
  database: "pokemon_database",
  user: "root",
  password: "root",
});

// Hacemos la validacion de conexion, si la conexion falla nos lanzara un error, si la conexion es valida nos arrojara a la consola un "CONEXION EXITOSA";
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("CONEXION EXITOSA");
  }
});

export default connection;

