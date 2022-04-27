import * as React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import MainHeader from "../component/mainHeader";
import { useRecoilState } from "recoil";
import * as Global from "../globalState";
import { Styles } from "../styles";

export default function TermOfService() {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  return (
    <>
      <MainHeader name={LANG.account_text_05} backto={"Account"} />
      <WebView
        source={{ uri: "https://www.britania.co.th/privacy-policy/" }}
        style={[Styles.w100, Styles.h100]}
      />
    </>
  );
}
