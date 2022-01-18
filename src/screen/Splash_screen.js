import * as React from "react";
import { Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as navigate from '../navigator/RootNavigation';

import { Styles } from "../styles";
import Script from "../script/Splash_script"
import Key from "../KEYS.json"

export default function Splash() {
  runApp()

  function runApp () {
    Script.checkToken(Key.TOKEN, (res)=>{
      console.log(res.detail)
      setTimeout(() => {
        navigate.navigate(res.goto)
    }, 3000);
    })
  }

  return (
    <LinearGradient
      colors={["#feb8b5", "#f36f6a", "#f36f6a"]}
      style={[Styles.flex, Styles.al_center, Styles.jc_center]}
    >
      <Image
        source={require("../../assets/image/logo.png")}
        style={[Styles.w70, Styles.h10]}
      />
      <Image
        source={require("../../assets/image/bottom-bg.png")}
        style={[
          Styles.w55,
          Styles.h35,
          Styles.absolute,
          Styles.bottomMin20,
          Styles.opacity03,
        ]}
      />
    </LinearGradient>
  );
}
