import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { Styles } from "../../styles";

//transparent f1645e
export default class MenuManageBtn extends React.Component {
  state = {
    selectResident: "#ffcfcf",
    selectOccupant: "transparent",
  };

  onSelectMenu = (SELECT) => {
    if (SELECT === "RESIDENT") {
      this.setState({
        selectResident: "#ffcfcf",
        selectOccupant: "transparent",
      });
    } else if (SELECT === "OCCUPANT") {
      this.setState({
        selectResident: "transparent",
        selectOccupant: "#ffcfcf",
      });
    }
    const { selectMenu } = this.props;
    this.selectMenu = selectMenu;
    this.selectMenu(SELECT);
  };

  render() {
    return (
      <View
        style={[
          Styles.w100,
          Styles.p15,
          Styles.row,
          { backgroundColor: "#ffecec" },
        ]}
      >
        <TouchableOpacity
          onPress={() => this.onSelectMenu("RESIDENT")}
          style={[
            Styles.w35,
            Styles.p10,
            Styles.circle,
            Styles.al_center,
            { backgroundColor: this.state.selectResident },
          ]}
        >
          <Text style={[Styles.mainColor_text, Styles.f_24, Styles.mainFont_x]}>
            ผู้อาศัยร่วม
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.onSelectMenu("OCCUPANT")}
          style={[
            Styles.w30,
            Styles.p10,
            Styles.circle,
            Styles.al_center,
            { backgroundColor: this.state.selectOccupant },
          ]}
        >
          <Text
            style={[
              Styles.mainColor_text,
              Styles.f_24,
              Styles.mainFont_x,
              Styles.text_center,
            ]}
          >
            ผู้เช่า
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
