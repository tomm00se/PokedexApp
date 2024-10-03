import { IPokemonTile } from "@/types/IPokemonTile";
import apiClient from ".";

export const getAllPokemon = async (currentPage: number) => {
  const pokemonPageIncrementSize = 12;
  try {
    const pokemonData: IPokemonTile[] = [];
    for (let i = 1; i <= pokemonPageIncrementSize; i++) {
      try {
        const pokemonID = i + (currentPage - 1) * pokemonPageIncrementSize;

        const response = await apiClient.get(`pokemon/${pokemonID}`);

        const pokemonTileData: IPokemonTile = {
          name: response.data.species.name,
          id: response.data.id,
          type: response.data.types[0].type.name,
          secondType: response.data.types[1]?.type.name,
          image: response.data.sprites.front_default,
        };
        pokemonData.push(pokemonTileData);
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`Error fetching pokemon with ID ${i}:`, error);
      }
    }
    return pokemonData;
  } catch (error) {
    console.error("Error fetching pokemon...", error);
    throw error;
  }
};
