import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { getBackgroundColorCode } from "@/utils/getBackgroundColorCode";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

export interface IPokemonTileProps {
  name: string;
  id: string;
  type: string;
  secondType?: string;
  image: string;
}

export const PokemonTile: React.FC<IPokemonTileProps> = ({
  name,
  id,
  type,
  secondType,
  image,
}) => {
  const backgroundColor = getBackgroundColorCode(type);

  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/Pokedex/${id}`); //this makes a dynamic page that links to the [pokemon] page
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={handleNavigation}
    >
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>{`#${id}`}</Text>
      </View>
      <View style={styles.pills}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>{type}</Text>
        </View>
        {secondType && (
          <View style={styles.pill}>
            <Text style={styles.pillText}>{secondType}</Text>
          </View>
        )}
      </View>
      <Image style={styles.image} source={{ uri: image }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 16,
    padding: 15,
    maxHeight: 150,
    height: 150,
    flexShrink: 1,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  name: {
    fontSize: 20,
    width: "100%",
    fontWeight: "bold",
    color: "#FFFFFF",
    textTransform: "capitalize", //Capitalises first letter (no need for .toUpperCase())
  },
  id: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.8,
    marginTop: 5,
  },
  pills: {
    flexDirection: "column",
    paddingTop: 5,
    alignItems: "flex-start",
    zIndex: 99999,
  },
  pill: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 3,
    color: "#FFFFFF",
    fontSize: 14,
    borderRadius: 16,
    alignSelf: "flex-start",
  },
  pillText: {
    textTransform: "capitalize",
    color: "white",
    fontSize: 14,
  },
  image: {
    width: 160,
    height: 160,
    bottom: -20,
    right: -20,
    zIndex: -99999,
    position: "absolute",
  },
});
