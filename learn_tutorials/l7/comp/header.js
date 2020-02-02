import React from "react";
import { View, Text } from "react-native";

const TodoHeader = () => {
  return (
    <View
      style={{
        backgroundColor: "#2196F3",
        marginTop: 25,
        padding: 20
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          fontSize: 24
        }}
      >
        ToDo List
      </Text>
    </View>
  );
};

export default TodoHeader;
