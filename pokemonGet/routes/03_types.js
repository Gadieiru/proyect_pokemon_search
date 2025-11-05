import express from "express";
import connection from "../config/00_connection.js";

const router = express.Router();

router.get("/:name", (req, res) => {
  const pokemonName = req.params.name;

  connection.query(
    "SELECT GROUP_CONCAT(DISTINCT t.type_name SEPARATOR '/ ') type_name FROM pokemon pk JOIN pokemon_types pkt ON pkt.pokemon_id = pk.pokemon_id JOIN types t ON t.types_id = pkt.types_id WHERE pk.pokemon_name = ?",
    [pokemonName],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error en la base de datos" });
      }
      if (result.length === 0) {
        return res.status(404).send("Tipo de pokemon no encontrado");
      }
      res.json(result);
    }
  );
});
export default router;
