import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { Styles } from "../../styles";

export default class radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
      email: false,
      mobile_color: "#bb6a70",
      email_color: "#9c9c9b",
    };
  }

  selectType = (type) => {
    if (type == "MOBILE") {
      this.setState({
        mobile: true,
        email: false,
        mobile_color: "#bb6a70",
        email_color: "#9c9c9b",
      });
    }
    if (type === "EMAIL") {
      this.setState({
        mobile: false,
        email: true,
        mobile_color: "#9c9c9b",
        email_color: "#bb6a70",
      });
    }
    const {isSelectType} = this.props;
    this.isSelectType = isSelectType;
    this.props.isSelectType(type);
  };

  render() {
    return (
      <View style={[Styles.al_start, Styles.w100, Styles.row, Styles.mt20]}>
        <View style={[Styles.w50, Styles.al_start, Styles.row]}>
          <TouchableOpacity
            onPress={() => {
              this.selectType("MOBILE");
            }}
            style={[
              {
                width: 25,
                height: 25,
                borderWidth: 2,
                borderColor: this.state.mobile_color,
              },
              Styles.circle,
              Styles.al_center,
              Styles.jc_center,
            ]}
          >
            {this.state.mobile && (
              <View
                style={[
                  { width: 12, height: 12 },
                  Styles.circle,
                  Styles.mainColor3,
                ]}
              />
            )}
          </TouchableOpacity>
          <Text style={[Styles.ml5, Styles.f_22, Styles.black_gray_text, Styles.mainFont]}>
            {this.props.mobile}
          </Text>
        </View>
        <View style={[Styles.w50, Styles.al_start, Styles.row]}>
          <TouchableOpacity
            onPress={() => {
              this.selectType("EMAIL");
            }}
            style={[
              {
                width: 25,
                height: 25,
                borderWidth: 2,
                borderColor: this.state.email_color,
              },
              Styles.circle,
              Styles.al_center,
              Styles.jc_center,
            ]}
          >
            {this.state.email && (
              <View
                style={[
                  { width: 12, height: 12 },
                  Styles.circle,
                  Styles.mainColor3,
                ]}
              />
            )}
          </TouchableOpacity>
          <Text style={[Styles.ml5, Styles.black_gray_text, Styles.mainFont, Styles.f_22]}>
            {this.props.email}
          </Text>
        </View>
      </View>
    );
  }
}
