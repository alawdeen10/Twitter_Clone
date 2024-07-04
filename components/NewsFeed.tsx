import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import Down_Arrow from "../assets/images/down-arrow.png";
import heart from "../assets/images/heart.png";
import arrow from "../assets/images/arrows.png";
import share from "../assets/images/share.png";
import chat from "../assets/images/chat.png";

const NewsFeed = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.header_dp}>
          <Image
            source={item.dp}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              marginBottom: 80,
            }}
          />
        </View>
        <View style={styles.feed_content}>
          <View style={styles.post_header}>
            <Text style={{ fontWeight: "900", fontSize: 18 }}>{item.name}</Text>
            <Text style={{ fontSize: 14 }}>{item.username}</Text>
            <Text style={{ fontSize: 14 }}>{item.time}</Text>
            <Image source={Down_Arrow} />
          </View>
          <View>
            <Text style={styles.post_content}>{item.post_content}</Text>
          </View>
        </View>
      </View>
      <View style={styles.post_image}>
        <Image source={item.post_img} style={{ width: "100%", height: 200 }} />
      </View>
      <Pressable style={styles.post_buttons}>
        <View style={styles.buttons}>
          <Image source={chat} style={{ width: 16, height: 16 }} />
          <Text style={styles.button_text}>{item.comment}</Text>
        </View>
        <View style={styles.buttons}>
          <Image source={arrow} style={{ width: 16, height: 16 }} />
          <Text style={styles.button_text}>{item.retweet}</Text>
        </View>
        <View style={styles.buttons}>
          <Image source={heart} style={{ width: 16, height: 16 }} />
          <Text style={styles.button_text}>{item.likes}</Text>
        </View>
        <View style={styles.buttons}>
          <Image source={share} style={{ width: 16, height: 16 }} />
          <Text style={styles.button_text}>{item.share}</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.feed}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{
          width: "100%",
          marginLeft: 6,
          marginTop: 10,
          marginBottom: 150,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    height: "100%",
    width: "100%",
    backgroundColor: "#B4B7BD",
    marginBottom: 400,
  },
  post: {
    backgroundColor: "white",
    marginBottom: 20,
    padding: 10,
    width: "97%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  header_dp: {
    marginRight: 10,
  },
  feed_content: {
    flex: 1,
  },
  post_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  post_content: {
    fontSize: 15,
    lineHeight: 20,
    color: "black",
    fontWeight: "500",
  },
  post_image: {
    marginVertical: 10,
    width: "100%",
  },
  post_buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: "#017afd",
  },
});

export default NewsFeed;
