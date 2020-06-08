import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Products extends Component {
  renderProducts = products => {
    console.log(products);
    return products.map((item, index) => {
      return (
        <View key={index} style={styles.text}>
          <Button
            onPress={() => this.props.onPress(item)}
            title={item.title}
            color="#832161"
          />
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}
export default Products;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },
  text: {
    margin: 15,
    fontSize: 15,
    textAlign: "center"
  }
});
