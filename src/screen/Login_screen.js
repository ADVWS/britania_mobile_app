import * as React from "react";
import { Image, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Modal from "react-native-modal";

import * as navigate from "../navigator/RootNavigation";
import { useSetRecoilState, useRecoilState } from "recoil";
import * as Global from '../globalState'

import { Styles } from "../styles";

import Modal_changeLang from "../component/Login_component/modal_changeLanguage";
import isLANG from "../LANG";
import Store from "../store";
import Key from "../KEYS.json"

export default function Login() {
  const [changeLang, setChangeLang] = React.useState(false);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const userType = useSetRecoilState(Global.userType)
  const settingLANG = useSetRecoilState(Global.Language)

  function selectLang(_selectLang) {
    console.log(_selectLang)
    var myLANG = isLANG.settingLanguage(_selectLang)
    settingLANG(myLANG)
    setChangeLang(false);
  }

  function nonMember() {
    var nonMember = {type: 'non Member'}
    var data = JSON.stringify(nonMember)
    console.log(data)
    Store.setLocalStorege(Key.TOKEN, data, (call) => {
      userType(2)
      setTimeout(() => {
        navigate.navigate('TabFooter')
      }, 200);
    })
  }

  return (
    <ImageBackground
      source={require('../../assets/image/Britania-connect-assets/03-login-backgound/hdpi.jpg')}
      style={[Styles.flex, Styles.al_center, Styles.jc_center]}
    >
      <View style={[Styles.al_center, Styles.w100, Styles.h90, Styles.p40]}>
        <View style={[Styles.w100, Styles.al_end]}>
          <TouchableOpacity onPress={() => setChangeLang(true)}>
            <Text style={[Styles.f_16, Styles.mainColor_text]}>TH / EN</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/image/logo2.png")}
          style={[Styles.w70, Styles.h10, Styles.mt60]}
        />
        <View style={[Styles.w100, Styles.al_start, Styles.mt35per]}>
          <Text style={[Styles.f_22, Styles.mainFont, Styles.mainColor_text]}>
            {LANG.login_text_01}
          </Text>
          <TouchableOpacity
            onPress={() => navigate.navigate("Signin")}
            style={[
              Styles.w100,
              Styles.p15,
              Styles.mainColor,
              Styles.al_center,
              Styles.br_5,
              Styles.mt15,
              Styles.boxWithShadow,
            ]}
          >
            <Text
              style={[
                Styles.f_22,
                Styles.mainFont,
                Styles.white_text,
                Styles.text_center,
              ]}
            >
              {LANG.login_text_02}
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              Styles.f_22,
              Styles.mainFont,
              Styles.mainColor_text,
              Styles.mt20,
            ]}
          >
            {LANG.login_text_03}
          </Text>
          <TouchableOpacity
            onPress={()=> nonMember()}
            style={[
              Styles.w100,
              Styles.p15,
              Styles.transparent,
              Styles.al_center,
              Styles.br_5,
              Styles.mt15,
              Styles.border_btn,
            ]}
          >
            <Text
              style={[
                Styles.f_22,
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.text_center,
              ]}
            >
              {LANG.login_text_04}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[Styles.f_24, Styles.mainFont_x, Styles.mainColor_text]}>
        {LANG.login_text_05} <Text style={[Styles.mainFont]}>{LANG.login_text_06}</Text>
      </Text>
      <Text style={[Styles.f_24, Styles.mt10, Styles.mainFont_x]}>{LANG.login_text_07} 1.0.0</Text>
      <Modal isVisible={changeLang} style={Styles.al_center}>
        <Modal_changeLang selectLang={selectLang} />
      </Modal>
    </ImageBackground>
  );
}
