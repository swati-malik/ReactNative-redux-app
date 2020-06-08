import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function ShoppingCartIcon(props) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        { padding: 5 },
        Platform.OS == "android" ? styles.iconContainer : null
      ]}
    >
      <View
        style={{
          position: "absolute",
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: "rgba(95,197,123,0.8)",
          right: 15,
          bottom: 15,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000
        }}
      >
        <Text
          style={{
            color: "white",
            right: 3,
            fontWeight: "bold",
            fontSize: 18
          }}
        >
          {props.cartItems.length}
        </Text>
      </View>
      <Icon
        onPress={() => {
          navigation.navigate("Your Courses");
        }}
        name="ios-book"
        size={30}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    cartItems: state
  };
};
export default connect(mapStateToProps)(ShoppingCartIcon);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5
  }
});
