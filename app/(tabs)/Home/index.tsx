import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Home</Text>
    </SafeAreaView>
  );
};

export default home;

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
