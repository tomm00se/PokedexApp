import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PokemonTile } from "@/components/Pokèdex/PokemonTile/PokemonTile";
import { PokemonTileProps } from "@/components/Pokèdex/PokemonTile/IPokemonTile";

import pokemonData from "@/utils/pokemonData";
import { getKantoPokemonById } from "@/utils/axios/get";

const Pokèdex = () => {
  const [pokemon, setPokemon] = useState<PokemonTileProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllKantoPokemon = async () => {
      setIsLoading(true);
      try {
        const fetchedPokemonData = await getKantoPokemonById();
        setPokemon(fetchedPokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllKantoPokemon();
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<PokemonTileProps>) => (
    <PokemonTile {...item} />
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>Pokèdex</Text>
        {isLoading ? (
          <ActivityIndicator animating={true} size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={pokemon}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            columnWrapperStyle={styles.columnWrapperStyle}
            initialNumToRender={10}
          />
        )}
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
