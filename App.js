import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import AllNavigator from "./src/navigator";


export default function App() {
  return (
    <RecoilRoot>
      <AllNavigator />
    </RecoilRoot>
  );
}
