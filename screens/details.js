import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button
} from "react-native";

class Details extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text
          style={{
            fontSize: 20,
            color: "blue",
            textAlign: "center",
            margin: 10
          }}
        >
          Select The Topic!
        </Text>
        <View style={styles.view1}>
          <Button
            onPress={() => this.props.navigation.navigate("FurtherDetails")}
            title="React Native"
            color="#841584"
          />
        </View>
        <View style={styles.view2}>
          <Button
            onPress={() => this.props.navigation.navigate("FurtherDetailsTwo")}
            title="Redux"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}
export default Details;
const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  view1: {
    marginTop: 30,
    flexDirection: "row",
    width: 352,
    height: 70,
    margin: 10,

    backgroundColor: "#d1cfe2",
    justifyContent: "center",
    alignItems: "center"
  },
  view2: {
    flexDirection: "row",
    width: 352,
    height: 70,
    margin: 10,

    backgroundColor: "#d1cfe2",
    justifyContent: "center",
    alignItems: "center"
  }
});
