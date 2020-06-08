import { Linking } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button
} from "react-native";
import Constants from "expo-constants";
import { rctNative } from "./Data";
import Products from "./Products";

class FurtherDetails extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require("./react.jpg")}
        blurRadius={Platform.OS == "ios" ? 4 : 2}
        blurType="light"
        resizeMode="cover"
      >
        <Text
          style={{
            fontSize: 15,
            color: "grey",
            textAlign: "center",
            margin: 10
          }}
        >
          Click on the name of tutorial to add to your Course list!!
        </Text>
        <TouchableOpacity style={styles.container}>
          <View>
            <Products products={rctNative} onPress={this.props.addItemToCart} />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product =>
      dispatch({ type: "ADD_TO_CART", payload: product })
  };
};
export default connect(null, mapDispatchToProps)(FurtherDetails);
const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  view1: {
    flexDirection: "row",
    width: 330,
    height: 60,
    margin: 20,

    backgroundColor: "darkslateblue",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 26
  },
  text: {
    margin: 15,
    fontSize: 15,
    textAlign: "center",
    color: "#832161"
  }
});
