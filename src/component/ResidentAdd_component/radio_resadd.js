import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { useRecoilState } from "recoil";
import * as Global from "../../globalState";
import { Styles } from "../../styles";

export default function radio_resadd(props) {
  const [LANG, setLANG] = useRecoilState(Global.Language);

  const [thai, setThai] = React.useState(true);
  const [foreign, setForeign] = React.useState(false);

  const [thaiColor, setThaiColor] = React.useState("#bb6a70");
  const [foreignColor, setForeignColor] = React.useState("#9c9c9b");

  const selectType = (type) => {
    if (type == "thai") {
      setThai(true);
      setForeign(false);
      setThaiColor("#bb6a70");
      setForeignColor("#9c9c9b");
    }
    if (type === "foreign") {
      setThai(false);
      setForeign(true);
      setThaiColor("#9c9c9b");
      setForeignColor("#bb6a70");
    }
    const { isSelectType } = props;
    props.isSelectType(type);
  };

  return (
    <View style={[Styles.al_start, Styles.w100, Styles.row, Styles.mt20]}>
      <View style={[Styles.w50, Styles.al_start, Styles.row]}>
        <TouchableOpacity
          onPress={() => {
            selectType("thai");
          }}
          style={[
            {
              width: 25,
              height: 25,
              borderWidth: 2,
              borderColor: thaiColor,
            },
            Styles.circle,
            Styles.al_center,
            Styles.jc_center,
          ]}
        >
          {thai && (
            <View
              style={[
                { width: 12, height: 12 },
                Styles.circle,
                Styles.mainColor3,
              ]}
            />
          )}
        </TouchableOpacity>
        <Text
          style={[
            Styles.ml5,
            Styles.mainFont_x,
            Styles.f_22,
            { color: "#8f8f8f" },
          ]}
        >
          {LANG.residentadd_text_03}
        </Text>
      </View>
      <View style={[Styles.w50, Styles.al_start, Styles.row]}>
        <TouchableOpacity
          onPress={() => {
            selectType("foreign");
          }}
          style={[
            {
              width: 25,
              height: 25,
              borderWidth: 2,
              borderColor: foreignColor,
            },
            Styles.circle,
            Styles.al_center,
            Styles.jc_center,
          ]}
        >
          {foreign && (
            <View
              style={[
                { width: 12, height: 12 },
                Styles.circle,
                Styles.mainColor3,
              ]}
            />
          )}
        </TouchableOpacity>
        <Text
          style={[
            Styles.ml5,
            Styles.mainFont_x,
            Styles.f_22,
            { color: "#8f8f8f" },
          ]}
        >
          {LANG.residentadd_text_04}
        </Text>
      </View>
    </View>
  );
}
