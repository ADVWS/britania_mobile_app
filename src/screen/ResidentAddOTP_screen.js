import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import * as navigate from "../navigator/RootNavigation";
import * as Global from "../globalState"

import { useSetRecoilState, useRecoilState } from "recoil";

export default function ResidentAddOTP({route}) {
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

  const callback = useRecoilState(Global.callbackAccount);

  return (
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
      <MainHeader name={"เพิ่มผู้อาศัยร่วม"} backto={"MemberManageIndivi"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[Styles.al_center, Styles.w100, Styles.h90, Styles.p30]}>
          <View
            style={[
              { height: 100, width: 100, backgroundColor: "#ffcfcf" },
              Styles.circle,
            ]}
          >
            <Ionicons
              name="ios-chatbubble-ellipses-outline"
              size={75}
              color="#f1645e"
              style={[{ marginTop: 10, marginLeft: 13 }]}
            />
          </View>
          <Text
            style={[
              Styles.f_14,
              Styles.mainFont_thin,
              Styles.black_gray_text,
              Styles.mt20,
            ]}
          >
            กรุณากรอกรหัส OTP ที่ส่งไปยังคุณดวงกมล เมธากุล
          </Text>
          <Text
            style={[Styles.f_14, Styles.mainFont_thin, Styles.black_gray_text]}
          >
            หมายเลข 098-334-2334 เพื่อเปิดสิทธิ์การใช้งาน
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
            style={[
              Styles.mt40,
              Styles.w100,
              Styles.p12,
              Styles.mainColor,
              Styles.al_center,
              Styles.br_5,
              Styles.boxWithShadow,
            ]}
            onPress={() => navigate.navigate("MemberManageIndivi", {callback})}
          >
            <Text
              style={[
                Styles.f_18,
                Styles.mainFont,
                Styles.white_text,
                Styles.text_center,
              ]}
            >
              ยืนยัน
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.w100,
              Styles.mt10,
              Styles.transparent,
              Styles.al_center,
              Styles.br_5,
              Styles.border_btn,
              Styles.p15,
            ]}
            onPress={() => navigate.navigate("MemberManageIndivi", {callback})}
          >
            <Text
              style={[
                Styles.f_18,
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.text_center,
                Styles.al_center,
              ]}
            >
              ข้าม
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
