import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [name, setName] = React.useState([
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10"
  ]);

  return (
    //Loads data on scroll => performance effective, faster
    <FlatList
      style={{
        marginTop: 24
      }}
      numColumns={2}
      keyExtractor={(item, i) => i}
      data={name}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            console.log(index);
            setName(prevName => {
              return prevName.filter((p, i) => i !== index);
            });
          }}
        >
          <Text style={styles.item}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "lightblue",
    fontSize: 24,
    padding: 30,
    margin: 24
  }
});
