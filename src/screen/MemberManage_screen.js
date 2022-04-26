import * as React from "react";
import { View, Text } from "react-native";
import MainHeader from "../component/mainHeader";
import HomeList from "../component/MemberManage_component/HomeList";
import { useRecoilState } from "recoil";
import * as Global from "../globalState";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Styles } from "../styles";

export default function MemberManage() {
  const [home, setHome] = useRecoilState(Global.userProfile);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  return (
    <View style={[Styles.flex, Styles.al_center, Styles.FFF]}>
      <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={LANG.membermanage_text_01} backto={"Account"} />
        {home.me.unitsAllowHomecare && home.me.unitsAllowHomecare !== null ? (
          <HomeList homeList={home.me.unitsAllowHomecare} userProfile={home.me} />
        ): (<>
          <MaterialCommunityIcons name="home-search" size={120} color="#DDD" style={{marginTop: '30%'}}/>
          <Text style={[Styles.mainFont, Styles.f_22, Styles.gray_text, Styles.mt10]}>{LANG.myhome_text_06}</Text>
        </>)}
      </View>
    </View>
  );
}
