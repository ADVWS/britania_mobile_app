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
  console.log('props::', props)
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [name, setName] = React.useState(props.userProfile.name);
  const [mobile, setMobile] = React.useState(
    mainScript.formatPhoneNumber2(props.userProfile.mobileNo)
  );
  const [email, setEmail] = React.useState(props.userProfile.email);


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
            Styles.border_btn2
          ]}
          value={name}
          onChangeText={(val) => {
            setName(val);
            props.editProfile(val, undefined, undefined);
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
            Styles.border_btn2
          ]}
          value={mainScript.formatPhoneNumber2(mobile)}
          maxLength={10}
          onChangeText={(val) => {
            setMobile(val);
            props.editProfile(undefined, val, undefined);
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
            Styles.border_btn2
          ]}
          value={email}
          onChangeText={(val) => {
            setEmail(val)
            props.editProfile(undefined, undefined, val);
          }}
        />
      </View>
    </View>
  );
}
