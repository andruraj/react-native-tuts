import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Todo from "./learn_tutorials/l7/todo";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          flex: 1
        }}
      >
        <Todo />
      </View>
    </TouchableWithoutFeedback>
  );
}
