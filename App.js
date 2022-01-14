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
  const [loaded, setLoaded] = useState(false);
  _loadFontsAsync = async () => {
    let isLoaded = await Font.loadAsync({
      Prompt: require("./assets/fonts/Prompt-Medium.ttf"),
      Prompt_exl: require("./assets/fonts/Prompt-ExtraLight.ttf"),
      Helvethaica: require("./assets/fonts/DB-Helvethaica-X-Med.ttf"),
      Helvethaica_exl: require("./assets/fonts/DB-Helvethaica-X-Thin.ttf"),
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
