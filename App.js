import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { Accelerometer } from "expo-sensors";

const App = () => {
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

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

  useEffect(() => {
    const subscription = Accelerometer.addListener((accelerometerData) => {
      setAccelerometerData(accelerometerData);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.section, { flex: 20, backgroundColor: "pink" }]}>
        <Text style={styles.headerText}>Platform-Specific Example</Text>
      </View>

      <View style={[styles.section, { flex: 60, backgroundColor: "white" }]}>
        <Text style={styles.text}>
          Accelerometer Data:{"\n"}
          X: {accelerometerData.x.toFixed(2)}{"\n"}
          Y: {accelerometerData.y.toFixed(2)}{"\n"}
          Z: {accelerometerData.z.toFixed(2)}
        </Text>
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
