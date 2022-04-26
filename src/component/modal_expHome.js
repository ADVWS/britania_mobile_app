import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Styles } from "../styles";

const Modal_expHome = ({ LANG, closeModalAlert }) => {

  return (
    <View
      style={[
        Styles.w80,
        Styles.al_center,
        Styles.jc_center,
        Styles.p15,
        Styles.FFF,
        Styles.br_5,
      ]}
    >
      <View style={[Styles.w100]}>
        <View style={[Styles.w100, Styles.al_center]}>
          <Image
            source={require("../../assets/image/expHome.png")}
            style={{ height: 110, width: 110 }}
          />
        </View>
        <Text
          style={[
            Styles.f_22,
            Styles.mainFont_x,
            Styles.text_start,
            Styles.mt10,
          ]}
        >
          {LANG.myhome_text_07}
        </Text>
        <Text
          style={[
            Styles.f_22,
            Styles.mainFont_x,
            Styles.text_start,
            Styles.mt10,
            {color: '#9b9b9b'}
          ]}
        >
          {LANG.myhome_text_08}
        </Text>
        <View style={[Styles.w100, Styles.al_end, Styles.p10]}>
          <TouchableOpacity
            onPress={() => {
              closeModalAlert();
            }}>
            <Text
              style={[
                Styles.f_22,
                Styles.mainFont,
                Styles.text_center,
                Styles.BB6_text,
              ]}
            >
              {LANG.myhome_text_09}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Modal_expHome;
