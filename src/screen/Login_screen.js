import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "react-native-modal";

import * as navigate from "../navigator/RootNavigation";

import { Styles } from "../styles";

import Modal_changeLang from "../component/Login_component/modal_changeLanguage";

export default function Login() {
  const [changeLang, setChangeLang] = React.useState(false);

  function selectLang() {
    setChangeLang(false);
  }

  return (
    <LinearGradient
      colors={["#fbd4d4", "#fff4f3", "#fffefe"]}
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
          <Text style={[Styles.f_16, Styles.mainFont, Styles.mainColor_text]}>
            สำหรับลูกบ้าน
          </Text>
          <TouchableOpacity
            onPress={() => navigate.navigate("Signin")}
            style={[
              Styles.w100,
              Styles.p20,
              Styles.mainColor,
              Styles.al_center,
              Styles.br_5,
              Styles.mt15,
              Styles.boxWithShadow,
            ]}
          >
            <Text
              style={[
                Styles.f_14,
                Styles.mainFont,
                Styles.white_text,
                Styles.text_center,
              ]}
            >
              เข้าสู่ระบบด้วยเลขประจำตัวประชาชน หรือ{"\n"}หมายเลขหนังสือเดินทาง
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              Styles.f_16,
              Styles.mainFont,
              Styles.mainColor_text,
              Styles.mt20,
            ]}
          >
            สำหรับสมาชิกทั่วไป
          </Text>
          <TouchableOpacity
            style={[
              Styles.w100,
              Styles.p20,
              Styles.transparent,
              Styles.al_center,
              Styles.br_5,
              Styles.mt15,
              Styles.border_btn,
            ]}
          >
            <Text
              style={[
                Styles.f_14,
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.text_center,
              ]}
            >
              เข้าใช้งานแบบสมาชิกทั่วไป
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[Styles.f_16, Styles.mainFont, Styles.mainColor_text]}>
        ติดต่อเจ้าหน้าที่ 021 613 000
      </Text>
      <Text style={[Styles.f_16, Styles.mt10]}>Version 1.0.0</Text>
      <Image
        source={require("../../assets/image/bottom-bg2.png")}
        style={[
          Styles.w55,
          Styles.h35,
          Styles.absolute,
          Styles.bottomMin20,
          Styles.opacity01,
        ]}
      />
      <Modal isVisible={changeLang} style={Styles.al_center}>
        <Modal_changeLang selectLang={selectLang} />
      </Modal>
    </LinearGradient>
  );
}
