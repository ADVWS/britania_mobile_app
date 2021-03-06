import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";

import { Styles } from "../../styles";
import OccupantBtn from "./occupant_btn";

const image = require("../../../assets/image/Britania-connect-assets/member-empty.png");

export default function OccupantList({ occupant, item }) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [unitMember, setUnitMember] = useRecoilState(Global.unitMember);
  console.log("occupant list===>", unitMember.unitMember.tenant);

  return (
    <View style={[Styles.w100, Styles.p15]}>
      <TouchableOpacity
        style={[
          Styles.w100,
          Styles.p15,
          Styles.br_5,
          Styles.al_center,
          Styles.jc_center,
          Styles.mainColor,
          Styles.boxWithShadow,
          Styles.row,
        ]}
        onPress={() => navigate.navigate("OccupantAdd", item)}
      >
        <MaterialIcons name="add" size={25} color={"#FFF"} />
        <Text
          style={[
            Styles.white_text,
            Styles.f_22,
            Styles.mainFont_x,
            { marginLeft: "1%" },
          ]}
        >
          {LANG.membermanageindivi_text_12}
        </Text>
      </TouchableOpacity>
      {unitMember.unitMember.tenant.length > 0 ? (
        <View style={[Styles.mt10]}>
          <OccupantBtn occupant={unitMember.unitMember.tenant} />
        </View>
      ) : (
        <View style={[Styles.al_center, Styles.p40, Styles.mt30]}>
          <Image
            source={image}
            style={{ width: 80, height: 80, resizeMode: "cover" }}
          />
          <Text
            style={[
              Styles.gray_text,
              Styles.mainFont,
              Styles.f_24,
              Styles.mt10,
            ]}
          >
            {LANG.membermanageindivi_text_04}
          </Text>
        </View>
      )}
      {/*   */}
    </View>
  );
}
