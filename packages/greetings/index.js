import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";

const Greeting = ({ color }) => {
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: color }}>Hi!</Text>
      <Link href="/" style={styles.link}>
        Go Back
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  link: {
    color: "blue",
    margin: 10
  }
});

export default Greeting;
