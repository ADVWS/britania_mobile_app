import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";

import { Styles } from "../../styles";
import OccupantBtn from "./occupant_btn";

const image = require("../../../assets/Britania-connect-assets/member-empty.png");

export default function OccupantList(occupant) {
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
        onPress={() => navigate.navigate("OccupantAdd")}
      >
        <MaterialIcons name="add" size={25} color={"#FFF"} />
        <Text
          style={[
            Styles.white_text,
            Styles.f_18,
            Styles.mainFont,
            { marginLeft: "1%" },
          ]}
        >
          เพิ่มผู้เช่า
        </Text>
      </TouchableOpacity>
      {occupant.occupant != undefined ? (
        <View style={[Styles.mt10]}>
          <OccupantBtn occupant={occupant.occupant} />
        </View>
      ) : (
        <View style={[Styles.al_center, Styles.p40, Styles.mt30]}>
          <Image
            source={image}
            style={{ width: 100, height: 100, resizeMode: "cover" }}
          />
          <Text style={[Styles.gray_text, Styles.mainFont]}>
            ไม่มีผู้อาศัยร่วม
          </Text>
        </View>
      )}
      {/*   */}
    </View>
  );
}
