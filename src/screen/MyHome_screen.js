import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Header from "../component/MyHome_component/Header";
import * as navigate from "../navigator/RootNavigation";
import {MaterialIcons} from "@expo/vector-icons";

import { Styles } from "../styles";
import TabBottom from "../navigator_footer";

export default function MyHome() {
    return (
        <View style={[Styles.flex, Styles.al_center, Styles.FFF]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <Header />
                <View style={[Styles.w100, Styles.p15, Styles.al_center]}>
                    <View style={[Styles.boxWithShadow, Styles.w100, { height: 250 }]}>
                        <Image source={require('../../assets/image/myhome.jpeg')} style={[Styles.h100, Styles.w100, Styles.br_5]} />
                    </View>
                    <Text style={[Styles.f_18, Styles.mainColor_text, Styles.mainFont, Styles.mt20, Styles.text_center]}>
                        BELGRAVIA Exclusive Pool Villa {'\n'} Bangna - Rama9
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont_thin, Styles.mt10, Styles.text_center]}>
                        CHAPEL - 5 ห้องนอน 6 ห้องน้ำ
                    </Text>
                    <View style={[Styles.w100, Styles.row]}>
                        <View style={[Styles.w50]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10, Styles.text_center, Styles.gray_text]}>
                                ที่ดินขนาด 90 ตร.วา
                            </Text>
                        </View>
                        <View style={[Styles.w50]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10, Styles.text_center, Styles.gray_text]}>
                                พื้นที่ใช้สอย 500 ตร.ม.
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>{navigate.navigate('Homecare')}} style={[Styles.boxWithShadow, Styles.w100, Styles.p10, Styles.FFF, Styles.br_5, Styles.mt20, Styles.row]}>
                        <View style={[Styles.w20, Styles.p10]}>
                            <Image source={require('../../assets/image/tool_icon.png')} style={[Styles.w100, { height: 45 }]} />
                        </View>
                        <View style={[Styles.w60, Styles.jc_center]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, Styles.ml5, {bottom: 3}]}>
                                แจ้งซ่อม
                            </Text>
                        </View>
                        <View style={[Styles.w20, Styles.jc_center, Styles.al_end]}>
                            <MaterialIcons name="arrow-forward-ios" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
