import * as React from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import mainScript from "../../script";
import Script from "../../script/Profile_script";
import Key from "../../KEYS.json"

export default class ProfileForm extends React.Component {
  state = {
    name: this.props.userProfile.name,
    mobileno: this.props.userProfile.mobileNo,
    email: this.props.userProfile.email,
  };

  _InputValue = (name, mobile, email) => {
    if (name) {
      this.setState({ name: name });
    }
    if (mobile) {
      this.setState({ mobileno: mainScript.formatPhoneNumber2(mobile) });
    }
    if(email) {
      this.setState({ email: email})
    }
  };

  updateUser = () => {
    var email = this.state.email
    var mobileNo = this.state.mobileno.trim()
    var name = this.state.name
    Script.userUpdateProfile(email, mobileNo, name, Key.TOKEN,(res)=>{
      if(typeof res === 'object'){
        const { updateGlobal } = this.props;
        this.updateGlobal = updateGlobal;
        this.updateGlobal(res.userUpdateProfile);
      }
    })
  }

  render() {
    console.log(this.props.userProfile)
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
          ชื่อ-นามสกุล
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
            value={this.state.name}
            onChangeText={(val) => {
              this._InputValue(val, undefined, undefined);
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
          เบอร์โทรศัพท์
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
            value={mainScript.formatPhoneNumber2(this.state.mobileno)}
            maxLength={10}
            onChangeText={(val) => {
              this._InputValue(undefined, val, undefined);
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
          อีเมล
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
            value={this.state.email}
            onChangeText={(val) => {
              this._InputValue(undefined, undefined, val);
            }}
          />
        </View>
        <View style={Styles.al_center}>
          <TouchableOpacity
            onPress={()=> this.updateUser()}
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
              บันทึก
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
              ยกเลิก
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
