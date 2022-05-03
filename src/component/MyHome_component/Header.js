import * as React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import Store from "../../store";
import Script from "../../script/Notification_script";
import Key from "../../KEYS.json";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";

var screen = "HomeDetail";
const Header = () => {
  const [counter, setCounter] = React.useState("-");
  const [userType, setUserType] = useRecoilState(Global.userType);
  const [project, _setProject] = useRecoilState(Global.project);
  const setCountNotify = () => {
    Store.getLocalStorege(Key.TOKEN, (tk) => {
      const token = tk.detail.token;
      Script.notificationCountUnread(token, (res) => {
        setCounter(res);
      });
    });
  };

  setCountNotify();

  function setNotify() {
    if (userType !== 1) {
      return (
        <TouchableOpacity
          disabled={true}
          onPress={() => navigate.navigate("Notify", { screen })}
          style={{ top: 3 }}
        >
          <MaterialIcons name="notifications-none" size={30} color={"#000"} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigate.navigate("Notify", { screen })}
          style={{ top: 3 }}
        >
          <MaterialIcons
            name="notifications-none"
            size={30}
            color={"#555555"}
          />
          {counter !== "-" && counter !== 0 && (
            <View
              style={[
                Styles.mainColor,
                {
                  borderRadius: 100,
                  height: 20,
                  width: 20,
                  position: "absolute",
                  top: -7,
                  left: 15,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={{ color: "#f9f9f9", fontSize: 12 }}>
                {setCountNotify()}
                {counter}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      );
    }
  }
  return (
    <View
      style={[
        Styles.w100,
        Styles.h15,
        Styles.row,
        Styles.p20,
        Styles.mainColor2,
        Styles.mb5,
      ]}
    >
      <View style={[Styles.w20]} />
      {/* <TouchableOpacity style={[Styles.w20, Styles.al_start, Styles.jc_center, Styles.p5, {top: 30}]} onPress={()=> navigate.navigate("TabFooter")}>
                <MaterialIcons name="arrow-back-ios" size={25} style={Styles.black_gray_text} />
            </TouchableOpacity> */}

      <View
        style={[Styles.w60, Styles.al_center, Styles.jc_end, { bottom: 5 }]}
      >
        <Image
          source={require("../../../assets/image/britania_new_theme/BRITANIA_CONNECT_LOGO-15.png")}
          style={[Styles.w100, { height: 45, width: 190, top: 5 }]}
        />
      </View>
      <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
        {setNotify()}
      </View>
    </View>
  );
};

export default Header;
