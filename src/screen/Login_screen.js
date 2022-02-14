import * as React from "react";
import { Image, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';

import * as navigate from "../navigator/RootNavigation";
import { useSetRecoilState, useRecoilState } from "recoil";
import * as Global from '../globalState'

import { Styles } from "../styles";

import Modal_changeLang from "../component/Login_component/modal_changeLanguage";
import isLANG from "../LANG";
import Store from "../store";
import Key from "../KEYS.json"

export default function Login({ route }) {
  const [changeLang, setChangeLang] = React.useState(false);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const userType = useSetRecoilState(Global.userType)
  const settingLANG = useSetRecoilState(Global.Language)
  const setUserProfile = useSetRecoilState(Global.userProfile)

  const navigation = useNavigation();

  function selectLang(_selectLang) {
    console.log(_selectLang)
    var myLANG = isLANG.settingLanguage(_selectLang)
    settingLANG(myLANG)
    setChangeLang(false);
    Store.setLocalStorege(Key.LANG, _selectLang, (res) => {
      console.log(res)
    })
  }

  function nonMember() {
    var nonMember = { type: 'non Member' }
    var data = JSON.stringify(nonMember)
    console.log(data)
    Store.setLocalStorege(Key.TOKEN, data, (call) => {
      userType(2)
      setUserProfile({})
      setTimeout(() => {
        navigation.reset(({
          index: 0,
          routes: [{ name: 'TabFooter' }],
        }))
        //navigate.navigate('TabFooter')
      }, 200);
    })
  }

  return (
    <View
      style={[Styles.flex, Styles.al_center, Styles.jc_center, Styles.mainColorF9]}
    >
      <View style={[Styles.al_center, Styles.w100, Styles.h90, Styles.p40, Styles.jc_center, { top: '-5%' }]}>
        <View style={[Styles.w100, Styles.al_end, { top: '-12%' }]}>
          <TouchableOpacity onPress={() => setChangeLang(true)}>
            <Text style={[Styles.f_16, Styles.black_gray_text]}>TH / EN</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/image/britania_new_theme/BRITANIA_CONNECT_LOGO-15.png")}
          style={[Styles.w80, { height: '5%' }]}
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
              Styles.mainColor_bb6,
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
            onPress={() => nonMember()}
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
      <Text style={[Styles.f_24, Styles.mainFont_x, Styles.mainColor_text, { top: '-2%' }]}>
        {LANG.login_text_05} <Text style={[Styles.mainFont]}>{LANG.login_text_06}</Text>
      </Text>
      <Text style={[Styles.f_24, Styles.mt10, Styles.mainFont_x, { top: '-2%' }]}>{LANG.login_text_07} 1.0.0</Text>
      <Modal isVisible={changeLang} style={Styles.al_center}>
        <Modal_changeLang selectLang={selectLang} />
      </Modal>
    </View>
  );
}
