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
  // React.useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) => {
  //     console.log(token)
  //     Store.getLocalStorege(Keys.NOTIFY, (res) => {
  //       if (!res.result) {
  //         storekNotifyToken(token);
  //       }
  //     });
  //   }).catch((err) => console.log(err));
  // }, []);

  // function storekNotifyToken(token) {
  //   Store.setLocalStorege(Keys.NOTIFY, token, (res) => {});
  // }

  // async function registerForPushNotificationsAsync() {
  //   let token;

  //   if (Constants.isDevice) {
  //     const { status: existingStatus } =
  //       await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }

  //     if (finalStatus !== "granted") {
  //       Alert.alert("Failed to get push token for push notification!");
  //       return;
  //     }
  //     console.log(await Notifications.getDevicePushTokenAsync())
  //     token = (await Notifications.getDevicePushTokenAsync()).data;
  //   }

  //   if (Platform.OS === "android") {
  //     Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }

  //   return token;
  // }

  /////expo

  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  // React.useEffect(() => {
  //   Store.getPushToken((res) => {
  //     if (!res) {
  //       registerForPushNotificationsAsync().then((token) => {
  //         storekNotifyToken(token);
  //       });
  //     }
  //   });

  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });

  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log(response);
  //     });

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  // function storekNotifyToken(token) {
  //   Store.setLocalStorege(Keys.NOTIFY, token, (res) => {
  //     console.log("!!!===>", res);
  //   });
  // }

  // async function registerForPushNotificationsAsync() {
  //   let token;
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } =
  //       await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       alert("Failed to get push token for push notification!");
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //   } else {
  //     alert("Must use physical device for Push Notifications");
  //   }

  //   if (Platform.OS === "android") {
  //     Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }

  //   return token;
  // }

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
