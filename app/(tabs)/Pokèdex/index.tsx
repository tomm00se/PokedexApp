import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  PokemonTile,
  PokemonTileProps,
} from "@/components/Pokèdex/PokemonTile";

import pokemonData from "@/utils/pokemonData";

const Pokèdex = () => {
  const renderItem = ({ item }: ListRenderItemInfo<PokemonTileProps>) => (
    <PokemonTile {...item} />
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>Pokèdex</Text>
        <FlatList
          data={pokemonData}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainerStyle}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pokèdex;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 20,
  },
  link: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  contentContainerStyle: {
    justifyContent: "space-around",
    padding: 20,
  },
  columnWrapperStyle: {
    display: "flex",
    marginBottom: 10,
    gap: 10,
  },
});
