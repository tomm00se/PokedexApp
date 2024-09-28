import { PokemonTileProps } from "@/components/Pokèdex/PokemonTile/IPokemonTile";
import apiClient from ".";

export const getAllPokemon = async (currentPage: number) => {
  const pokemonPageIncrementSize = 12;
  try {
    const pokemonData: PokemonTileProps[] = [];
    for (let i = 1; i <= pokemonPageIncrementSize; i++) {
      try {
        const pokemonID = i + (currentPage - 1) * pokemonPageIncrementSize;
        console.log(pokemonID);

        const response = await apiClient.get(`pokemon/${pokemonID}`);

        const pokemonTileData: PokemonTileProps = {
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
      console.log(pokemonData);
    }
    return pokemonData;
  } catch (error) {
    console.log("Error fetching pokemon...", error);
    throw error;
  }
};
