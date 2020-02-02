import React from "react";
import { FlatList, View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoViewer = ({ todoList, delTodo }) => {
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <FlatList
        keyExtractor={(item, i) => i.toString()}
        style={{ flex: 1 }}
        data={todoList}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: "lightgrey",
              borderRadius: 10,
              padding: 10,
              margin: 10,
              backgroundColor: "#009688"
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18
              }}
            >
              {item}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "WARNING",
                  "Are you sure you want to delete this Item?",
                  [
                    { text: "Yes", onPress: () => delTodo(item) },
                    { text: "No" }
                  ]
                );
              }}
            >
              <MaterialIcons name="delete" size={24} color={"#fff"} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TodoViewer;
