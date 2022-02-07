import * as React from "react";
import { View } from "react-native";
import MainHeader from "../component/mainHeader";
import HomeList from "../component/MemberManage_component/HomeList";
import { useRecoilState } from "recoil";
import * as Global from "../globalState";

import { Styles } from "../styles";

export default function MemberManage() {
  const [home, setHome] = useRecoilState(Global.userProfile);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  console.log("HOME:");
  console.log(home);
  return (
    <View style={[Styles.flex, Styles.al_center, Styles.FFF]}>
      <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={LANG.membermanage_text_01} backto={"Account"} />
        {home.me.unitsOwner && (
          <HomeList homeList={home.me.unitsOwner} userProfile={home.me} />
        )}
      </View>
    </View>
  );
}
