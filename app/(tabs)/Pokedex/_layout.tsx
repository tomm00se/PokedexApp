import React from "react";
import { Stack } from "expo-router";

const PokèdexLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="pokemonDetails"
        options={{ headerTitle: "Pokemon Details" }}
      />
    </Stack>
  );
};

export default PokèdexLayout;
