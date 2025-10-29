import express from "express";
import connection from "../config/00_connection.js";

const router = express.Router();

router.get("/types/:types", (req, res) => {
  const pokemonType = req.params.type;

  const types = connection.query(
    "SELECT * FROM pokemon_database.types WHERE type_name = ?",
    [pokemonType],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error en la base de datos" });
      }
      res.json(result);
    }
  );

  if (!types) {
    return res.status(404).send("Tipo de pokemon no encontrado");
  }
  res.send(types);
});

export default router;
