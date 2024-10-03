import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IPokemonDetails } from "@/types/IPokemonDetails";

const DetailsHeader = (pokemonData: IPokemonDetails) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{pokemonData.name}</Text>
        <Text style={styles.id}>{`#${pokemonData.id}`}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: pokemonData.sprites.front_default }}
        />
        <View style={styles.pills}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>
              {pokemonData.types[0].type.name}
            </Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>
              {pokemonData.types[1].type.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
    zIndex: 999999,
    color: "#ffffff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  pills: {
    flexDirection: "row",
  },
  pill: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 3,
    color: "#FFFFFF",
    fontSize: 14,
    borderRadius: 16,
  },
  pillText: {
    textTransform: "capitalize",
    color: "white",
    fontSize: 14,
  },
});

export default DetailsHeader;
