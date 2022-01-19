import * as React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import Script from "../../script";

export default class ProfileForm extends React.Component {
  state = {
    name : this.props.userProfile.name,
    mobileno : this.props.userProfile.mobileNo
  }

  _InputValue = (name, mobile) => {
    if(name){
      this.setState({name: name})
    }
    if(mobile){
      this.setState({mobileno: Script.formatPhoneNumber2(mobile)})
    }
    const {InputValue} = this.props;
    this.InputValue = InputValue;
    this.InputValue(name, mobile);
  }

  render() {
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
            style={[Styles.w90, Styles.mt10, Styles.textfieldbox]}
            value={this.state.name}
            onChangeText={(val) => {
              this._InputValue(val, undefined)
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
            style={[Styles.w90, Styles.mt5, Styles.textfieldbox]}
            value={Script.formatPhoneNumber2(this.state.mobileno)}
            maxLength={10}
            onChangeText={(val) => {
              this._InputValue(undefined, val)
            }}
          />
        </View>
        <View style={Styles.al_center}>
          <TouchableOpacity
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
            onPress={()=> navigate.navigate('Account')}
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
