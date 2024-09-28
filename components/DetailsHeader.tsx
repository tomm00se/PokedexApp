import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { IPokemonDetails } from "@/types/IPokemonDetails";
import { getBackgroundColorCode } from "@/utils/getBackgroundColorCode";

const DetailsHeader = (pokemonData: IPokemonDetails) => {
  console.log(pokemonData);

  return (
    <View style={[styles.container]}>
      <View style={styles.details}>
        <Text style={styles.title}>{pokemonData.name}</Text>
        <Text style={styles.id}>{`#${pokemonData.id}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "50%",
    width: "100%",
    borderRadius: 22,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 20,
    textTransform: "capitalize",
    zIndex: 999999,
    color: "#ffffff",
  },
  id: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 20,
    textTransform: "capitalize",
    zIndex: 999999,
    color: "#ffffff",
  },
});

export default DetailsHeader;
