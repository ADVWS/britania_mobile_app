import * as React from "react";
import { View, Text, Platform, ScrollView, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Styles } from "../styles";
import mainScript from "../script";
import Script from "../script/Profile_script";
import * as navigate from "../navigator/RootNavigation";
import Modal from "react-native-modal";
import Modal_alert  from "../component/modal_alert";

import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import ProfileForm from "../component/Profile_component/ProfileForm";
import MainHeader from "../component/mainHeader";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../globalState";
import Key from "../KEYS.json"
import Store from "../store";

//transparent f1645e

export default function Profile_screen() {
  const [userProfile, setUserProfile] = useRecoilState(Global.userProfile);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [ulImage, setulImage] = React.useState('')
  const [name, setName] = React.useState(userProfile.me.name);
  const [mobile, setMobile] = React.useState(userProfile.me.mobileNo);
  const [email, setEmail] = React.useState(userProfile.me.email);
  const [alert, setAlert] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState('');
  const updateUserProfile = useSetRecoilState(Global.userProfile);
  const setImage = () => {
    var image = "";
    if (userProfile.me.profileImage) {
      image = { uri: userProfile.me.profileImage };
      //setulImage(userProfile.me.profileImage)
    } else {
      image = require("../../assets/image/Britania-connect-assets/default-img-circle.png");
    }
    return <ProfilePicCom picture={image} uploadImage={uploadImage} />;
  };

  const uploadImage = (img) => {
    console.log('IMAGE', img)
    setulImage(img)
  }

  const editProfile = (name, mobileNo, email) => {
    console.log(mobileNo)
    if(name){
      setName(name)
    }
    if(mobileNo){
      setMobile(mobileNo)
    }
    if(email){
      setEmail(email)
    }
    return
  }
  
  function addMember(add) {
    if (uploadImage !== "") {
      var formdata = new FormData();
      var Type = uploadImage.substring(uploadImage.lastIndexOf(".") + 1);
      var Data = {
        uri: uploadImage,
        name: `upload_image`,
        type: `image/${Type}`,
      };
      formdata.append("file", Data);
      formdata.append("target", "profile");
      Store.getLocalStorege(KEYS.TOKEN, (tk) => {
        const token = tk.detail.token;
        mainScript.uploadImage(token, formdata, (res) => {
          console.log("IMAGE", res);
          addData(add);
        });
      });
    } else {
      addData(add);
    }
  }

  const updateUser = (inputName, inputMobile) => {
    if (ulImage !== "") {
      var formdata = new FormData();
      var Type = ulImage.substring(ulImage.lastIndexOf(".") + 1);
      var Data = {
        uri: ulImage,
        name: `upload_image`,
        type: `image/${Type}`,
      };
      formdata.append("file", Data);
      formdata.append("target", "profile");
      Store.getLocalStorege(Key.TOKEN, (tk) => {
        const token = tk.detail.token;
        console.log(formdata)
        mainScript.uploadImage(token, formdata, (res) => {
          updateUser2(inputName, inputMobile, res);
        });
      });
    } else {
      updateUser2(inputName, inputMobile, '')
    }
  };

  const updateUser2 = (inputName, inputMobile, image) => {
    var updatedata = {
      mobileNo: inputMobile,
      name: inputName,
    }
    Script.userUpdateProfile(updatedata, image, Key.TOKEN, (res) => {
      if (typeof res === "object") {
        updateGlobal(res.userUpdateProfile);
      }
    });
  }

  const updateGlobal = (data) => {
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
            updateUser={updateUser}
          />
          <View style={Styles.al_center}>
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
