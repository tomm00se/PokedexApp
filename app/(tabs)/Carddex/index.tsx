import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const CardDex = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Carddex</Text>
    </SafeAreaView>
  );
};

export default CardDex;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 20,
  },
});
