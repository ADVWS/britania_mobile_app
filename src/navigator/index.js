import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { navigationRef } from "./RootNavigation";

import SplashScreen from "../screen/Splash_screen";
import LoginScreen from "../screen/Login_screen";
import SigninScreen from "../screen/Signin_screen";
import OTPScreen from "../screen/OTP_screen";

const Stack = createNativeStackNavigator();

function AllNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AllNavigator;
