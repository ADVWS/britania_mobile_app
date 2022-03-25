import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState";
import Modal from "react-native-modal";
import Modal_alert from "../../component/modal_alert";

const foreigner_form = (item) => {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [member, setMember] = React.useState(item.item);
  const [name, setName] = React.useState(member.name);
  const [passport, setPassport] = React.useState(member.passport);
  const [mobileNo, setMobileNo] = React.useState(member.mobileNo);
  const [email, setEmail] = React.useState(member.email);
  const [alert, setAlert] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");
  const saveEdit = () => {
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
    if (checker.indexOf(false) !== -1) {
      setTextAlert(LANG.alert_text_01);
      setAlert(true);
      return;
    }
    var edit = {
      name: name,
      passport: passport,
      idcard: member.idcard,
      mobileNo: mobileNo,
      email: email,
      nationType: "foreign",
      unitMemberId: member.unitMemberId,
    };
    item.saveDataEdit(edit)
  };

  const closeModalAlert = () => setAlert(false);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ marginBottom: 30 }}>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        {LANG.residentedit_text_06}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.f_20,
            Styles.textfieldbox,
            Styles.mainFont_x,
            Styles.border_btn2,
          ]}
          value={name}
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
        {LANG.residentedit_text_12}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
            Styles.border_btn2,
          ]}
          value={
            passport !== "null" ? (passport !== null ? passport : null) : "-"
          }
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
         {LANG.residentedit_text_08}
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
            Styles.border_btn2,
          ]}
          value={mobileNo}
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
        {LANG.residentedit_text_09}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
            Styles.border_btn2,
          ]}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={Styles.al_center}>
        <TouchableOpacity
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
          onPress={() => saveEdit()}
        >
          <Text
            style={[
              Styles.white_text,
              Styles.f_24,
              Styles.mainFont,
              { marginLeft: "1%" },
            ]}
          >
            {LANG.residentedit_text_13}
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
          onPress={() => navigate.navigate("ResidentDetail", member)}
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
            {LANG.residentedit_text_11}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={texAlert} closeModalAlert={closeModalAlert} />
      </Modal>
    </KeyboardAvoidingView>
  );
}

export default foreigner_form
