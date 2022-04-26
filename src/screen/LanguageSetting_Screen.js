import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Styles } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import MainHeader from "../component/mainHeader";
import * as Global from '../globalState'
import { useRecoilState, useSetRecoilState } from "recoil";
import isLANG from "../LANG";
import Store from "../store";
import Key from "../KEYS.json";

const LanguageSetting_Screen = () => {
  const [LANG, setLANG] = useRecoilState(Global.Language)
  const [selectThai, setSelectThai] = React.useState(true)
  const [selectEnglish, setSelectEnglish] = React.useState(false)
  const [reload, setReload] = React.useState(true)
  const settingLANG = useSetRecoilState(Global.Language)
  const setLANGTEXT = useSetRecoilState(Global.LANGTEXT)
  const selectLanguage = (select) => {
    setReload(false)
    var myLANG;
    if (select == "TH") {
      setSelectThai(true)
      setSelectEnglish(false)
      setLANGTEXT(select)
      myLANG = isLANG.settingLanguage(select)
      settingLANG(myLANG)
      Store.setLocalStorege(Key.LANG, select, (res)=>{
        setReload(true)
      })
    } else if (select == "EN") {
      setSelectThai(false)
      setSelectEnglish(true)
      setLANGTEXT(select)
      myLANG = isLANG.settingLanguage(select)
      settingLANG(myLANG)
      Store.setLocalStorege(Key.LANG, select, (res)=>{
        console.log('save', res)
        setReload(true)
      })
    } else {
      alert("language not found");
    }
  };

  const markSelect = () => {
    Store.getLocalStorege(Key.LANG, (res)=>{
      if (res.detail == "TH") {
        setSelectThai(true)
        setSelectEnglish(false)
      } else if (res.detail == "EN") {
        setSelectThai(false)
        setSelectEnglish(true)
      }
    })
  }


  return (
    <View
      style={[
        Styles.flex,
        Styles.al_center,
        Styles.w100,
        Styles.h100,
        Styles.mainColorF9
      ]}
    >
      {reload && <MainHeader name={LANG.account_text_04} backto={"Account"} />}
      {!reload && <MainHeader name={LANG.account_text_04} backto={"Account"} />}
      {markSelect()}
      <TouchableOpacity
        style={[
          Styles.boxWithShadow,
          Styles.w90,
          Styles.p15,
          Styles.FFF,
          Styles.br_5,
          Styles.mt5,
          Styles.row,
        ]}
        onPress={() => selectLanguage("TH")}
      >
        <View style={[Styles.w90]}>
          <Text
            style={[
              Styles.f_24,
              Styles.mainFont,
              Styles.mt10,
              Styles.text_left,
              Styles.black_gray_text,
              { bottom: 3 },
            ]}
          >
            ภาษาไทย
          </Text>
        </View>
        <View style={[Styles.jc_center, Styles.al_end]}>
          {selectThai && (
            <AntDesign name="check" size={24} color="#bb6a70" />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Styles.boxWithShadow,
          Styles.w90,
          Styles.p15,
          Styles.FFF,
          Styles.br_5,
          Styles.mt5,
          Styles.row,
        ]}
        onPress={() => selectLanguage("EN")}
      >
        <View style={[Styles.w90]}>
          <Text
            style={[
              Styles.f_24,
              Styles.mainFont,
              Styles.mt10,
              Styles.text_left,
              Styles.black_gray_text,
              { bottom: 3 },
            ]}
          >
            English
          </Text>
        </View>
        <View style={[Styles.jc_center, Styles.al_end]}>
          {selectEnglish && (
            <AntDesign name="check" size={24} color="#bb6a70" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LanguageSetting_Screen
