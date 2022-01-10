import * as React from "react";
import { View } from "react-native";
import MainHeader from "../component/mainHeader";

import { Styles } from "../styles";

export default function TermOfService() {
  return (
    <View style={[Styles.flex, Styles.al_center, Styles.FFF]}>
      <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={""} backto={"Account"} />
      </View>
    </View>
  );
}
