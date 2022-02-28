import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";


const InformTime = () => {
    const [time, setTime] = useRecoilState(Global.checkInTime)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const [defaultTime, setDefaultTime] = React.useState({
        name: time[0].name,
        value: time[0].value
    })
    function selectInformTime(InformTime) {
        console.log('InformTime', InformTime)
        navigate.navigate('InformCalendar', InformTime)
    }
    var paramNav

    console.log(time[0])

    return (
        <View style={[Styles.flex, Styles.al_center, Styles.mainColorF9]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                    Styles.mainColorF9,
                ]}>
                <MainHeader name={LANG.informcalendar_text_03} backto={'InformCalendar'} defaultTime={defaultTime}/>
                {time.map((items) => (
                    <TouchableOpacity
                        onPress={() => selectInformTime(items)}
                        style={[Styles.w100, Styles.p15, Styles.mainColorF9, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                        <Text style={[Styles.f_22, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                            {items.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default InformTime
