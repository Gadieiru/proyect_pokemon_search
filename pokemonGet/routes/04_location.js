import express from "express";
import connection from "../config/00_connection.js";

const router = express.Router();

router.get("/:name", (req, res) => {
  const pokemonName = req.params.name;

  connection.query(
    "SELECT lc.location_name FROM pokemon_database.pokemon pk JOIN pokemon_location pkl on pkl.pokemon_id = pk.pokemon_id JOIN location lc on lc.location_id = pkl.location_id WHERE pokemon_name = ? ",
    [pokemonName],
    (err, result) => {
      if (err) {
        console.error(err);
      }
      if (result.length === 0) {
        return res.status(404).send("Ubicacion no encontrada");
      }
      res.json(result);
    }
  );
});

export default router;
