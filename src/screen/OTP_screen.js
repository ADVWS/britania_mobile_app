import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../navigator/RootNavigation";
import Modal from "react-native-modal";

import { Styles } from "../styles";
import Script from "../script";

import Radio from "../component/OTP_component/radio_button";
import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";
import { sendOTP } from "../script/OTP_script";
import { useRecoilState } from "recoil";
import * as Global from "../globalState"

export default function OTP({ route }) {
  const [type, setType] = React.useState("MOBILE");
  const [LANG, setLANG] = useRecoilState(Global.Language);

  //MOBILE
  const [openMobile, setOpenMobile] = React.useState(false);
  const [itemsMobile, setItemsMobile] = React.useState([
    { label: "ไม่พบหมายเลขโทรศัพท์", value: "" },
  ]);
  const [valueMobile, setValueMobile] = React.useState(itemsMobile[0].value);
  const [dropdownMobile, setDropdownMobile] = React.useState(40);
  const [disabledMobile, setDisabledMobile] = React.useState(false);

  //EMAIL
  const [openEmail, setOpenEmail] = React.useState(false);
  const [itemsEmail, setItemsEmail] = React.useState([
    { label: "ไม่พบอีเมล", value: "" },
  ]);
  const [valueEmail, setValueEmail] = React.useState(itemsEmail[0].value);
  const [dropdownEmail, setDropdownEmail] = React.useState(40);
  const [disabledEmail, setDisabledEmail] = React.useState(false);

  const [alert, setAlert] = React.useState(false);
  const [textAlert, setTextAlert] = React.useState("");
  const [loading, setLoading] = React.useState(false);


  React.useEffect(() => {
    var dataItemsMobile = [];
    var dataItemsEmail = [];
    route.params.getProfileOtp.mobileNo.map((item) => {
      var labal = Script.formatPhoneNumber(item)
      dataItemsMobile.push({ label: labal, value: item })
    })
    route.params.getProfileOtp.email.map((item) => {
      dataItemsEmail.push({ label: item, value: item })
    })
    if (dataItemsMobile.length > 0) {
      var sizeItemMobile = 40 * dataItemsMobile.length;
      setDropdownMobile(sizeItemMobile);
      setItemsMobile(dataItemsMobile);
      setValueMobile(dataItemsMobile[0].value);
      setDisabledMobile(false);
    } else {
      setDisabledMobile(true);
    }
    if (dataItemsEmail.length > 0) {
      var sizeItemEmail = 40 * dataItemsEmail.length;
      setDropdownEmail(sizeItemEmail);
      setItemsEmail(dataItemsEmail);
      setValueEmail(dataItemsEmail[0].value);
      setDisabledEmail(false)
    } else {
      setDisabledEmail(true)
    }
  }, []);

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  async function _sendOtp() {
    setLoading(true)
    sendOTP(valueMobile, valueEmail, type, (res) => {
      setLoading(false)
      if (typeof res === 'object') {
        var data = route.params
        if(type === 'MOBILE'){
          data["OTP"] = res.sendMobileOtp
        } else if(type === 'EMAIL'){
          data["OTP"] = res.sendEmailOtp
        }
        navigate.navigate("InputOTP", data)
      } else {
        setTimeout(() => {
          setTextAlert(res)
          setAlert(true)
        }, 500);
      }
    })
  }

  const closeModalAlert = () => setAlert(false)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     <View
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
            <TouchableOpacity onPress={() => navigate.navigate("Signin")}>
              <MaterialIcons name="arrow-back" size={32} color="#f1645e" />
            </TouchableOpacity>
            <Text
              style={[
                Styles.mainFont,
                Styles.mainColor_text,
                Styles.mt60,
                Styles.f_26,
              ]}
            >
              {LANG.otp_text_01}
            </Text>
            <Radio isSelectType={isSelectType} mobile={LANG.otp_text_02} email={LANG.otp_text_03}/>
            {type === "MOBILE" && (
              <>
                <Text
                  style={[
                    Styles.f_26,
                    Styles.mainFont,
                    Styles.mainColor_text,
                    Styles.mt30,
                  ]}
                >
                  {LANG.otp_text_04}
                </Text>
                <DropDownPicker
                  disabled={disabledMobile}
                  open={openMobile}
                  value={valueMobile}
                  items={itemsMobile}
                  setOpen={setOpenMobile}
                  setValue={setValueMobile}
                  setItems={setItemsMobile}
                  dropDownDirection=""
                  style={[
                    Styles.pink_light,
                    Styles.mt10,
                    { borderWidth: 0, marginBottom: openMobile ? dropdownMobile : 15 },
                  ]}
                  labelStyle={[Styles.mainFont, Styles.black_gray_text, Styles.f_22]}
                  dropDownContainerStyle={[{ borderWidth: 0 }]}
                  listItemLabelStyle={[Styles.mainFont, Styles.black_gray_text, Styles.f_22]}
                  ArrowDownIconComponent={({ style }) => (
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={30}
                      color="#f1645e"
                    />
                  )}
                  ArrowUpIconComponent={({ style }) => (
                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={30}
                      color="#f1645e"
                    />
                  )}
                  TickIconComponent={({ style }) => (
                    <MaterialIcons name="check" size={25} color="#f1645e" />
                  )}
                />
              </>
            )}
            {type === "EMAIL" && (
              <>
                <Text
                  style={[
                    Styles.f_26,
                    Styles.mainFont,
                    Styles.mainColor_text,
                    Styles.mt30,
                  ]}
                >
                  {LANG.otp_text_05}
                </Text>
                <DropDownPicker
                  disabled={disabledEmail}
                  open={openEmail}
                  value={valueEmail}
                  items={itemsEmail}
                  setOpen={setOpenEmail}
                  setValue={setValueEmail}
                  setItems={setItemsEmail}
                  dropDownDirection=""
                  style={[
                    Styles.pink_light,
                    Styles.mt10,
                    { borderWidth: 0, marginBottom: openEmail ? dropdownEmail : 15 },
                  ]}
                  labelStyle={[Styles.mainFont, Styles.black_gray_text, Styles.f_22]}
                  dropDownContainerStyle={[{ borderWidth: 0 }]}
                  listItemLabelStyle={[Styles.mainFont, Styles.black_gray_text, Styles.f_22]}
                  ArrowDownIconComponent={({ style }) => (
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={30}
                      color="#f1645e"
                    />
                  )}
                  ArrowUpIconComponent={({ style }) => (
                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={30}
                      color="#f1645e"
                    />
                  )}
                  TickIconComponent={({ style }) => (
                    <MaterialIcons name="check" size={25} color="#f1645e" />
                  )}
                />
              </>
            )}
          </View>
          <TouchableOpacity
            onPress={() => _sendOtp()}
            style={[
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
                Styles.f_24,
                Styles.mainFont,
                Styles.white_text,
                Styles.text_center,
              ]}
            >
              {LANG.otp_text_06}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            Styles.f_22,
            Styles.mainFont_x,
            Styles.mainColor_text,
            Styles.text_center,
            Styles.mb20,
            {bottom: 10}
          ]}
        >
          {LANG.otp_text_07}
        </Text>
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
