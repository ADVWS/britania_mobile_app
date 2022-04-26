import * as React from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import mainScript from "../../script";
import Script from "../../script/Profile_script";
import Key from "../../KEYS.json";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";
import Modal from "react-native-modal";
import Modal_alert from "../../component/modal_alert";
import Modal_loading from "../../component/modal_loading"

export default function ProfileForm(props) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [name, setName] = React.useState(props.userProfile.name);
  const [mobile, setMobile] = React.useState(
    props.userProfile.mobileNo
  );
  const [email, setEmail] = React.useState(props.userProfile.email);
  const nameref = React.createRef();
  const mobileref = React.createRef();
  const [alert, setAlert] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState('');
  const [loading, setLoading] = React.useState(false);


  const checkData = () => {
    var checker = []
    if(name === ''){
      checker.push(false)
    }
    if(mobile === ''){
      checker.push(false)
    }
    if(checker.indexOf(false) !== -1){
      setTextAlert(LANG.alert_text_01)
      setAlert(true)
      return
    }
    props.updateUser(name, mobile)
  }

  const closeModalAlert = () => setAlert(false)

  return (
    <View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        {LANG.profile_text_02}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          ref={nameref}
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.mainFont_x,
            Styles.f_20,
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
        {LANG.profile_text_03}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          ref={mobileref}
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.mainFont_x,
            Styles.f_20,
            Styles.border_btn2,
          ]}
          value={mobile}
          maxLength={10}
          onChangeText={setMobile}
          keyboardType="numeric"
        />
      </View>
      <View style={Styles.al_center}>
        <TouchableOpacity
          onPress={() => checkData()}
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
        >
          <Text
            style={[
              Styles.white_text,
              Styles.f_24,
              Styles.mainFont,
              { marginLeft: "1%" },
            ]}
          >
            {LANG.profile_text_04}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={alert} style={Styles.al_center}>
          <Modal_alert textAlert={texAlert} closeModalAlert={closeModalAlert} />
      </Modal>
      <Modal isVisible={loading} style={Styles.al_center}>
          <Modal_loading />
      </Modal>
    </View>
  );
}
