import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";

import { Styles } from "../../styles";
import ResidentBtn from "./resident_btn";

const image = require("../../../assets/image/Britania-connect-assets/member-empty.png");

export default function ResidentList(resident, item) {
  return (
    <View style={[Styles.w100, Styles.p15, { backgroundColor: "#EEEEEE" }]}>
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
        onPress={() => navigate.navigate("ResidentAdd")}
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
          เพิ่มผู้อาศัยร่วม
        </Text>
      </TouchableOpacity>
      {resident.resident != undefined ? (
        <View style={[Styles.mt10]}>
          <ResidentBtn resident={resident.resident} item={item} />
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
    </View>
  );
}
