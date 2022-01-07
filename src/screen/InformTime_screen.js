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
    const [informTime, setInformTime] = useRecoilState(Global.informTime)

    function selectInformTime(InformTime) {
        navigate.navigate('InformCalendar', { InformTime })
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                    Styles.FFF,
                ]}>
                <MainHeader name={'เลือกเวลา'} backto={'IncomeCalendar'} />
                {informTime.map((items) => (
                    <TouchableOpacity
                        onPress={() => selectInformTime(items.time)}
                        style={[Styles.w100, Styles.p15, Styles.FFF, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                        <Text style={[Styles.f_16, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                            {items.time}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default InformTime
