import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";

import { Styles } from "../../styles";

export default function ProfileHeader() {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  return (
    <View
      style={[
        Styles.w100,
        Styles.h15,
        Styles.row,
        Styles.p20,
        Styles.f9_Color,
      ]}
    >
      <View style={[]} />
      <View
        style={[{ width: "15%" }, Styles.al_start, Styles.jc_end, Styles.p5]}
      >
        <AntDesign name="arrowleft" size={26} color="#FFF" />
      </View>
      <View style={[Styles.w60, Styles.jc_end, { bottom: 5 }]}>
        <Text style={[Styles.white_text, Styles.mainFont_x, Styles.f_26]}>
          {LANG.profile_text_01}
        </Text>
      </View>
    </View>
  );
}
