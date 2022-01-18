import React, { useState } from "react";
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

export default function App() {
  console.disableYellowBox = true;
  const [loaded, setLoaded] = useState(false);
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
