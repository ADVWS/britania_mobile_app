import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { navigationRef } from "./RootNavigation";

import SplashScreen from "../screen/Splash_screen";
import LoginScreen from "../screen/Login_screen";
import SigninScreen from "../screen/Signin_screen";
import OTPScreen from "../screen/OTP_screen";
import InputOTP from "../screen/InputOTP_screen";
import Profile from "../screen/Profile_screen"
import AllTabBottom from "../navigator_footer";
import HomecareScreen from "../screen/Homecare_screen";
import MyProject from "../screen/MyProject_screen";
import LanguageSetting from "../screen/LanguageSetting_Screen";
import InformOrderScreen from "../screen/InformOrder_screen";
import MemberManage from "../screen/MemberManage_screen";
import MemberManageIndivi from "../screen/MemberManageIndivi_screen";
import ResidentAdd from "../screen/ResidentAdd_screen";
import ResidentAddOTP from "../screen/ResidentAddOTP_screen";
import OccupantAdd from "../screen/OccupantAdd_screen";
import OccupantAddOTP from "../screen/OccupantAddOTP_screen";
import Responsible from "../screen/Responsible_screen";
import Onsite from "../screen/Onsite_screen";
import RepiairList from "../screen/RepairList_screen";
import Satisfaction from "../screen/Satisfaction_screen";
import SelectTypeInform from "../screen/SelectTypeInform_screen";
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
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Language" component={LanguageSetting} />
        <Stack.Screen name="TabFooter" component={AllTabBottom} />
        <Stack.Screen name="Homecare" component={HomecareScreen} />
        <Stack.Screen name="Myproject" component={MyProject} />
        <Stack.Screen name="InformOrder" component={InformOrderScreen} />
        <Stack.Screen name="Responsible" component={Responsible} />
        <Stack.Screen name="Onsite" component={Onsite} />
        <Stack.Screen name="RepiairList" component={RepiairList} />
        <Stack.Screen name="Satisfaction" component={Satisfaction} />
        <Stack.Screen name="SelectTypeInform" component={SelectTypeInform} />
        <Stack.Screen name="MemberManage" component={MemberManage} />
        <Stack.Screen name="MemberManageIndivi" component={MemberManageIndivi} />
        <Stack.Screen name="ResidentAdd" component={ResidentAdd} />
        <Stack.Screen name="ResidentAddOTP" component={ResidentAddOTP} />
        <Stack.Screen name="OccupantAdd" component={OccupantAdd} />
        <Stack.Screen name="OccupantAddOTP" component={OccupantAddOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AllNavigator;
