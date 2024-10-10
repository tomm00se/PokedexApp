import { IPokemonTileProps } from "@/components/PokemonTile";
import apiClient from ".";

export const getAllPokemon = async (currentPage: number) => {
  const pokemonPageIncrementSize = 12;
  try {
    const pokemonData: IPokemonTileProps[] = [];
    for (let i = 1; i <= pokemonPageIncrementSize; i++) {
      try {
        const pokemonID = i + (currentPage - 1) * pokemonPageIncrementSize;

        const response = await apiClient.get(`pokemon/${pokemonID}`);

        const pokemonTileData: IPokemonTileProps = {
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
