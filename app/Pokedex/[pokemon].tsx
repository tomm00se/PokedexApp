import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getPokemonById } from "@/utils/axios/getPokemonById";
import { IPokemonDetails } from "@/types/IPokemonDetails";
import DetailsHeader from "@/components/DetailsHeader";
import { getBackgroundColorCode } from "@/utils/getBackgroundColorCode";

export default function PokemonDetails() {
  const { pokemon: pokemonId } = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState<IPokemonDetails>();

  const fetchData = async (pokemonId: string) => {
    try {
      const response = await getPokemonById(pokemonId); //Typeguard in useEffect
      setPokemonData(response);
    } catch (error) {
      console.error("Error fetching Pokemon by ID:", error);
    }
  };
  console.log(pokemonData, "egg");

  useEffect(() => {
    if (typeof pokemonId === "string") {
      fetchData(pokemonId);
    }
  }, [pokemonId]);

  const backgroundColor = getBackgroundColorCode(
    pokemonData?.types[0].type.name, // JSON.Stringify() helped find the value for types! use it more plz
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle={"light-content"} />
      {pokemonData && (
        <DetailsHeader
          name={pokemonData.name}
          id={pokemonData.id}
          types={pokemonData.types}
          abilities={[]}
          stats={[]}
          weight={0}
          height={0}
          sprites={pokemonData.sprites}
        />
      )}
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
