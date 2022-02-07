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
import * as Global from "../globalState";
import mainScript from "../script";
import Script from "../script/OccupantAddOTP_script";
import KEYS from "../KEYS.json";
import { useSetRecoilState, useRecoilState } from "recoil";

export default function ResidentAddOTP({ route }) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  console.log(route.params);
  const [OTPdata, setOTPdata] = React.useState(route.params);
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
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const setUnitMember = useSetRecoilState(Global.unitMember);

  const sendOTP = () => {
    var otp =
      String(unit1) +
      String(unit2) +
      String(unit3) +
      String(unit4) +
      String(unit5) +
      String(unit6);
    Script.memberConfirmOtp(otp, OTPdata, KEYS.TOKEN, (res) => {
      console.log(res);
      if (typeof res === "object") {
        var data = mainScript.recoilTranform(unitMember);
        data.unitMember = res;
        setUnitMember(data);
        navigate.navigate("MemberManageIndivi");
      }
    });
  };
  return (
    <>
      <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
        <MainHeader
          name={LANG.residentaddotp_text_01}
          backto={"MemberManageIndivi"}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={[Styles.al_center, Styles.w100, Styles.h90, Styles.p30]}>
            <View
              style={[
                { height: 100, width: 100, backgroundColor: "#ffcfcf" },
                Styles.circle,
              ]}
            >
              <Image
                source={require("../../assets/image/Britania-connect-assets/otp.png")}
                style={{ width: 100, height: 100, resizeMode: "cover" }}
              />
            </View>
            <Text
              style={[
                Styles.f_22,
                Styles.mainFont_x,
                Styles.black_gray_text,
                Styles.mt20,
              ]}
            >
              {LANG.residentaddotp_text_02} {OTPdata.name}
            </Text>
            <Text
              style={[Styles.f_22, Styles.mainFont_x, Styles.black_gray_text]}
            >
              {LANG.residentaddotp_text_031}{" "}
              {mainScript.formatPhoneNumber(OTPdata.mobileNo)}{" "}
              {LANG.residentaddotp_text_032}
            </Text>
            <View style={[Styles.w100, Styles.al_start]}>
              <Text
                style={[
                  Styles.f_26,
                  Styles.mainFont_x_db,
                  Styles.mainColor_text,
                  Styles.mt30,
                ]}
              >
                {LANG.residentaddotp_text_04}
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
                    Styles.f_22,
                    Styles.mainFont_x,
                    Styles.black_gray_text,
                  ]}
                >
                  {LANG.residentaddotp_text_05}{" "}
                  <Text
                    style={[
                      Styles.mainColor_text,
                      Styles.mainFont_x_db,
                      { textDecorationLine: "underline" },
                    ]}
                  >
                    <Ionicons
                      name="md-refresh-sharp"
                      size={20}
                      color="#f1645e"
                    />
                    {LANG.residentaddotp_text_06}
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
              onPress={() => sendOTP()}
            >
              <Text
                style={[
                  Styles.f_24,
                  Styles.mainFont,
                  Styles.white_text,
                  Styles.text_center,
                ]}
              >
                {LANG.residentaddotp_text_07}
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
              onPress={() => navigate.navigate("MemberManageIndivi")}
            >
              <Text
                style={[
                  Styles.f_24,
                  Styles.mainFont,
                  Styles.mainColor_text,
                  Styles.text_center,
                  Styles.al_center,
                ]}
              >
                {LANG.residentaddotp_text_08}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}
