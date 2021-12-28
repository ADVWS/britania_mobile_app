import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";

const thisMyproject = [
    {
        name: 'Belgravia Bangna - Rama9',
        homeNo: '162/23'
    },
    {
        name: 'Britania Bangna Km 12',
        homeNo: '485/34 (345)'
    },
    {
        name: 'Britania Bangna Km 12',
        homeNo: '23/564 (343)'
    },
    {
        name: 'Britania Bangna Km 12',
        homeNo: '165/43 (405)'
    }
]

export default function MyProject() {
    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                    Styles.FFF,
                ]}>
                <MainHeader name={'โครงการของฉัน'} backto={'Homecare'} />
                {thisMyproject.map((items) => (
                    <TouchableOpacity style={[Styles.w100, Styles.p15, Styles.FFF, {borderBottomWidth: 0.5, borderColor: "#DDD"}]}>
                        <View style={[Styles.w80]}>
                            <Text style={[Styles.f_18, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                                {items.name}
                            </Text>
                            <Text style={[Styles.f_16, Styles.black_gray_text, Styles.mainFont_thin, Styles.mt5]}>
                                บ้านเลขที่ {items.homeNo}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
