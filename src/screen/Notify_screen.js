import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import { LinearGradient } from "expo-linear-gradient";
import Allnotify from "../component/Notify_component/Allnotify";
import Newsnotify from "../component/Notify_component/Newsnotify";
import Fixnotify from "../component/Notify_component/FixNotify";
import { useRecoilState } from "recoil";
import * as Global from "../globalState";
import Script from "../script/Notification_script";

const Notify = ({ route }) => {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [notify, setNotify] = React.useState([]);
  const backto = route.params.screen;
  const [all, setAll] = React.useState({
    open: true,
    color: "#bb6a70",
    text: "#FFF",
  });
  const [news, setNews] = React.useState({
    open: false,
    color: "transparent",
    text: "#bb6a70",
  });
  const [fix, setFix] = React.useState({
    open: false,
    color: "transparent",
    text: "#bb6a70",
  });

  React.useEffect(() => {
    Script.notification((res) => {
      setNotify(res.notification);
    });
  });

  function changeTabs(req) {
    var select = { open: true, color: "#bb6a70", text: "#FFF" };
    var notSelect = { open: false, color: "transparent", text: "#555555" };
    if (req === "all") {
      setAll(select);
      setNews(notSelect);
      setFix(notSelect);
    }
    if (req === "news") {
      setAll(notSelect);
      setNews(select);
      setFix(notSelect);
    }
    if (req === "fix") {
      setAll(notSelect);
      setNews(notSelect);
      setFix(select);
    }
  }

  return (
    <View style={[Styles.flex, Styles.al_center, Styles.FFF]}>
      <LinearGradient
        colors={["#f9f9f9", "#f9f9f9", "#f9f9f9"]}
        style={[Styles.al_center, Styles.w100, Styles.h100]}
      >
        <MainHeader name={LANG.notify_text_01} backto={backto} />
        <ScrollView style={[Styles.w100, Styles.p15]}>
          <View style={[Styles.row, Styles.w80, Styles.mr5]}>
            <TouchableOpacity
              onPress={() => changeTabs("all")}
              style={[
                {
                  width: "25%",
                  alignItems: "center",
                  backgroundColor: all.color,
                },
                Styles.p5,
                Styles.circle,
              ]}
            >
              <Text style={[Styles.mainFont, Styles.f_22, { color: all.text }]}>
                {LANG.notify_text_02}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeTabs("news")}
              style={[
                {
                  width: "25%",
                  alignItems: "center",
                  backgroundColor: news.color,
                },
                Styles.p5,
                Styles.circle,
              ]}
            >
              <Text
                style={[Styles.mainFont, Styles.f_22, { color: news.text }]}
              >
                {LANG.notify_text_03}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeTabs("fix")}
              style={[
                { alignItems: "center", backgroundColor: fix.color },
                Styles.p5,
                Styles.circle,
              ]}
            >
              <Text style={[Styles.mainFont, Styles.f_22, { color: fix.text }]}>
                {LANG.notify_text_04}
              </Text>
            </TouchableOpacity>
          </View>
          {all.open && <Allnotify notify={notify} />}
          {news.open && <Newsnotify notify={notify} />}
          {fix.open && <Fixnotify notify={notify} />}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Notify;
