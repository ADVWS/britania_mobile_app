import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Styles } from "../styles";
import Script from "../script";

import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import ProfileForm from "../component/Profile_component/ProfileForm";
import MainHeader from "../component/mainHeader";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../globalState";

//transparent f1645e

export default function Profile_screen() {
  const [userProfile, setUserProfile] = useRecoilState(Global.userProfile);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const updateUserProfile = useSetRecoilState(Global.userProfile);
  const setImage = () => {
    var image = "";
    if (userProfile.me.image) {
      image = { uri: userProfile.me.name };
    } else {
      image = require("../../assets/image/Britania-connect-assets/default-img-circle.png");
    }
    return <ProfilePicCom picture={image} />;
  };

  const updateGlobal = (data) => {
    console.log("VALUE:::", data);
    var user = Script.recoilTranform(userProfile);
    (user.me.name = data.name), (user.me.mobileNo = data.mobileNo);
    user.me.email = data.email;
    updateUserProfile(user);
  };

  return (
    <LinearGradient
      colors={["#FFF", "#FFF"]}
      style={[Styles.flex, Styles.al_center]}
    >
      <View style={[Styles.w100, Styles.h100]}>
        <MainHeader name={LANG.profile_text_01} backto={"Account"} />
        <ScrollView style={[Styles.w100, Styles.h100]}>
          {/* Single Quotes Only */}
          {setImage()}
          <ProfileForm
            userProfile={userProfile.me}
            LANG={LANG}
            updateGlobal={updateGlobal}
          />
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
