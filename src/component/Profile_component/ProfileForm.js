import * as React from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import mainScript from "../../script";
import Script from "../../script/Profile_script";
import Key from "../../KEYS.json";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";

export default function ProfileForm(props) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [name, setName] = React.useState(props.userProfile.name);
  const [mobile, setMobile] = React.useState(
    mainScript.formatPhoneNumber2(props.userProfile.mobileno)
  );
  const [email, setEmail] = React.useState(props.userProfile.email);

  const updateUser = () => {
    Script.userUpdateProfile(email, mobile, name, Key.TOKEN, (res) => {
      if (typeof res === "object") {
        const { updateGlobal } = props;
        this.updateGlobal = updateGlobal;
        this.updateGlobal(res.userUpdateProfile);
      }
    });
  };

  console.log(props.userProfile);

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
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.mainFont_x,
            Styles.f_20,
          ]}
          value={name}
          onChangeText={(val) => {
            setName(val);
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
        {LANG.profile_text_03}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.mainFont_x,
            Styles.f_20,
          ]}
          value={mainScript.formatPhoneNumber2(mobile)}
          maxLength={10}
          onChangeText={(val) => {
            setMobile(val);
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
        {LANG.otp_text_03}
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.mainFont_x,
            Styles.f_20,
          ]}
          value={email}
          onChangeText={(val) => {
            setEmail(val);
          }}
        />
      </View>
      <View style={Styles.al_center}>
        <TouchableOpacity
          onPress={() => updateUser()}
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
        <TouchableOpacity
          onPress={() => navigate.navigate("Account")}
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
            {LANG.profile_text_05}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
