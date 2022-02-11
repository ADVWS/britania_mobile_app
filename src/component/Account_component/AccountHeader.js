import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";

import { Styles } from "../../styles";
import Store from '../../store';
import Script from '../../script/Notification_script';
import Key from '../../KEYS.json'

const AccountHeader = ({ }) => {
  var screen = "Account";
  const [userType, setUserType] = useRecoilState(Global.userType);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [counter, setCounter] = React.useState('-')

  const setCountNotify = () => {
    Store.getLocalStorege(Key.TOKEN, (tk) => {
      const token = tk.detail.token
      Script.notificationCountUnread(token, (res) => {
        setCounter(res)
      })
    })
  }

  function setNotify() {
    if (userType !== 1) {
      return (
        <TouchableOpacity disabled={true} onPress={() => navigate.navigate("Notify", { screen })}>
          <MaterialIcons name="notifications-none" size={30} color={'#000'} />
        </TouchableOpacity>)
    } else {
      return (
        <TouchableOpacity onPress={() => navigate.navigate("Notify", { screen })}>
          <MaterialIcons name="notifications-none" size={30} color={'#f1545e'} />
          {counter !== '-' && counter !== 0 &&
            <View style={{ backgroundColor: "red", borderRadius: 100, height: 25, width: 25, position: 'absolute', top: -7, left: 15, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#FFF', fontSize: 12 }}>{setCountNotify()}{counter}</Text>
            </View>
          }
        </TouchableOpacity>)
    }
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
