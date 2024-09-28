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

import { getAllPokemon } from "@/utils/axios/getAllPokemon";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Pokèdex = () => {
  const [pokemonData, setPokemonData] = useState<PokemonTileProps[]>([]);
  const [showFooter, setShowFooter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const paginatedResponse = await getAllPokemon(currentPage);
      setPokemonData([...pokemonData, ...paginatedResponse]);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    } finally {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<PokemonTileProps>) => (
    <GestureHandlerRootView>
      <PokemonTile {...item} />
    </GestureHandlerRootView>
  );

  const renderFooter = () => {
    return showFooter ? (
      <ActivityIndicator animating={true} size="large" color="#000000" />
    ) : (
      ""
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>Pokèdex</Text>
        <FlatList
          style={styles.flatlist}
          data={pokemonData}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainerStyle}
          columnWrapperStyle={styles.columnWrapperStyle}
          initialNumToRender={10}
          onEndReached={() => {
            setShowFooter(true);
            fetchData();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
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
  flatlist: {
    marginBottom: 50,
  },
  contentContainerStyle: {
    justifyContent: "space-around",
    padding: 20,
  },
  columnWrapperStyle: {
    display: "flex",
    flexBasis: "50%",
    marginBottom: 10,
    gap: 10,
  },
});
