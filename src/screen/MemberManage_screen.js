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

import { Styles } from "../styles";

export default function Account() {
    const [home,setHome] = React.useState([
        {
            name: "BELGRAVIA Bangna - Rama9",
            address: "161/23"
        },
        {
            name: "BELGRAVIA Bangna Km 12",
            address: "485/34 (345)"
        },
        {
            name: "BELGRAVIA Bangna Km 12",
            address: "23/564 (343)"
        },
    ])
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
