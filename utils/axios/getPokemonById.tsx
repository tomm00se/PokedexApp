import { IPokemonDetails } from "@/types/IPokemonDetails";
import apiClient from ".";

export const getPokemonById = async (id: string): Promise<IPokemonDetails> => {
  try {
    const response = await apiClient.get(`pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pokemon with ID ${id}:`, error);
    throw error;
  }
};
