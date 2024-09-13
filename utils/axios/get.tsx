import apiClient from ".";

export const getAllPokemon = async () => {
  try {
    const response = await apiClient.get("pokemon?limit=1000");
    return response;
  } catch (error) {
    console.log("Error fetching pokemon...", error);
    throw error;
  }
};
