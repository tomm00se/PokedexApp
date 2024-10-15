import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export interface ISearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox = ({ onSearch }: ISearchBoxProps) => {
  const [value, onChangeText] = useState("");

  const handleSubmit = async () => {
    const cleanValue = value.toLowerCase();
    onSearch(cleanValue);
  };

  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          inputMode="text"
          keyboardType="default"
          placeholder="Enter Pokemon name"
          autoCapitalize="none"
          onChangeText={(text) => {
            onChangeText(text);
          }}
          value={value}
          onSubmitEditing={handleSubmit}
          clearTextOnFocus={true}
        />
      </View>
    </>
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
