import { View, Text, StyleSheet, Image } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/messi_dp.png")}
        style={styles.imageDP}
      />
      <Text style={styles.heading}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
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
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
