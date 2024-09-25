import { PokemonTileProps } from "@/components/Pokèdex/PokemonTile/IPokemonTile";
import apiClient from ".";
import { PokemonTile } from "@/components/Pokèdex/PokemonTile/PokemonTile";

export const getAllPokemon = async () => {
  try {
    const response = await apiClient.get("pokemon?limit=151");
    return response.data;
  } catch (error) {
    console.log("Error fetching pokemon...", error);
    throw error;
  }
};

export const getKantoPokemonById = async () => {
  try {
    const pokemonData: PokemonTileProps[] = [];
    for (let i = 1; i <= 151; i++) {
      try {
        const response = await apiClient.get(`pokemon/${i}`);

        const pokemonTileData: PokemonTileProps = {
          name: response.data.species.name,
          id: response.data.id,
          type: response.data.types[0].type.name,
          secondType: response.data.types[1]?.type.name,
          image: response.data.sprites.front_default,
          //data here is right
        };
        pokemonData.push(pokemonTileData);
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`Error fetching pokemon with ID ${i}:`, error);
      }
      console.log(pokemonData);
    }
    return pokemonData;
  } catch (error) {
    console.log("Error fetching pokemon...", error);
    throw error;
  }
};
