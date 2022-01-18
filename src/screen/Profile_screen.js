import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Styles } from "../styles";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import ProfileForm from "../component/Profile_component/ProfileForm";
import MainHeader from "../component/mainHeader";
import { useRecoilState } from "recoil";
import * as Global from "../globalState"
//transparent f1645e

export default function Profile_screen() {
  const [userProfile, setUserProfile] = useRecoilState(Global.userProfile)
  const setImage = () => {
    var image = ''
    if (userProfile.me.image) {
      image = { uri: userProfile.me.name }
    } else {
      image = require("../../assets/image/Britania-connect-assets/default-img-circle.png")
    }
    return (<ProfilePicCom picture={image} InputValue={InputValue}/>)
  }

  const InputValue = (name, mobileno, image) => {
    if(mobileno){
      mobileno = mobileno.trim()
    }
    console.log('VALUE:::', name, mobileno, image)
  }

  return (
    <LinearGradient
      colors={["#FFF", "#FFF"]}
      style={[Styles.flex, Styles.al_center]}
    >
      <View style={[Styles.w100, Styles.h100]}>
        <MainHeader name={"ข้อมูลส่วนบุคคล"} backto={"Account"} />
        <ScrollView style={[Styles.w100, Styles.h100]}>
          {/* Single Quotes Only */}
          {setImage()}
          <ProfileForm userProfile={userProfile.me} InputValue={InputValue}/>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
