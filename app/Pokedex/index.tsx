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
import { IPokemonTile } from "@/types/IPokemonTile";

import { getAllPokemon } from "@/utils/axios/getAllPokemon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PokemonTile } from "@/components/PokemonTile";
import SearchButton from "@/components/Pokèdex/PokemonHeader/SearchButton";
import SearchBox from "@/components/Pokèdex/PokemonHeader/SearchBox";

const Pokèdex = () => {
  const [pokemonData, setPokemonData] = useState<IPokemonTile[]>([]);
  const [showFooter, setShowFooter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [showTextInput, setShowTextInput] = useState(false);

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

  const handleButtonPress = () => {
    setShowTextInput(!showTextInput);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.headingBlock}>
          <Text style={styles.title}>Pokédex</Text>
          <View onTouchStart={handleButtonPress}>
            <SearchButton />
          </View>
        </View>
        {showTextInput && <SearchBox />}
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
  headingBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 20,
  },
  input: {
    borderRadius: 30,
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderColor: "#000000",
    color: "#000000",
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
