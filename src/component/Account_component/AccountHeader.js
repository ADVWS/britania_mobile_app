import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";

import { Styles } from "../../styles";

const AccountHeader = ({}) => {
  var screen = "Account";
  const userType = useRecoilState(Global.userType);
  const [LANG, setLANG] = useRecoilState(Global.Language);

  function setNotify() {
    console.log(userType);
    var action = false;
    var color = "#f1645e";
    if (userType === 1) {
      color = "#f1645e";
      action = false;
    } else {
      color = "#000";
      action = true;
    }
    return (
      <TouchableOpacity
        disabled={action}
        onPress={() => navigate.navigate("Notify", { screen })}
      >
        <MaterialIcons name="notifications-none" size={26} color={color} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20]}>
      <View style={[]} />
      <View
        style={[Styles.w80, Styles.text_left, Styles.jc_end, { bottom: 5 }]}
      >
        <Text
          style={[
            Styles.mainFont_x,
            Styles.mainColor_text,
            { fontSize: 32, top: 5 },
          ]}
        >
          {" "}
          {LANG.account_text_01}
        </Text>
      </View>
      <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
        {setNotify()}
      </View>
    </View>
  );
};

export default AccountHeader;
