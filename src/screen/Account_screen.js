import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavBtn from "../component/Account_component/NavBtn"
import AccountHeader from "../component/Account_component/AccountHeader"
import ProfilePicName from "../component/Account_component/ProfilePicName"
import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../styles";
//transparent f1645e

export default function Account() {

    //Profile Data
    const [profile, setProfile] = React.useState([
        {
            image: require('../../assets/image/profpic/SampleProf.jpg'),
            first_name: "ณัฏฐณิชชา",
            last_name: "กฤษศิริสวัสดิ์"
        }
    ])

    const [option, setOptions] = React.useState([
        {
            name: "ข้อมูลส่วนตัว",
            nav: "Profile"
        },
        {
            name: "จัดการข้อมูลผุ้อยู่อาศัย/ผู้เช่า",
            nav: ""
        },
        {
            name: "ตั้งค่าภาษา / Language",
            nav: "Language"
        },
        {
            name: "นโยบายความเป็นส่วนตัว",
            nav: ""
        },
        {
            name: "Call Center",
            nav: ""
        },
        {
            name: "ออกจากระบบ",
            nav: ""
        },
    ])


    return (
        <LinearGradient
            colors={["#fbd4d4", "#FFF"]}
            style={[Styles.flex, Styles.al_center]}>
            <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100,]}>
                <AccountHeader />
                <View style={[{ marginRight: "10%" }]}>
                    <ProfilePicName profile={profile} />
                </View>
                <View style={Styles.mt20}>
                    <NavBtn option={option} />
                </View>
            </View>
            <Text style={[Styles.mainFont, Styles.mb10]}>Version 1.0.0</Text>
        </LinearGradient>
    );
}
