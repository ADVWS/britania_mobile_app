import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { useRecoilState } from "recoil";
import * as Global from "../../globalState";
import { Styles } from "../../styles";

//transparent f1645e
export default function MenuManageBtn(props) {
  const [LANG, setLANG] = useRecoilState(Global.Language);

  const [selectResident, setSelectResident] = React.useState("#ffcfcf");
  const [selectOccupant, setSelectOccupant] = React.useState("transparent");

  const onSelectMenu = (SELECT) => {
    if (SELECT === "RESIDENT") {
      setSelectResident("#ffcfcf");
      setSelectOccupant("transparent");
    } else if (SELECT === "OCCUPANT") {
      setSelectResident("transparent");
      setSelectOccupant("#ffcfcf");
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
        { backgroundColor: "#ffecec" },
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
        <Text style={[Styles.mainColor_text, Styles.f_24, Styles.mainFont_x]}>
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
            Styles.mainColor_text,
            Styles.f_24,
            Styles.mainFont_x,
            Styles.text_center,
          ]}
        >
          {LANG.membermanageindivi_text_02}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
