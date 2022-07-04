import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, LogBox, Platform, Alert } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Constants from "expo-constants";
import AllNavigator from "./src/navigator";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import Store from "./src/store";
import Keys from "./src/KEYS.json";
import * as Location from 'expo-location';
import Device from 'expo-device';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  console.disableYellowBox = true;
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  const [loaded, setLoaded] = useState(false);
  

  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
  }, []);


  _loadFontsAsync = async () => {
    let isLoaded = await Font.loadAsync({
      Helvethaica: require("./assets/fonts/DB-Helvethaica-X-Med.ttf"),
      Helvethaica_exl: require("./assets/fonts/DB-Helvethaica-X-Thin.ttf"),
      Helvethaica_x_bd: require("./assets/fonts/DB-Helvethaica-X-Bd-v3.2_0.ttf"),
      Helvethaica_x_It: require("./assets/fonts/DB-Helvethaica-X-It-v3.2_0.ttf"),
      Helvethaica_x_Li: require("./assets/fonts/DB-Helvethaica-X-Li-v3.2_0.ttf"),
      Helvethaica_x: require("./assets/fonts/DB-Helvethaica-X-v3.2_0.ttf"),
    });
    setLoaded(isLoaded);
  };

  _loadFontsAsync();
  return (
    <RecoilRoot>
      <AllNavigator />
    </RecoilRoot>
  );
}
