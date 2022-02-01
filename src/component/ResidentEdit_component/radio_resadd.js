import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { Styles } from "../../styles";

export default class radio_resadd extends React.Component {
  constructor(props) {
    super(props);

    if (props.type === 'thai')
    {
      this.state = {
        thai: true,
        foreign: false,
        thai_color: "#f1645e",
        foreign_color: "#9c9c9b",
      };
    }
    else if (props.type === 'foreign')
    {
      this.state = {
        thai: false,
        foreign: true,
        thai_color: "#9c9c9b",
        foreign_color: "#f1645e",
      };
    }
    
  }

  selectType = (type) => {
    console.log("INSIDE TYPE")
    console.log(type)
    if (type === "thai") {
      this.setState({
        thai: true,
        foreign: false,
        thai_color: "#f1645e",
        foreign_color: "#9c9c9b",
      });
    }
    if (type === "foreign") {
      this.setState({
        thai: false,
        foreign: true,
        thai_color: "#9c9c9b",
        foreign_color: "#f1645e",
      });
    }
    const {isSelectType} = this.props;
    this.isSelectType = isSelectType;
    this.props.isSelectType(type);
  };

  render() {

    console.log(this.props)
    return (
      <View style={[Styles.al_start, Styles.w100, Styles.row, Styles.mt20]}>
        <View style={[Styles.w50, Styles.al_start, Styles.row]}>
          <TouchableOpacity
            onPress={() => {
              this.selectType("thai");
            }}
            style={[
              {
                width: 25,
                height: 25,
                borderWidth: 2,
                borderColor: this.state.thai_color,
              },
              Styles.circle,
              Styles.al_center,
              Styles.jc_center,
            ]}
          >
            {this.state.thai && (
              <View
                style={[
                  { width: 12, height: 12 },
                  Styles.circle,
                  Styles.mainColor,
                ]}
              />
            )}
          </TouchableOpacity>
          <Text style={[Styles.ml5, Styles.mainFont, Styles.f_22, {color: "#8f8f8f",}]}>
            บุคคลสัญชาติไทย
          </Text>
        </View>
        <View style={[Styles.w50, Styles.al_start, Styles.row]}>
          <TouchableOpacity
            onPress={() => {
              this.selectType("foreign");
            }}
            style={[
              {
                width: 25,
                height: 25,
                borderWidth: 2,
                borderColor: this.state.foreign_color,
              },
              Styles.circle,
              Styles.al_center,
              Styles.jc_center,
            ]}
          >
            {this.state.foreign && (
              <View
                style={[
                  { width: 12, height: 12 },
                  Styles.circle,
                  Styles.mainColor,
                ]}
              />
            )}
          </TouchableOpacity>
          <Text style={[Styles.ml5, Styles.mainFont, Styles.f_22, {color: "#8f8f8f",}]}>
            บุคคลต่างชาติ
          </Text>
        </View>
      </View>
    );
  }
}
