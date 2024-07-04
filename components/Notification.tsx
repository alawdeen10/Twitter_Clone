import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

const Notification = () => {
  const [focusedItemIndex, setFocusedItemIndex] = useState(null);
  useFocusEffect(
    useCallback(() => {
      setFocusedItemIndex(2);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header name="Notification" />
      <NavigationBar focusedItemIndex={focusedItemIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
  },
});

export default Notification;
