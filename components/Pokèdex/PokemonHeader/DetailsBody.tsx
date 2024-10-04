import { IPokemonDetailsBody } from "@/types/IPokemonDetailsBody";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DetailsBody = (pokemonData: IPokemonDetailsBody) => {
  const [isAbout, setIsAbout] = useState(true);
  const [isStats, setIsStats] = useState(false);
  const [isMoves, setIsMoves] = useState(false);
  // TODO: Pull out button navbar style pagination logic into its own component
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="About"
          color={"#808090"}
          disabled={isAbout}
          onPress={() => {
            setIsAbout(true);
            setIsStats(false);
            setIsMoves(false);
          }}
        />
        <Button
          title="Stats"
          color={"#808090"}
          disabled={isStats}
          onPress={() => {
            setIsAbout(false);
            setIsStats(true);
            setIsMoves(false);
          }}
        />
        <Button
          title="Moves"
          color={"#808090"}
          disabled={isMoves}
          onPress={() => {
            setIsAbout(false);
            setIsStats(false);
            setIsMoves(true);
          }}
        />
      </View>
      {isAbout && (
        <>
          <View style={styles.descriptionBlock}>
            <Text style={styles.descriptionText}>
              {pokemonData.flavor_text_entries[0].flavor_text.replace(
                /[\n\N\f\F]/g,
                " ",
              )}
            </Text>
          </View>
          {pokemonData.evolves_from_species && (
            <View style={styles.evoBlock}>
              <Text style={styles.evoTitle}>Evolves from:</Text>
              <Text style={styles.evoText}>
                {pokemonData.evolves_from_species.name}
              </Text>
            </View>
          )}
        </>
      )}
      {isStats && <></>}
      {isMoves && <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    height: "100%",
    borderRadius: 24,
    marginTop: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    color: "#808080",
  },
  descriptionBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  descriptionText: {
    textTransform: "capitalize",
    color: "#808080",
  },
  evoBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  evoTitle: {
    color: "#808080",
  },
  evoText: {
    color: "#808080",
    textTransform: "capitalize",
  },
});

export default DetailsBody;
