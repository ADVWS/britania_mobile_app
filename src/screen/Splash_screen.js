import * as React from "react";
import { View, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as navigate from '../navigator/RootNavigation';

import { Styles } from "../styles";
import Script from "../script/Splash_script"
import Key from "../KEYS.json"
import { useSetRecoilState } from "recoil";
import * as Global from "../globalState"
import LANG from "../LANG";
import Store from "../store";

export default function Splash() {
  const userProfile = useSetRecoilState(Global.userProfile)
  const userType = useSetRecoilState(Global.userType)
  const setLANG = useSetRecoilState(Global.Language)
  runApp()

  function runApp() {
    Script.checkToken(Key.TOKEN, (res) => {
      if (res.data) {
        if(res.data.me){
          userProfile(res.data)
          userType(1)
        } else {
          userProfile(res.data)
          userType(2)
        }
      }
      Store.getLocalStorege(Key.LANG, (data)=>{
        var myLANG = LANG.settingLanguage(data.detail)
        console.log('check lang', data)
        setLANG(myLANG)
        setTimeout(() => {
          navigate.navigate(res.goto)
        }, 3000);
      })
    })
  }

  return (
    <View style={[Styles.flex]}>
      <ImageBackground
        source={require('../../assets/image/bg.jpg')}
        resizeMode="cover"
        style={[Styles.al_center, Styles.jc_center, Styles.h100, Styles.w100]}/>
    </View>
  );
}
