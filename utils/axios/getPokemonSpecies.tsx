import apiClient from ".";

export const getPokemonSpecies = async (id: string) => {
  try {
    const response = await apiClient.get(`/pokemon-species/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching description with ID ${id}:`, error);
    throw error;
  }
};
