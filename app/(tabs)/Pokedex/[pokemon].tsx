import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getPokemonById } from "@/utils/axios/getPokemonById";
import { IPokemonDetails } from "@/types/IPokemonDetails";

export default function PokemonDetails() {
  const { pokemon: pokemonId } = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState<IPokemonDetails | null>(null);

  const fetchData = async (pokemonId: string) => {
    try {
      const response = await getPokemonById(pokemonId); //Typeguard in useEffect
      setPokemonData(response);
    } catch (error) {
      console.error("Error fetching Pokemon by ID:", error);
    }
  };

  useEffect(() => {
    if (typeof pokemonId === "string") {
      fetchData(pokemonId);
    }
  }, [pokemonId]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {pokemonData && <Text style={styles.title}>{pokemonData.name}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 20,
    textTransform: "capitalize",
  },
});
