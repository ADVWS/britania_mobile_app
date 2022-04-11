import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState";

const edit_btn = ({ member, openConfirm }) => {
  const [LANG, setLANG] = useRecoilState(Global.Language);

  return (
    <View style={Styles.row}>
      <TouchableOpacity
        onPress={() => openConfirm()}
        style={[
          Styles.w45,
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
            Styles.mainColor_text3,
            Styles.f_22,
            Styles.mainFont,
            { marginLeft: "1%" },
          ]}
        >
          {LANG.occupantdetail_text_06}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Styles.w50,
          Styles.row,
          Styles.mt10,
          Styles.transparent,
          Styles.al_center,
          Styles.br_5,
          Styles.border_btn,
          Styles.p15,
          Styles.jc_center,
          Styles.ml5,
        ]}
        onPress={() => navigate.navigate("OccupantEdit", member)}
      >
        <Text
          style={[
            Styles.text_center,
            Styles.mainColor_text3,
            Styles.f_22,
            Styles.mainFont,
            { marginLeft: "1%" },
          ]}
        >
          {LANG.occupantdetail_text_07}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default edit_btn;
