import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { Styles } from "../styles";
import Script from "../script";

export default class mainHeader extends React.Component {
  state = {
    header_name: "",
    back_btn: "",
  };

  componentDidMount() {
    if (this.props.name) {
      this.setState({ header_name: this.props.name });
    }
    if (this.props.backto) {
      this.setState({ back_btn: this.props.backto });
    } else {
      this.setState({ back_btn: "TabFooter" });
    }
  }

  setData() {
    if (this.props.callbackEdit) {
      var callbackEdit = this.props.callbackEdit;
      navigate.navigate(this.state.back_btn, callbackEdit);
      return;
    }
    var paramNav = "";
    var informSet;
    var defaultTime;
    if (this.props.param) {
      paramNav = this.props.param;
    }
    if (this.props.informSet) {
      informSet = this.props.informSet;
    }
    if (this.props.defaultTime) {
      defaultTime = this.props.defaultTime
    }
    navigate.navigate(this.state.back_btn, { paramNav, informSet, defaultTime });
  }

  render() {
    return (
      <View
        style={[
          Styles.w100,
          Styles.h15,
          Styles.row,
          Styles.p20,
          Styles.mainColor2,
          Styles.mainColorF9,
          // Styles.boxWithShadow,
          Styles.mb5,
        ]}
      >
        <View style={[Styles.w10, Styles.al_start, Styles.jc_end, Styles.p5 ]}>
          <TouchableOpacity onPress={() => this.setData()}>
            <MaterialIcons name="arrow-back" size={32} color="#bb6a70" />
          </TouchableOpacity>
        </View>
        <View
          style={[Styles.w90, Styles.al_start, Styles.jc_end, { bottom: 8 }]}
        >
          <Text
            style={[
              Styles.f_24,
              Styles.mainColor_text3,
              Styles.bbb_text,
              Styles.mainFont_x,
              Styles.mt5,
              Styles.ml5,
              { top: 2 },
            ]}
          >
            {this.state.header_name}
          </Text>
        </View>
      </View>
    );
  }
}
