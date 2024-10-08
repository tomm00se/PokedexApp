import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const SearchBox = () => {
  const [value, onChangeText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        value={value}
        inputMode="text"
        keyboardType="default"
        placeholder="Enter Pokemon name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderColor: "#000000",
    color: "#000000",
  },
});

export default SearchBox;
