import * as React from "react";
import { Image, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "react-native-modal";

import * as navigate from "../navigator/RootNavigation";
import { useSetRecoilState, useRecoilState } from "recoil";
import * as Global from '../globalState'

import { Styles } from "../styles";

import Modal_changeLang from "../component/Login_component/modal_changeLanguage";
import FooterSignin from "../component/footer_signin";

export default function Login() {
  const [changeLang, setChangeLang] = React.useState(false);
  const userType = useSetRecoilState(Global.userType)

  function selectLang() {
    setChangeLang(false);
  }

  function nonMember() {
    userType(2)
    setTimeout(() => {
      navigate.navigate('TabFooter')
    }, 500);
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
            สำหรับลูกบ้าน
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
              เข้าสู่ระบบด้วยเลขประจำตัวประชาชน หรือ{"\n"}หมายเลขหนังสือเดินทาง
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
            สำหรับสมาชิกทั่วไป
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
              เข้าใช้งานแบบสมาชิกทั่วไป
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[Styles.f_24, Styles.mainFont_x, Styles.mainColor_text]}>
        ติดต่อเจ้าหน้าที่ <Text style={[Styles.mainFont]}>021 613 000</Text>
      </Text>
      <Text style={[Styles.f_24, Styles.mt10, Styles.mainFont_x]}>Version 1.0.0</Text>
      <Modal isVisible={changeLang} style={Styles.al_center}>
        <Modal_changeLang selectLang={selectLang} />
      </Modal>
    </ImageBackground>
  );
}
