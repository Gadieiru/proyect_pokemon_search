import express from "express";
import connection from "../config/00_connection.js";

const router = express.Router();

router.get("/location/:location", (req, res) => {
  const pokemonLocation = req.params.location;

  const location = connection.query(
    "SELECT * FROM pokemon_database.location WHERE location_name = ? ",
    [pokemonLocation],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error en la base de datos" });
      }
      res.json(result);
    }
  );

  if (!location) {
    return res.status(404).send("Ubicacion no encontrada");
  }
  res.send(location);
});

export default router;
