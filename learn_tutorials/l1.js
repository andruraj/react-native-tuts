import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: "blue",
          padding: 20,
          fontWeight: "bold"
        }}
      >
        My First App
      </Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.boldText}>
        Open up App.js to start working on your app!
      </Text>
      {/* styles cannot be inherited from different parent. eg => view to text gives error. text to text styles can be inherited. */}
      <Text style={styles.yellowText}>
        Open up App.js to start <Text>test</Text> working on your app!
      </Text>
    </View>
  );
}

//styles object => no css support
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  boldText: {
    fontWeight: "bold"
  },
  yellowText: {
    backgroundColor: "yellow"
  }
});
