// Consejo: siempre al importar agregar tambien la extension del archivo, ej: import connection from "./pokemonGet/config/00_connection"; => mal;     import connection from "./pokemonGet/config/00_connection.js"; => agrega el .js
import express from "express";
import cors from "cors";
// import connection from "./pokemonGet/config/00_connection.js";
import pokemonRoutes from "./pokemonGet/routes/01_pokemon.js";
import rarityRoutes from "./pokemonGet/routes/02_rarity.js";
import typesRoutes from "./pokemonGet/routes/03_types.js";
import locationRoutes from "./pokemonGet/routes/04_location.js";

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.static('static'))

app.get("/", (req, res) => {
  res.send("Buscador de pokemons");
});

app.use("/pokemon/name", pokemonRoutes);
app.use("/pokemon/rarity", rarityRoutes);
app.use("/pokemon/type", typesRoutes);
app.use("/pokemon/location", locationRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));

// error, estamos utilizando el comando connection.end(), sin haber importado el connection.

