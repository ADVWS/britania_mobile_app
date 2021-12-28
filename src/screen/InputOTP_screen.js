import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as navigate from "../navigator/RootNavigation";

import { Styles } from "../styles";

import FooterSignin from "../component/footer_signin";
import TabBottom from "../navigator_footer";

export default function InputOTP() {
  const [unit1, setUnit1] = React.useState("");
  const [unit2, setUnit2] = React.useState("");
  const [unit3, setUnit3] = React.useState("");
  const [unit4, setUnit4] = React.useState("");
  const [unit5, setUnit5] = React.useState("");
  const [unit6, setUnit6] = React.useState("");
  const unit1ref = React.createRef();
  const unit2ref = React.createRef();
  const unit3ref = React.createRef();
  const unit4ref = React.createRef();
  const unit5ref = React.createRef();
  const unit6ref = React.createRef();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        colors={["#fbd4d4", "#fff4f3", "#fffefe"]}
        style={[Styles.flex, Styles.al_center, Styles.jc_center]}
      >
        <View
          style={[
            Styles.al_center,
            Styles.w100,
            Styles.h90,
            Styles.p30,
            Styles.mt30,
          ]}
        >
          <View style={[Styles.w100, Styles.al_start]}>
            <TouchableOpacity onPress={() => navigate.navigate("OTP")}>
              <MaterialIcons name="arrow-back" size={32} color="#f1645e" />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              Styles.f_18,
              Styles.mainFont,
              Styles.black_gray_text,
              Styles.mt60,
            ]}
          >
            OTP ส่งไปยังเบอร์ 088 888 xxxx
          </Text>
          <Text
            style={[Styles.f_16, Styles.mainFont_thin, Styles.black_gray_text]}
          >
            รหัสอ้างอิง : psdxf
          </Text>
          <View style={[Styles.w100, Styles.al_start]}>
            <Text
              style={[
                Styles.f_16,
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.mt30,
              ]}
            >
              รหัส OTP 6 หลัก
            </Text>
            <View style={[Styles.row, Styles.w100, Styles.mt10]}>
              <TextInput
                ref={unit1ref}
                value={unit1}
                maxLength={1}
                keyboardType="numeric"
                style={Styles.otpbox}
                onChangeText={(val) => {
                  setUnit1(val);
                  console.log("set::", val);
                  if (val !== "") {
                    unit2ref.current.focus();
                  }
                }}
              />
              <View style={{ width: "4.4%" }} />
              <TextInput
                ref={unit2ref}
                value={unit2}
                maxLength={1}
                keyboardType="numeric"
                style={Styles.otpbox}
                onChangeText={(val) => {
                  setUnit2(val);
                  if (val === "") {
                    unit1ref.current.focus();
                  } else {
                    unit3ref.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    unit1ref.current.focus();
                  }
                }}
              />
              <View style={{ width: "4.4%" }} />
              <TextInput
                ref={unit3ref}
                value={unit3}
                maxLength={1}
                keyboardType="numeric"
                style={Styles.otpbox}
                onChangeText={(val) => {
                  setUnit3(val);
                  if (val === "") {
                    unit2ref.current.focus();
                  } else {
                    unit4ref.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    unit2ref.current.focus();
                  }
                }}
              />
              <View style={{ width: "4.4%" }} />
              <TextInput
                ref={unit4ref}
                value={unit4}
                maxLength={1}
                keyboardType="numeric"
                style={Styles.otpbox}
                onChangeText={(val) => {
                  setUnit4(val);
                  if (val === "") {
                    unit3ref.current.focus();
                  } else {
                    unit5ref.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    unit3ref.current.focus();
                  }
                }}
              />
              <View style={{ width: "4.4%" }} />
              <TextInput
                ref={unit5ref}
                value={unit5}
                maxLength={1}
                keyboardType="numeric"
                style={Styles.otpbox}
                onChangeText={(val) => {
                  setUnit5(val);
                  if (val === "") {
                    unit4ref.current.focus();
                  } else {
                    unit6ref.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    unit4ref.current.focus();
                  }
                }}
              />
              <View style={{ width: "4.4%" }} />
              <TextInput
                ref={unit6ref}
                value={unit6}
                maxLength={1}
                keyboardType="numeric"
                style={Styles.otpbox}
                onChangeText={(val) => {
                  setUnit6(val);
                  if (val === "") {
                    unit5ref.current.focus();
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    unit5ref.current.focus();
                  }
                }}
              />
            </View>
            <View style={[Styles.al_end, Styles.w100, Styles.mt10]}>
              <Text
                style={[
                  Styles.f_16,
                  Styles.mainFont_thin,
                  Styles.black_gray_text,
                ]}
              >
                ยังไม่ได้รับรหัส OTP{" "}
                <Text
                  style={[
                    Styles.mainColor_text,
                    Styles.mainFont,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  <Ionicons name="md-refresh-sharp" size={20} color="#f1645e" />
                  ส่งอีกครั้ง
                </Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => { 
              navigate.navigate("TabFooter")
            }}
            style={[
              Styles.mt40,
              Styles.w100,
              Styles.p12,
              Styles.mainColor,
              Styles.al_center,
              Styles.br_5,
              Styles.boxWithShadow,
            ]}
          >
            <Text
              style={[
                Styles.f_18,
                Styles.mainFont,
                Styles.white_text,
                Styles.text_center,
              ]}
            >
              เข้าสู่ระบบ
            </Text>
          </TouchableOpacity>
        </View>
        <FooterSignin />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
