import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import AllNavigator from "./src/navigator";
import * as Font from "expo-font";
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'

export default function App() {
  console.disableYellowBox = true;
  const [loaded, setLoaded] = useState(false);

  React.useEffect(()=>{
    registerForPushNotification().then(token=>console.log(token)).catch(err => console.log(err))
  }, [])

  async function registerForPushNotification(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if(status != 'granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
    if(status != 'granted'){
      alert('fail to get the push token');
      return
    }
    console.log(status)
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token
  }

  _loadFontsAsync = async () => {
    let isLoaded = await Font.loadAsync({
      Helvethaica: require("./assets/fonts/DB-Helvethaica-X-Med.ttf"),
      Helvethaica_exl: require("./assets/fonts/DB-Helvethaica-X-Thin.ttf"),
      Helvethaica_x_bd: require("./assets/fonts/DB-Helvethaica-X-Bd-v3.2_0.ttf"),
      Helvethaica_x_It: require('./assets/fonts/DB-Helvethaica-X-It-v3.2_0.ttf'),
      Helvethaica_x_Li: require('./assets/fonts/DB-Helvethaica-X-Li-v3.2_0.ttf'),
      Helvethaica_x: require('./assets/fonts/DB-Helvethaica-X-v3.2_0.ttf'),
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
