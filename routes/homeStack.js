import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Details from "../screens/details";
import FurtherDetails from "../screens/FurtherDetails";
import FurtherDetailsTwo from "../screens/FurtherDetailsTwo";
import Courses from "../screens/Courses";
import ShoppingCartIcon from "../screens/ShoppingCartIcon";
import { Provider } from "react-redux";
import store from "../store";
//import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerRight: () => <ShoppingCartIcon />
            }}
          />
          <Stack.Screen
            name="FurtherDetails"
            component={FurtherDetails}
            options={{
              headerRight: () => <ShoppingCartIcon />
            }}
          />
          <Stack.Screen
            name="FurtherDetailsTwo"
            component={FurtherDetailsTwo}
            options={{
              headerRight: () => <ShoppingCartIcon />
            }}
          />
          <Stack.Screen
            name="Your Courses"
            component={Courses}
            options={{
              headerRight: () => <ShoppingCartIcon />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
