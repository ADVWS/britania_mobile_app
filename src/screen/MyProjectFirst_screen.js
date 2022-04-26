import * as React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useSetRecoilState, useRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";
import * as Global from "../globalState"

import { Styles } from "../styles";

const MyProjectFirst = () => {

    const [userProfile, setUserProfile_] = useRecoilState(Global.userProfile)
    const setUnitOwner = useSetRecoilState(Global.unitOwner)

    function setDataSelect(obj) {
        setUnitOwner(obj)
        navigate.navigate('MyHome')
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                    Styles.mainColor2,
                ]}>
                <View
                    style={[
                        Styles.w100,
                        Styles.h15,
                        Styles.row,
                        Styles.mainColor2,
                        Styles.mainColorF9,
                        Styles.mb5,
                    ]}>
                    <View
                        style={[Styles.w90, Styles.al_start, Styles.jc_end, { bottom: 8 }]}>
                        <Text
                            style={[
                                Styles.mainColor_text3,
                                Styles.bbb_text,
                                Styles.mainFont_x,
                                Styles.ml5,
                                { top: 2, fontSize: 34 },
                            ]}>
                            โครงการของฉัน
                        </Text>
                    </View>
                </View>
                <ScrollView style={[Styles.w100, Styles.p15]}>
                    {userProfile.me.unitsAllowHomecare.map((items) => (
                        <TouchableOpacity
                            onPress={() => setDataSelect(items)}
                            style={[Styles.w100, Styles.p15, Styles.FFF, Styles.boxWithShadow, Styles.br_5, Styles.row]}>
                            <View style={[Styles.w90]}>
                                <Text style={[Styles.f_24, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                                    {items.projectName}
                                </Text>
                                <Text style={[Styles.f_22, Styles.mainFont_x, Styles.mt5, { color: "#8f8f8f" }]}>
                                    บ้านเลขที่ {items.houseNumber}
                                </Text>
                            </View>
                            <View style={[Styles.w10, Styles.al_center, Styles.jc_center]}>
                                <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.black_gray_text} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default MyProjectFirst
