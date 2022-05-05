import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, LogBox, Platform } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import AllNavigator from "./src/navigator";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import Store from "./src/store";
import Keys from "./src/KEYS.json";

export default function App() {
  // console.disableYellowBox = true;
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    registerForPushNotification()
      .then((token) => {
        Store.getLocalStorege(Keys.NOTIFY, (res) => {
          if (!res.result) {
            storekNotifyToken(token);
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function storekNotifyToken(token) {
    Store.setLocalStorege(Keys.NOTIFY, token, (res) => {});
  }

  // async function registerForPushNotification(){
  //   const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  //   if(status != 'granted') {
  //     const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //   }
  //   if(status != 'granted'){
  //     alert(status);
  //     return
  //   }
  //   token = (await Notifications.getExpoPushTokenAsync()).data;
  //   return token
  // }

  registerForPushNotification = async () => {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return null;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('TOKEN', token);

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return token;
  };

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
