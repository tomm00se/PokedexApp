import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons
          name="search-circle"
          size={40}
          color="#000"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    paddingTop: 20,
    paddingRight: 30,
    borderRadius: 25,
  },
});

export default SearchButton;
