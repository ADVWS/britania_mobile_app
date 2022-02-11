import * as React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import Store from '../../store';
import Script from '../../script/Notification_script';
import Key from '../../KEYS.json'
import { useRecoilState } from "recoil";
import * as Global from "../../globalState"

var screen = "HomeDetail"
const Header = () => {
    const [counter, setCounter] = React.useState('-')
    const [userType, setUserType] = useRecoilState(Global.userType)
    const setCountNotify = () => {
        Store.getLocalStorege(Key.TOKEN, (tk) => {
            const token = tk.detail.token
            Script.notificationCountUnread(token, (res) => {
                setCounter(res)
            })
        })
    }
    function setNotify() {
        if (userType !== 1) {
            return (
                <TouchableOpacity disabled={true} onPress={() => navigate.navigate("Notify", { screen })}>
                    <MaterialIcons name="notifications-none" size={30} color={'#000'} />
                </TouchableOpacity>)
        } else {
            return (
                <TouchableOpacity onPress={() => navigate.navigate("Notify", { screen })}>
                    <MaterialIcons name="notifications-none" size={30} color={'#555555'} />
                    {counter !== '-' && counter !== 0 &&
                        <View style={{ backgroundColor: "red", borderRadius: 100, height: 25, width: 25, position: 'absolute', top: -12, left: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#f9f9f9', fontSize: 12 }}>{setCountNotify()}{counter}</Text>
                        </View>
                    }
                </TouchableOpacity>)
        }
    }
    return (
        <View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20, Styles.mainColor2,Styles.mb5]}>
            <View style={[Styles.w20]} />
            <View style={[Styles.w60, Styles.al_center, Styles.jc_end, { bottom: 5 }]}>
                <Image
                    source={require("../../../assets/image/logo-header.png")}
                    style={[Styles.w70, { tintColor: '#555555', height: '32%' }]}
                />
            </View>
            <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
                {setNotify()}
            </View>
        </View>
    );
}

export default Header