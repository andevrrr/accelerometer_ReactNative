import React from "react";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.section, { flex: 20, backgroundColor: "pink" }]}>
        <Text>Header</Text>
      </View>

      <View style={[styles.section, { flex: 60, backgroundColor: "white" }]}>
        <View style={[styles.box, { backgroundColor: "yellow" }]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
        <View style={[styles.box, { backgroundColor: "red" }]} />
      </View>

      <View style={[styles.section, { flex: 20, backgroundColor: "gray" }]}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  section: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "33.33%",
    aspectRatio: 1,
  },
});

export default App;
