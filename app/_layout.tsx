import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Pokedex" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
