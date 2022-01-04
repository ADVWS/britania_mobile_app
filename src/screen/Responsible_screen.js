import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";

const Responsible = ({ route }) => {
    console.log('data:::', route)
    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'เจ้าหน้าที่ Homecare ที่เข้าตรวจสอบ'} backto={'InformOrder'} param={route.params.paramNav} />
                <ScrollView style={[Styles.w100]}>
                    {route.params.mechanic.map((item)=>(
                        <View style={[Styles.w100, Styles.p15, Styles.row]}>
                            <View style={[Styles.w35, Styles.jc_center]}>
                                <Image source={{uri: item.image}} style={[Styles.circle, { height: 110, width: 110 }]} />
                            </View>
                            <View style={[Styles.w80]}>
                                <Text style={[Styles.f_18, Styles.mainFont, Styles.mt5]}>
                                    ชื่อ-นามสกุล
                                </Text>
                                <Text style={[Styles.f_18, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                    {item.name}
                                </Text>
                                <View style={[Styles.w100, Styles.row, Styles.mt5]}>
                                    <View style={[Styles.w45]}>
                                        <Text style={[Styles.f_18, Styles.mainFont, Styles.mt5]}>
                                            เบอร์โทรศัพท์
                                        </Text>
                                        <Text style={[Styles.f_18, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                            {item.mobileno}
                                        </Text>
                                    </View>
                                    <View style={[Styles.w50]}>
                                        <Text style={[Styles.f_18, Styles.mainFont, Styles.mt5]}>
                                            LineID
                                        </Text>
                                        <Text style={[Styles.f_18, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                            {item.lineID}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default Responsible