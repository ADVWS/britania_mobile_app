import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

// import * as navigate from "../navigator/RootNavigation";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import * as Global from '../globalState'

import { Styles } from "../styles";
import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";
import Script from "../script/Signin_script";

export default function Signin() {
  const [userid, setUserid] = React.useState("");
  const [clearbtn, setClearbtn] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [textAlert, setTextAlert] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [boxAlert, setBoxAlert] = React.useState("transparent")

  function isClearBtn() {
    if (userid.length > 1) {
      setClearbtn(true);
      return;
    }
    setClearbtn(false);
  }

  function isGetProfileOtp() {
    setBoxAlert('transparent')
    if(userid === ""){
      setTextAlert('กรุณาระบุหมายเลขบัตรประชาชน / หมายเลขหนังสือเดินทาง');
      setBoxAlert('red')
      setAlert(true);
      return
    }
    setLoading(true);
    Script.getProfileOtp(userid, (res) => {
      console.log("RESULT", res);
      setLoading(false);
      if (typeof res === "object") {
        navigate.navigate("OTP", res);
      } else {
        setTimeout(() => {
          setTextAlert(res);
          setAlert(true);
        }, 500);
      }
    });
  }

  const closeModalAlert = () => setAlert(false);

  return (
    <>
      <View
     
        style={[Styles.flex, Styles.al_center, Styles.jc_center]}
      >
        <ScrollView
          style={[Styles.w100, Styles.h90, Styles.p30]}
          behavior="padding"
        >
          <View style={[Styles.w100, Styles.al_start, Styles.mt30]}>
            <TouchableOpacity onPress={() => navigate.navigate("Login")}>
              <MaterialIcons name="arrow-back" size={32} color="#bb6a70" />
            </TouchableOpacity>
            <Text
              style={[
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.mt30,
                { fontSize: 36 },
              ]}
            >
              {LANG.signin_text_01}
            </Text>
          </View>
          <View style={[Styles.w100, Styles.al_start]}>
            <Text
              style={[
                Styles.f_24,
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.mt80,
              ]}
            >
              {LANG.signin_text_02}
            </Text>
            <View style={[Styles.row, Styles.mt15,  {borderColor: boxAlert, borderWidth: 2, borderRadius: 5}]}>
              <TextInput
                value={userid}
                maxLength={13}
                onChange={() => isClearBtn()}
                onChangeText={(text) => setUserid(text)}
                //keyboardType="numeric"
                style={[
                  Styles.w80,
                  Styles.p15,
                  Styles.pink_light,
                  Styles.f_16,
                  Styles.br_5_left,
                ]}
              />
              <View
                style={[
                  Styles.w20,
                  Styles.p15,
                  Styles.pink_light,
                  Styles.br_5_right,
                  Styles.al_end,
                ]}
              >
                {clearbtn && (
                  <TouchableOpacity
                    onPress={() => {
                      setUserid("");
                      setClearbtn(false);
                    }}
                    style={[
                      Styles.FFF,
                      Styles.w50,
                      Styles.al_center,
                      Styles.circle,
                    ]}
                  >
                    <Ionicons name="close" size={18} color="#bb6a70" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => isGetProfileOtp()}
              style={[
                Styles.w100,
                Styles.p12,
                Styles.mainColor,
                Styles.al_center,
                Styles.br_5,
                Styles.mt20,
                Styles.boxWithShadow,
              ]}
            >
              <View style={[Styles.row]}>
                <Text
                  style={[
                    Styles.f_24,
                    Styles.mainFont,
                    Styles.white_text,
                    Styles.text_center,
                  ]}
                >
                  {LANG.signin_text_03}
                </Text>
                <View style={{ bottom: 2 }}>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="#FFF"
                    style={[Styles.mt5]}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </View>
      <Modal
        isVisible={loading}
        style={Styles.al_center}
        backdropOpacity={0.25}
      >
        <Modal_loading />
      </Modal>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={textAlert} closeModalAlert={closeModalAlert} />
      </Modal>
    </>
  );
}
