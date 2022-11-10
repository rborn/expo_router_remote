import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";

import { createWormhole } from "react-native-wormhole";

// import Banner from "./box";

const { Wormhole } = createWormhole({
  global: {
    require: (moduleId) => {
      if (moduleId === "react") {
        return require("react");
      } else if (
        moduleId === "react-native" ||
        moduleId === "react-native-web"
      ) {
        return require("react-native");
      } else if (moduleId === "@babel/runtime/helpers/interopRequireDefault") {
        return require("@babel/runtime/helpers/interopRequireDefault");
        // } else if (moduleId === "@mobily/stacks") {
        //   return require("@mobily/stacks");
      }
      return null;
    }
  },
  verify: async () => true
});

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/local/greetings" style={styles.link}>
        Go to local greetings
      </Link>
      <Link href="/server/greetings" style={styles.link}>
        Go to server greetings
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

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
