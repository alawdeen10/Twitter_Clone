import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = ({ focusedItemIndex }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [focusedItem, setFocusedItem] = useState(focusedItemIndex);
  const navigation = useNavigation();

  useEffect(() => {
    setFocusedItem(focusedItemIndex);
  }, [focusedItemIndex]);

  const handlePress = (index) => {
    if (index === 1) {
      navigation.navigate("Search");
    } else if (index === 0) {
      navigation.navigate("Home");
    } else if (index == 2) {
      navigation.navigate("Bell");
    } else if (index == 3) {
      navigation.navigate("Inbox");
    }
  };

  const icons = [
    require("../assets/images/home.png"),
    require("../assets/images/search.png"),
    require("../assets/images/bell.png"),
    require("../assets/images/email.png"),
  ];

  return (
    <View style={styles.navbar}>
      <View style={styles.nav}>
        {icons.map((icon, index) => (
          <Pressable
            key={index}
            onPressIn={() => setHoveredItem(index)}
            onPressOut={() => setHoveredItem(null)}
            onFocus={() => setFocusedItem(index)}
            onBlur={() => setFocusedItem(null)}
            onPress={() => handlePress(index)}
            style={[
              styles.nav_items,
              hoveredItem === index && styles.hovered,
              focusedItem === index && styles.focused,
            ]}
          >
            <Image source={icon} style={{ width: 25, height: 25 }} />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nav_items: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    height: 50,
    width: 60,
    margin: 20,
    textAlign: "center",
    lineHeight: 50,
  },
  hovered: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
  },
  focused: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
  },
});

export default NavigationBar;
