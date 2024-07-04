import { Image, StyleSheet, Pressable } from "react-native";
import pencil from "../assets/images/pencil.png";

const Post = () => {
  return (
    <Pressable style={styles.container}>
      <Image source={pencil} style={{ width: 25, height: 25 }} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 650,
    marginLeft: 300,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#017afd",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Post;
