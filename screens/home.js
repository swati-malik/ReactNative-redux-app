import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("./3.jpg")}
      blurType="light"
      resizeMode="cover"
    >
      <Text
        style={{ fontSize: 20, color: "white", textAlign: "center", top: 20 }}
      >
        COURSES FOR YOU
      </Text>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <Text style={{ fontSize: 30 }}>Click!!!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  view: {
    flexDirection: "row",
    width: 352,
    height: 70,
    margin: 10,
    backgroundColor: "#ffcbf2",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50
  }
});
