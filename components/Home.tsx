import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import NewsFeed from "@/components/NewsFeed";
import { View, StyleSheet } from "react-native";
import Post from "./Post";
import data from "../assets/data";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Home" />
      <NavigationBar />
      <NewsFeed data={data} />
      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    position: "relative",
  },
});
