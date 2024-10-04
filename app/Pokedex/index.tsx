import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IPokemonTile } from "@/types/IPokemonTile";

import { getAllPokemon } from "@/utils/axios/getAllPokemon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PokemonTile } from "@/components/PokemonTile";

const Pokèdex = () => {
  const [pokemonData, setPokemonData] = useState<IPokemonTile[]>([]);
  const [showFooter, setShowFooter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, onChangeText] = useState("");

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

  const renderItem = ({ item }: ListRenderItemInfo<IPokemonTile>) => (
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
        <Text style={styles.title}>Pokédex</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            onChangeText(value);
          }}
          value={value}
          placeholder="Pokémon name or id"
        />
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
  input: {
    borderRadius: 16,
    height: 40,
    borderWidth: 2,
    padding: 20,
    marginHorizontal: 20,
    borderColor: "#808080",
  },
  link: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  flatlist: {
    marginBottom: 40,
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
