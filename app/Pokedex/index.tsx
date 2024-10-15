import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import { getAllPokemon } from "@/utils/axios/getAllPokemon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IPokemonTileProps, PokemonTile } from "@/components/PokemonTile";
import SearchButton from "@/components/Pokèdex/PokemonHeader/SearchButton";
import SearchBox from "@/components/Pokèdex/PokemonHeader/SearchBox";
import { getPokemonById } from "@/utils/axios/getPokemonById";
import { IPokemonDetails } from "@/types/IPokemonDetails";

const Pokèdex = () => {
  const [pokemonData, setPokemonData] = useState<IPokemonTileProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchedPokemon, setSearchedPokemon] = useState<IPokemonDetails>();

  const [showFooter, setShowFooter] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

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

  const onSearch = async (query: string) => {
    try {
      if (!query) {
        throw new Error("Thats not a valid pokemon");
      }
      const response = await getPokemonById(query);
      setSearchedPokemon(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setSearchedPokemon(undefined);
    }
  };

  const transformedSearchResult = useMemo((): IPokemonTileProps | undefined => {
    if (!searchedPokemon) return undefined;
    return {
      name: searchedPokemon.name,
      id: searchedPokemon.id,
      type: searchedPokemon.types[0].type.name,
      secondType: searchedPokemon.types[1]?.type.name,
      image: searchedPokemon.sprites.front_default,
    };
  }, [searchedPokemon]);

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<IPokemonTileProps>) => (
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

  const handleButtonPress = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.headingBlock}>
          <Text
            style={styles.title}
            onPress={() => {
              setSearchedPokemon(undefined);
            }}
          >
            Pokédex
          </Text>
          <View onTouchStart={handleButtonPress}>
            <SearchButton />
          </View>
        </View>
        {showSearchBar && <SearchBox onSearch={onSearch} />}
        {transformedSearchResult && (
          <FlatList
            style={styles.flatlist}
            data={[transformedSearchResult]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contentContainerStyle}
          />
        )}
        {!transformedSearchResult && (
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
