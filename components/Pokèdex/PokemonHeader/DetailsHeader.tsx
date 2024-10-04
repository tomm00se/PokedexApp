import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IPokemonDetailsHeader } from "@/types/IPokemonDetailsHeader";

const DetailsHeader = (pokemonData: IPokemonDetailsHeader) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{pokemonData.name}</Text>
        <Text style={styles.id}>{`#${pokemonData.id}`}</Text>
      </View>
      <View style={styles.pills}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>{pokemonData.types[0].type.name}</Text>
        </View>
        {pokemonData.types.length > 1 && (
          <View style={styles.pill}>
            <Text style={styles.pillText}>
              {pokemonData.types[1].type.name}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: pokemonData.sprites.front_default }}
        />
      </View>
      {/* <Text>{JSON.stringify(pokemonData.cries.latest)}</Text> TODO:Add cry to press of sprite */}
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
    paddingTop: 20,
    paddingHorizontal: 20,
    textTransform: "capitalize",
    color: "#ffffff",
  },
  id: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 20,
    paddingHorizontal: 20,
    color: "#ffffff",
  },
  pills: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  pill: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 6,
    color: "#FFFFFF",
    fontSize: 14,
    borderRadius: 16,
  },
  pillText: {
    textTransform: "capitalize",
    color: "white",
    fontSize: 14,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default DetailsHeader;
