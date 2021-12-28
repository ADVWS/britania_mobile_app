import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { navigationRef } from "./RootNavigation";

import SplashScreen from "../screen/Splash_screen";
import LoginScreen from "../screen/Login_screen";
import SigninScreen from "../screen/Signin_screen";
import OTPScreen from "../screen/OTP_screen";
import InputOTP from "../screen/InputOTP_screen";
import Home from "../screen/Home_screen";
import Profile from "../screen/Profile_screen"
import AllTabBottom from "../navigator_footer";
import Homecare from "../screen/Homecare_screen";
import MyProject from "../screen/MyProject_screen";
import Account from "../screen/Account_screen";
import LanguageSetting from "../screen/LanguageSetting_Screen";

const Stack = createNativeStackNavigator();

function AllNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="InputOTP" component={InputOTP} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Language" component={LanguageSetting} />
        <Stack.Screen name="TabFooter" component={AllTabBottom} />
        <Stack.Screen name="Homecare" component={Homecare} />
        <Stack.Screen name="Myproject" component={MyProject} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AllNavigator;
