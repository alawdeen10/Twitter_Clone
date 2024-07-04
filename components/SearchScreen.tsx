import React, { useState, useCallback } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import NavigationBar from "./NavigationBar";
import NewsFeed from "./NewsFeed";
import data from "../assets/data";

const SearchScreen = () => {
  const [focusedItemIndex, setFocusedItemIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useFocusEffect(
    useCallback(() => {
      setFocusedItemIndex(1);
    }, [])
  );

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/messi_dp.png")}
          style={styles.imageDP}
        />
        <TextInput
          style={styles.input}
          placeholder="Search Twitter"
          placeholderTextColor="#63737b"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>
      <NavigationBar focusedItemIndex={focusedItemIndex} />
      <NewsFeed data={filteredData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    width: "100%",
    marginTop: 30,
    gap: 20,
  },
  imageDP: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "#bfdfee",
    backgroundColor: "#bfdfee",
    fontWeight: "500",
  },
});

export default SearchScreen;
