import * as React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";

import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import moment from "moment";
import mainScript from "../../script"
import * as Global from "../../globalState";
import KEYS from "../../KEYS.json"
import Script from "../../script/ResidentEdit_script"
import Modal from "react-native-modal";
import Modal_alert  from "../../component/modal_alert";

import { useRecoilState, useSetRecoilState } from "recoil";

const thai_form = (item) => {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [member, setMember] = React.useState(item.item)
  const [name, setName] = React.useState(member.name)
  const [idcard, setIdcard] = React.useState(member.idcard)
  const [mobileNo, setMobileNo] = React.useState(member.mobileNo)
  const [email, setEmail] = React.useState(member.email)
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const [alert, setAlert] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState('');
  const setUnitMember = useSetRecoilState(Global.unitMember);
  const saveEdit = () => {
    var checker = []
    if(name === ''){
      checker.push(false)
    }
    if(idcard === ''){
      checker.push(false)
    }
    if(mobileNo === ''){
      checker.push(false)
    }
    if(email === ''){
      checker.push(false)
    }
    if(checker.indexOf(false) !== -1){
      setTextAlert(LANG.alert_text_01)
      setAlert(true)
      return
    }
    var edit = {
      name: name,
      idcard: idcard,
      mobileNo: mobileNo,
      email: email,
      nationType: "thai",
      unitMemberId: member.unitMemberId,
    }
    item.saveDataEdit(edit)
  }

  const closeModalAlert = () => setAlert(false)

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
        {LANG.residentedit_text_06}
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
          value={name}
          onChangeText={(val)=>{
            setName(val)
          }}
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
        {LANG.residentedit_text_07}
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
          value={idcard}
          onChangeText={(val)=>{
            setIdcard(val)
          }}
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
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
            Styles.border_btn2
          ]}
          value={mobileNo}
          onChangeText={(val)=>{
            setMobileNo(val)
          }}
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
            Styles.border_btn2
          ]}
          value={email}
          onChangeText={(val)=>{
            setEmail(val)
          }}
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

export default thai_form
