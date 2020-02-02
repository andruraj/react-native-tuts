import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = React.useState(
    "Open up App.js to start working on your app!"
  );

  const handleClick = () => {
    setName("My First App");
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.btnContainer}>
        {/* Cannot apply style to button */}
        <Button title="update button" onPress={handleClick} />
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
  }
});
