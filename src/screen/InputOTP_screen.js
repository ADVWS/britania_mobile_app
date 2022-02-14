import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import * as navigate from "../navigator/RootNavigation";

import { Styles } from "../styles";

import { useSetRecoilState, useRecoilState } from "recoil";
import * as Global from "../globalState"

import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";
import Script from "../script/lnputOTP_script";
import { sendOTP } from "../script/OTP_script";
import Store from "../store";
import Key from "../KEYS.json"

export default function InputOTP({ route }) {
  var timer = 60
  const [optData, setoptData] = React.useState(route.params);
  const [refNo, setRefNo] = React.useState(optData.OTP.refNo);
  const userProfile = useSetRecoilState(Global.userProfile)
  const userType = useSetRecoilState(Global.userType)
  const [LANG, setLANG] = useRecoilState(Global.Language)
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
  const [alert, setAlert] = React.useState(false);
  const [textAlert, setTextAlert] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const [countDown, setCountDown] = React.useState(false);
  const [displayTime, setDisplayTime] = React.useState(timer);
  var setOTPTimer;


  function _login() {
    var otp = String(unit1) + String(unit2) + String(unit3) + String(unit4) + String(unit5) + String(unit6)
    setLoading(false)
    userType(1)
    //navigate.navigate("TabFooter")
    //return
    setLoading(true)
    Script.login(optData, otp, (res) => {
      if (typeof res === 'object') {
        var data = JSON.stringify(res.login)
        Store.setLocalStorege(Key.TOKEN, data, (call) => {
          setProfile(res.login.token)
        })
      } else {
        setLoading(false)
        setTimeout(() => {
          setTextAlert(res)
          setAlert(true)
        }, 500);
      }
    })
  }

  function setProfile(token) {
    Script.setProfile(token, (res) => {
      setLoading(false)
      if (typeof res === 'object') {
        userType(1)
        userProfile(res)
        var data = JSON.stringify(res)
        Store.setLocalStorege(Key.PROFILE, data, (_res) => {
          setTimeout(() => {
            setTimeout(() => {
              navigation.reset(({
                index: 0,
                routes: [{ name: 'TabFooter' }],
              }))
              //navigate.navigate('TabFooter')
            }, 200);
          }, 500);
        })
      } else {
        setTimeout(() => {
          setTextAlert(res)
          setAlert(true)
        }, 500);
      }
    })
  }

  async function resendOtp() {
    var valueMobile
    var valueEmail
    if (optData.OTP.type === "mobile") {
      valueMobile = optData.OTP.sendTo
      valueEmail = undefined
    } else if (optData.OTP.type === "email") {
      valueMobile = undefined
      valueEmail = optData.OTP.sendTo
    }
    sendOTP(valueMobile, valueEmail, optData.OTP.type, (res) => {
      if (typeof res === 'object') {
        var data = optData
        if (optData.OTP.type === "mobile") {
          data["OTP"] = res.sendMobileOtp
          setRefNo(res.sendMobileOtp.refNo)
        } else if (optData.OTP.type === "email") {
          data["OTP"] = res.sendEmailOtp
          setRefNo(res.sendEmailOtp.refNo)
        }
        setCountDown(true)
        setOTPTimer = setInterval(OTPTimer, 1000);
      } else {
        setTimeout(() => {
          setTextAlert(res)
          setAlert(true)
        }, 500);
      }
    })
  }

  function OTPTimer() {
    timer--;
    console.log(timer)
    setDisplayTime(timer)
    if (timer == 0) {
      setCountDown(false)
      clearInterval(setOTPTimer);
    }
  }

  const closeModalAlert = () => setAlert(false)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={[Styles.flex, Styles.al_center, Styles.jc_center, Styles.mainColorF9]}
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
            <TouchableOpacity onPress={() => navigate.navigate("OTP", optData)}>
              <MaterialIcons name="arrow-back" size={32} color="#bb6a70" />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              Styles.f_26,
              Styles.mainFont_x_db,
              Styles.black_gray_text,
              Styles.mt60,
            ]}
          >
            {route.params.OTP.type === "mobile" ? LANG.inputotp_text_01 : LANG.inputotp_text_02} {route.params.OTP.sendTo}
          </Text>
          <Text
            style={[Styles.f_24, Styles.mainFont_x, Styles.black_gray_text]}
          >
            {LANG.inputotp_text_03} : {refNo}
          </Text>
          <View style={[Styles.w100, Styles.al_start]}>
            <Text
              style={[
                Styles.f_24,
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.mt30,
              ]}
            >
              {LANG.inputotp_text_04}
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
              <View style={[Styles.row, Styles.w100]}>
                <View style={[{ width: '75%' }, Styles.al_end]}>
                  <Text
                    style={[
                      Styles.f_22,
                      Styles.mainFont,
                      Styles.black_gray_text,
                    ]}
                  >
                    {LANG.inputotp_text_05}
                  </Text>
                </View>
                {!countDown ? (
                  <TouchableOpacity style={[Styles.w25, Styles.al_end]}
                    onPress={() => resendOtp()}>
                    <Text
                      style={[
                        Styles.f_22,
                        Styles.mainColor_text,
                        Styles.mainFont,
                        { textDecorationLine: "underline" },
                      ]}
                    >
                      <Ionicons name="md-refresh-sharp" size={20} color="#bb6a70" />
                      {LANG.inputotp_text_06}
                    </Text>
                  </TouchableOpacity>) : 
                  (<Text
                    style={[
                      Styles.f_22,
                      Styles.mainFont,
                      Styles.black_gray_text,
                    ]}
                  >
                    ในอีก <Text style={[Styles.mainColor_text3]}>{displayTime}</Text> วินาที 
                  </Text>)
                }
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              _login()
            }}
            style={[
              Styles.mt40,
              Styles.w100,
              Styles.p12,
              Styles.mainColor_bb6,
              Styles.al_center,
              Styles.br_5,
              Styles.boxWithShadow,
            ]}
          >
            <Text
              style={[
                Styles.f_24,
                Styles.mainFont,
                Styles.white_text,
                Styles.text_center,
              ]}
            >
              {LANG.inputotp_text_07}
            </Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={loading} style={Styles.al_center} backdropOpacity={0.25}>
          <Modal_loading />
        </Modal>
        <Modal isVisible={alert} style={Styles.al_center}>
          <Modal_alert textAlert={textAlert} closeModalAlert={closeModalAlert} />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
