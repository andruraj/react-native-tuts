import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";

const AddTodo = ({ add }) => {
  const [todo, setTodo] = React.useState("");
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
      }}
    >
      <TextInput
        placeholder="Add ToDo..."
        style={{
          borderWidth: 1,
          borderColor: "lightgrey",
          padding: 5,
          borderRadius: 5,
          width: 200
        }}
        onChangeText={val => setTodo(val)}
        value={todo}
      />
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => {
          todo !== (undefined || null || "")
            ? add(todo.trim())
            : Alert.alert("Alert", "Enter Something First", ["OK"]);
          setTodo("");
        }}
      >
        <Text
          style={{
            backgroundColor: "#4CAF50",
            paddingVertical: 10,
            paddingHorizontal: 20,
            color: "white",
            fontWeight: "bold"
          }}
        >
          ADD
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
