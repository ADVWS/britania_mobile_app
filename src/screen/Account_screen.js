import * as React from "react";
import { View, Text, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import NavBtn from "../component/Account_component/NavBtn";
import AccountHeader from "../component/Account_component/AccountHeader";
import { useRecoilState } from "recoil";
import * as Global from "../globalState";

import { Styles } from "../styles";
//transparent f1645e

export default function Account() {
  //Profile Data
  const [userProfile, setUserProfile] = useRecoilState(Global.userProfile);
  const [userType, setUserType] = useRecoilState(Global.userType);
  const [LANG, setLANG] = useRecoilState(Global.Language);

  const setImageProfile = () => {
    var image = "";
    if (userProfile.me.profileImage) {
      image = { uri: userProfile.me.profileImage };
    } else {
      image = require("../../assets/image/Britania-connect-assets/default-img-circle.png");
    }
    return (
      <Image
        source={image}
        style={[
          { width: 120, height: 120, resizeMode: "cover" },
          Styles.row,
          Styles.circle,
        ]}
      ></Image>
    );
  };

  return (
    <LinearGradient
      colors={["#fbd4d4", "#FFF"]}
      style={[Styles.flex, Styles.al_center]}
    >
      <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100]}>
        <AccountHeader />
        <View style={[Styles.w100, Styles.p15]}>
          <View style={[Styles.row, Styles.w100]}>
            {userProfile.me && (
              <>
                {setImageProfile()}
                <Text
                  style={[
                    Styles.mt40,
                    Styles.ml5,
                    Styles.mainFont,
                    Styles.mainColor_text,
                    Styles.f_24,
                  ]}
                >
                  {userProfile.me.name}
                </Text>
              </>
            )}
          </View>
        </View>
        <View>
          <NavBtn />
        </View>
      </View>
      <Text style={[Styles.mainFont_x, Styles.mb10, Styles.f_24]}>
        {LANG.account_text_08} 1.0.0
      </Text>
    </LinearGradient>
  );
}
