import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Styles } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import MainHeader from "../component/mainHeader";
import * as Global from '../globalState'
import { useRecoilState, useSetRecoilState } from "recoil";
import isLANG from "../LANG";

const LanguageSetting_Screen = () => {
  const [LANG, setLANG] = useRecoilState(Global.Language)
  const [selectThai, setSelectThai] = React.useState(true)
  const [selectEnglish, setSelectEnglish] = React.useState(false)
  const settingLANG = useSetRecoilState(Global.Language)
  console.log(LANG)
  const selectLanguage = (select) => {
    var myLANG;
    if (select == "TH") {
      setSelectThai(true)
      setSelectEnglish(false)
      myLANG = isLANG.settingLanguage(select)
      settingLANG(myLANG)
    } else if (select == "EN") {
      setSelectThai(false)
      setSelectEnglish(true)
      myLANG = isLANG.settingLanguage(select)
      settingLANG(myLANG)
    } else {
      alert("language not found");
    }
  };

  return (
    <View
      style={[
        Styles.flex,
        Styles.al_center,
        Styles.w100,
        Styles.h100,
        Styles.FFF,
      ]}
    >
      <MainHeader name={"ตั้งค่าภาษา / Language"} backto={"Account"} />
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
            <AntDesign name="check" size={24} color="#f1645e" />
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
            <AntDesign name="check" size={24} color="#f1645e" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LanguageSetting_Screen
