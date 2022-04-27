import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { Styles } from "../styles";
import Script from "../script";

export default function mainHeader2(route) {

  const [header_name, setheader_name] = React.useState(route.name);
  const [back_btn, setback_btn] = React.useState(route.backto);
  const navigation = useNavigation();


  const setData = () => {
    navigation.reset(({
      index: 0,
      routes: [{ name: back_btn }],
    }))
  }

    return (
      <View
        style={[
          Styles.w100,
          Styles.h15,
          Styles.row,
          Styles.p20,
          Styles.mainColor2,
          Styles.mainColorF9,
          // Styles.boxWithShadow,
          Styles.mb5,
        ]}
      >
        <View style={[Styles.w10, Styles.al_start, Styles.jc_end, Styles.p5 ]}>
          <TouchableOpacity onPress={() => setData()}>
            <MaterialIcons name="arrow-back" size={32} color="#bb6a70" />
          </TouchableOpacity>
        </View>
        <View
          style={[Styles.w90, Styles.al_start, Styles.jc_end, { bottom: 8 }]}
        >
          <Text
            style={[
              Styles.f_24,
              Styles.mainColor_text3,
              Styles.bbb_text,
              Styles.mainFont_x,
              Styles.mt5,
              Styles.ml5,
              { top: 2 },
            ]}
          >
            {header_name}
          </Text>
        </View>
      </View>
    );
}
