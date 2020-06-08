import { Linking } from "react-native";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button
} from "react-native";
import Constants from "expo-constants";
import { rdux } from "./Data";
import Products from "./Products";
import { connect } from "react-redux";

class FurtherDetailsTwo extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require("./logo.png")}
        blurRadius={Platform.OS == "ios" ? 4 : 2}
        blurType="light"
      >
        <Text
          style={{
            fontSize: 15,
            color: "grey",
            textAlign: "center",
            margin: 10
          }}
        >
          Click on the name of tutorial to add to your COurse List!!
        </Text>
        <TouchableOpacity style={styles.container}>
          <View>
            <Products products={rdux} onPress={this.props.addItemToCart} />
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
export default connect(null, mapDispatchToProps)(FurtherDetailsTwo);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 26
  },

  image: {
    flex: 1,

    justifyContent: "center"
  }
});
