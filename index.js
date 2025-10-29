// Consejo: siempre al importar agregar tambien la extension del archivo, ej: import connection from "./pokemonGet/config/00_connection"; => mal;     import connection from "./pokemonGet/config/00_connection.js"; => agrega el .js
import express from "express";
import connection from "./pokemonGet/config/00_connection.js";
import pokemonRoutes from "./pokemonGet/routes/01_pokemon.js";
import rarityRoutes from "./pokemonGet/routes/02_rarity.js";
import typesRoutes from "./pokemonGet/routes/03_types.js";
import locationRoutes from "./pokemonGet/routes/04_location.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Buscador de pokemons");
});

app.use("/pokemon/name", pokemonRoutes);
app.use("/pokemon/rarity", rarityRoutes);
app.use("/pokemon/types", typesRoutes);
app.use("/pokemon/location", locationRoutes);

app.post("/", () => {});

const port = process.env.port || 3306;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));

// error, estamos utilizando el comando connection.end(), sin haber importado el connection.
connection.end();
