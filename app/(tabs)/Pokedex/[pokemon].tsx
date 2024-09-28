import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { getPokemonById } from "@/utils/axios/getPokemonById";

export default function pokemonDetails() {
  const { pokemon: pokemonId } = useLocalSearchParams();

  const fetchData = async () => {
    try {
      const response = await getPokemonById(pokemonId); //TODO: why is this not a string? how can it be string[]??
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching Pokemon by ID:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>{}</Text>
    </View>
  );
}
