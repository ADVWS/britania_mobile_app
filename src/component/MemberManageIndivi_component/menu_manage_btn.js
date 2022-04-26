import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { useRecoilState } from "recoil";
import * as Global from "../../globalState";
import { Styles } from "../../styles";

//transparent f1645e
export default function MenuManageBtn(props) {
  const [LANG, setLANG] = useRecoilState(Global.Language);

  const [selectResident, setSelectResident] = React.useState("#bb6a70");
  const [selectOccupant, setSelectOccupant] = React.useState("transparent");
  const [textResident, setTextResident] = React.useState("#fff");
  const [textOccupant, setTextOccupant] = React.useState("#555");

  const onSelectMenu = (SELECT) => {
    if (SELECT === "RESIDENT") {
      setSelectResident("#bb6a70");
      setSelectOccupant("transparent");
      setTextResident("#fff")
      setTextOccupant("#555")
    } else if (SELECT === "OCCUPANT") {
      setSelectResident("transparent");
      setSelectOccupant("#bb6a70");
      setTextResident("#555")
      setTextOccupant("#fff")
    }
    const { selectMenu } = props;
    selectMenu(SELECT);
  };

  return (
    <View
      style={[
        Styles.w100,
        Styles.p15,
        Styles.row,
        { backgroundColor: "#f3eced" },
      ]}
    >
      <TouchableOpacity
        onPress={() => onSelectMenu("RESIDENT")}
        style={[
          Styles.w35,
          Styles.p10,
          Styles.circle,
          Styles.al_center,
          { backgroundColor: selectResident },
        ]}
      >
        <Text style={[Styles.f_24, Styles.mainFont_x, {color: textResident}]}>
          {LANG.membermanageindivi_text_01}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSelectMenu("OCCUPANT")}
        style={[
          Styles.w30,
          Styles.p10,
          Styles.circle,
          Styles.al_center,
          { backgroundColor: selectOccupant },
        ]}
      >
        <Text
          style={[
            Styles.f_24,
            Styles.mainFont_x,
            Styles.text_center,
            {color: textOccupant}
          ]}
        >
          {LANG.membermanageindivi_text_02}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
