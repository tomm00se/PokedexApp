import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getPokemonById } from "@/utils/axios/getPokemonById";
import DetailsHeader from "@/components/Pokèdex/PokemonHeader/DetailsHeader";
import { getBackgroundColorCode } from "@/utils/getBackgroundColorCode";
import DetailsBody from "@/components/Pokèdex/PokemonHeader/DetailsBody";
import { IPokemonDetails } from "@/types/IPokemonDetails";
import { getPokemonSpecies } from "@/utils/axios/getPokemonSpecies";
import { IPokemonDetailsBody } from "@/types/IPokemonDetailsBody";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function PokemonDetails() {
  const { pokemon: pokemonId } = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState<IPokemonDetails>();
  const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonDetailsBody>();

  const fetchData = async (pokemonId: string) => {
    try {
      const response = await getPokemonById(pokemonId); //Typeguard in useEffect
      const speciesResponse = await getPokemonSpecies(pokemonId);
      setPokemonData(response);
      setPokemonSpecies(speciesResponse);
    } catch (error) {
      console.error("Error fetching Pokemon by ID:", error);
    }
  };

  useEffect(() => {
    if (typeof pokemonId === "string") {
      fetchData(pokemonId);
    }
  }, [pokemonId]);

  const backgroundColor = getBackgroundColorCode(
    pokemonData?.types[0].type.name, // JSON.Stringify() helped find the value for types! use it more plz
  );

  console.log(pokemonSpecies, "egg");

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle={"light-content"} />
      {pokemonData && pokemonSpecies && (
        <>
          <GestureHandlerRootView>
            <DetailsHeader
              name={pokemonData.name}
              id={pokemonData.id}
              types={pokemonData.types}
              sprites={pokemonData.sprites}
              cries={pokemonData.cries}
            />
            <DetailsBody
              abilities={pokemonData.abilities}
              stats={pokemonData.stats}
              weight={pokemonData.weight}
              height={pokemonData.height}
              moves={pokemonData.moves}
              flavor_text_entries={pokemonSpecies.flavor_text_entries}
              evolves_from_species={pokemonSpecies.evolves_from_species}
            />
          </GestureHandlerRootView>
        </>
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
