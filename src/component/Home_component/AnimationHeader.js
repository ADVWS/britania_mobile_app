import React, { useState } from "react";
import { Animated, View, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";
import Store from "../../store";
import Script from "../../script/Notification_script";
import Key from "../../KEYS.json";

const HEADER_HEIGHT = 50;
const screen = "Home";
const AnimatedHeader = ({ animatedValue }) => {
  const [userType, setUserType] = useRecoilState(Global.userType);
  const [counter, setCounter] = React.useState("-");
  const insets = useSafeAreaInsets();
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: "clamp",
  });
  const colorSet = animatedValue.interpolate({
    inputRange: [0, 50],
    outputRange: ["rgba(249, 249, 249,1)", "rgba(249, 249, 249,1)"],
  });
  const imageSet = animatedValue.interpolate({
    inputRange: [0, 50],
    outputRange: ["rgba(85, 85, 85, 1)", "rgba(85, 85, 85, 1)"],
  });
  const iconeSet = animatedValue.interpolate({
    inputRange: [0, 50],
    outputRange: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)"],
  });
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
          //disabled={true}
          onPress={() => navigate.navigate("Notify", { screen })}
          style={{ top: 3 }}
        >
          <Animated.Text style={{ color: "#000" }}>
            <MaterialIcons name="notifications-none" size={30} />
          </Animated.Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigate.navigate("Notify", { screen })}
          style={{ top: 3 }}
        >
          <Animated.Text style={{ color: iconeSet }}>
            <MaterialIcons name="notifications-none" size={30} />
          </Animated.Text>
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
              <Text style={{ color: "#FFF", fontSize: 12 }}>
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
    <Animated.View
      style={[
        Styles.w100,
        Styles.h15,
        Styles.row,
        Styles.p20,
        { backgroundColor: colorSet },
      ]}
    >
      <View style={[Styles.w20]} />
      <View
        style={[Styles.w60, Styles.al_center, Styles.jc_end, { bottom: 5 }]}
      >
        <Animated.Image
          source={require("../../../assets/image/britania_new_theme/BRITANIA_CONNECT_LOGO-15.png")}
          // style={[Styles.w70, { tintColor: imageSet, height: '32%' }]}
          style={[Styles.w100, { height: "40%" }]}
        />
      </View>
      <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
        {setNotify()}
      </View>
    </Animated.View>
  );
};

export default AnimatedHeader;
