import * as React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";

import { Styles } from "../../styles";
import * as Global from "../../globalState";
import { useRecoilState } from "recoil";
import * as navigate from "../../navigator/RootNavigation";
import Modal from "react-native-modal";
import Modal_alert from "../../component/modal_alert";
import Script from "../../script";


export default function foreigner_form({ unit, addMember }) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [name, setName] = React.useState("");
  const [passport, setPassport] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");

  const addData = () => {
    var checker = [];
    if (name === "") {
      checker.push(false);
    }
    if (passport === "") {
      checker.push(false);
    }
    if (mobileNo === "") {
      checker.push(false);
    }
    if (email === "") {
      checker.push(false);
    }
    if (/^[0-9]+$/.test(mobileNo) === false) {
      checker.push(false);
    }
    if (/^[0-9]+$/.test(idcard) === false) {
      checker.push(false);
    }
    if (mobileNo.length < 10) {
      checker.push(false);
    }
    if (idcard.length < 13) {
      checker.push(false);
    }
    if(!Script.chkDigitPid(idcard)){
      checker.push(false);
    }
    if (checker.indexOf(false) !== -1) {
      setTextAlert(LANG.alert_text_01);
      setAlert(true);
      return;
    }
    var add = {
      unitId: unit.unitId,
      ownerType: "coowner",
      nationType: "foreign",
      passport: passport,
      name: name,
      idcard: null,
      mobileNo: mobileNo,
      email: email,
    };
    addMember(add)
  };

  const closeModalAlert = () => setAlert(false);

  return (
    <KeyboardAvoidingView
      behavior="padding" 
      style={{ marginBottom: 30 }}>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        {LANG.residentadd_text_05}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
            Styles.border_btn2
          ]}
          onChangeText={setName}
        />
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        {LANG.residentadd_text_11}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
            Styles.border_btn2
          ]}
          onChangeText={setPassport}
        />
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        {LANG.residentadd_text_07}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          maxLength={10}
          keyboardType={"number-pad"}
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
            Styles.border_btn2
          ]}
          onChangeText={setMobileNo}
        />
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        {LANG.residentadd_text_08}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
            Styles.border_btn2
          ]}
          onChangeText={setEmail}
        />
      </View>
      <View style={Styles.al_center}>
        <TouchableOpacity
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
          onPress={() => addData()}
        >
          <Text
            style={[
              Styles.white_text,
              Styles.f_24,
              Styles.mainFont,
              { marginLeft: "1%" },
            ]}
          >
            {LANG.residentadd_text_09}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.w90,
            Styles.row,
            Styles.mt10,
            Styles.transparent,
            Styles.al_center,
            Styles.br_5,
            Styles.border_btn,
            Styles.p15,
            Styles.jc_center,
          ]}
          onPress={() => navigate.navigate("MemberManageIndivi")}
        >
          <Text
            style={[
              Styles.text_center,
              Styles.mainColor_text,
              Styles.f_24,
              Styles.mainFont,
              { marginLeft: "1%" },
            ]}
          >
            {LANG.residentadd_text_10}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={texAlert} closeModalAlert={closeModalAlert} />
      </Modal>
    </KeyboardAvoidingView>
  );
}
