import React from "react";
import { View, Text, Button, StyleSheet, Platform, Alert } from "react-native";

const App = () => {
  const openPlatformSpecificComponent = () => {
    if (Platform.OS === "android") {
      openAndroidModal();
    } else if (Platform.OS === "ios") {
      openIosModal();
    }
  };

  const openAndroidModal = () => {
    Alert.alert(
      "Android Modal",
      "This is an Android-specific modal.",
      [
        { text: "Option 1", onPress: () => console.log("Option 1 selected") },
        { text: "Option 2", onPress: () => console.log("Option 2 selected") },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  const openIosModal = () => {
    Alert.alert(
      "iOS Modal",
      "This is an iOS-specific modal.",
      [
        { text: "Option 1", onPress: () => console.log("Option 1 selected") },
        { text: "Option 2", onPress: () => console.log("Option 2 selected") },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.section, { flex: 20, backgroundColor: "pink" }]}>
        <Text style={styles.headerText}>Platform-Specific Example</Text>
      </View>

      <View style={[styles.section, { flex: 60, backgroundColor: "white" }]}>
        <Text style={styles.text}>This is common text for both platforms.</Text>
        <Button
          title="Open Platform Component"
          onPress={openPlatformSpecificComponent}
        />
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
  headerText: {
    fontSize: 18,
    color: "white",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default App;
