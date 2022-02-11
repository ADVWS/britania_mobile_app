import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Styles } from "../styles";
import mainScript from "../script";
import Script from "../script/Profile_script";
import * as navigate from "../navigator/RootNavigation";

import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import ProfileForm from "../component/Profile_component/ProfileForm";
import MainHeader from "../component/mainHeader";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../globalState";
import Key from "../KEYS.json"

//transparent f1645e

export default function Profile_screen() {
  const [userProfile, setUserProfile] = useRecoilState(Global.userProfile);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [ulImage, setulImage] = React.useState('')
  const [name, setName] = React.useState(userProfile.me.name);
  const [mobile, setMobile] = React.useState(userProfile.me.mobileNo);
  const [email, setEmail] = React.useState(userProfile.me.email);
  const updateUserProfile = useSetRecoilState(Global.userProfile);
  const setImage = () => {
    var image = "";
    if (userProfile.me.profileImage) {
      console.log('image:::', userProfile.me.profileImage)
      image = { uri: userProfile.me.profileImage };
      //setulImage(userProfile.me.profileImage)
    } else {
      image = require("../../assets/image/Britania-connect-assets/default-img-circle.png");
    }
    return <ProfilePicCom picture={image} uploadImage={uploadImage} />;
  };

  const uploadImage = (img) => {
    setulImage(img)
  }

  const editProfile = (name, mobileNo, email) => {
    if(name){
      setName(name)
    }
    if(mobileNo){
      setMobile(mobileNo)
    }
    if(email){
      setEmail(email)
    }
  }

  const updateUser = () => {
    var updatedata = {
      email: email,
      mobileNo: mobile,
      name: name,
    }
    console.log(updatedata)
    Script.userUpdateProfile(updatedata, ulImage, Key.TOKEN, (res) => {
      if (typeof res === "object") {
        updateGlobal(res.userUpdateProfile);
      }
    });
  };

  const updateGlobal = (data) => {
    console.log("VALUE:::", data);
    var user = mainScript.recoilTranform(userProfile);
    user.me.name = data.name 
    user.me.mobileNo = data.mobileNo
    user.me.email = data.email;
    user.me.email = data.email;
    user.me.profileImage = data.profileImage
    updateUserProfile(user);
    navigate.navigate("Account")
  };

  return (
    <LinearGradient
      colors={["#f9f9f9", "#f9f9f9"]}
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
            editProfile={editProfile}
          />
          <View style={Styles.al_center}>
            <TouchableOpacity
              onPress={() => updateUser()}
              style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
            >
              <Text
                style={[
                  Styles.white_text,
                  Styles.f_24,
                  Styles.mainFont,
                  { marginLeft: "1%" },
                ]}
              >
                {LANG.profile_text_04}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate.navigate("Account")}
              style={[
                Styles.w90,
                Styles.row,
                Styles.mt10,
                Styles.transparent,
                Styles.al_center,
                Styles.br_5,
                Styles.border_btn,
                Styles.p15,
                Styles.jc_center,
              ]}
            >
              <Text
                style={[
                  Styles.text_center,
                  Styles.mainColor_text,
                  Styles.f_24,
                  Styles.mainFont,
                  { marginLeft: "1%" },
                ]}
              >
                {LANG.profile_text_05}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
