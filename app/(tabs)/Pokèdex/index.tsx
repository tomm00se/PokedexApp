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
  const [pokemonData, setPokemonData] = useState<PokemonTileProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await getKantoPokemonById(currentPage);
      setPokemonData([...pokemonData, ...response]);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    } finally {
      setIsLoading(false);
      setCurrentPage(currentPage + 1); //passes value down to get
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<PokemonTileProps>) => (
    <PokemonTile {...item} />
  );

  const renderFooter = () => {
    return showFooter ? (
      <ActivityIndicator animating={true} size="large" color="#f00000" />
    ) : (
      ""
    );
  };

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
            setIsLoading(false);
            setShowFooter(true);
            fetchData();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
        {isLoading ? (
          <ActivityIndicator animating={true} size="large" color="#f00000" />
        ) : (
          ""
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
  flatlist: {
    marginBottom: 50,
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
