import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Styles } from "../styles";

const Modal_alert = ({textAlert, closeModalAlert}) => {
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
        <MaterialCommunityIcons name="alert-circle-outline" size={60} color="#f1645e" style={[Styles.text_center]}/>
          <Text style={[Styles.f_16, Styles.mainFont, Styles.mainColor_text, Styles.text_center, Styles.mt10]}>
            {textAlert}
          </Text>
          <TouchableOpacity
            onPress={()=>{closeModalAlert()}}
            style={[
              Styles.w100,
              Styles.p10,
              Styles.boxWithShadow,
              Styles.mainColor,
              Styles.mt15,
              Styles.br_5
            ]}
          >
            <Text style={[Styles.f_16, Styles.mainFont, Styles.text_center, Styles.white_text]}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Modal_alert;
