import express from "express";
import connection from "../config/00_connection.js";

const router = express.Router();

router.get("/:name", (req, res) => {
  const pokemonName = req.params.name;

  connection.query(
    "SELECT r.rarity_name FROM pokemon_database.pokemon pk JOIN rarity r on r.rarity_id = pk.rarity_id WHERE pokemon_name = ?",
    [pokemonName],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error en la base de datos" });
      }
      if (result.length === 0) {
        return res.status(404).send("Rareza no encontrada");
      }
      res.json(result);
    }
  );

});

export default router;
