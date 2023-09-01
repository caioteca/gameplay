import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";


const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>

      <Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={Signin}
      />

      <Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />

    </Navigator>
  )
}