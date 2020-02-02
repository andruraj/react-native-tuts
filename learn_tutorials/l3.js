import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = React.useState("Test");
  const [age, setAge] = React.useState(20);

  return (
    <View style={styles.container}>
      <Text>
        My Name is {name !== "" || undefined || null ? name : "Test"} and I'm{" "}
        {age !== "" || undefined || null ? age : 20} yrs old.
      </Text>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your Name"
          onChangeText={val => setName(val)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your age"
          onChangeText={e => setAge(e)}
        />
      </View>
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
  btnContainer: {
    marginTop: 20
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 5,
    margin: 10
  }
});
