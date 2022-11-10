import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createWormhole } from "react-native-wormhole";

const serverBaseUrl = "http://localhost:50200";

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
      } else if (moduleId === "expo-router") {
        return require("expo-router");
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

const ServerPage = ({ route }) => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Wormhole
        source={{
          uri: `${serverBaseUrl}/${route.params?.serverPageId}.js`
        }}
        color={"lime"}
      />
    </View>
  );
};

export default ServerPage;
