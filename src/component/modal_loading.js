import * as React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Styles } from "../styles";

const Modal_loading = ({closeModalLoading}) => {
    return (
      <View
        style={[
          //Styles.w80,
          Styles.al_center,
          Styles.jc_center,
          Styles.p20,
          Styles.FFF,
          Styles.br_5,
          Styles.boxWithShadow
        ]}
      >
        <View style={[Styles.w100]}>
          <ActivityIndicator size="large" color={"#bb6a70"}/>
          <Text style={[Styles.f_22, Styles.mainFont, Styles.BB6_text, Styles.text_center, Styles.mt10]}>
              Loading...
          </Text>
        </View>
      </View>
    );
}

export default Modal_loading;
