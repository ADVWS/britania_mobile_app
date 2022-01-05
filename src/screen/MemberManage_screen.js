import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import MainHeader from "../component/mainHeader";
import HomeList from "../component/MemberManage_component/HomeList";
import { useRecoilState } from "recoil";
import * as Global from "../globalState"

import { Styles } from "../styles";

export default function MemberManage() {
    const [home,setHome] = useRecoilState(Global.dataMyproject)
    console.log("HOME:")
    console.log(home)
    return (
        <View
            style={[Styles.flex, Styles.al_center,Styles.FFF]}>
                <View style={[Styles.flex, Styles.al_center,Styles.w100,Styles.h100,]}>
                        <MainHeader name={'จัดการข้อมูลผู้อยู่อาศัย/ผู้เช่า'} backto={'Account'}/>
                        <HomeList homeList={home} />
                </View>
        </View>
    );
}
