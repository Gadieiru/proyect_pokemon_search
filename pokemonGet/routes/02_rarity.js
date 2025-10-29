import express from "express";
import connection from "../config/00_connection.js";

const router = express.Router();

router.get("/rarity/:rarity", (req, res) => {
  const pokemonRarity = req.params.rarity;

  const rarity = connection.query(
    "SELECT * FROM pokemon_database.rarity WHERE rarity_name = ?",
    [pokemonRarity],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error en la base de datos" });
      }
      res.json(result);
    }
  );

  if (!rarity) {
    return res.status(404).send("Rareza no encontrada");
  }
  res.send(rarity);
});

export default router;
