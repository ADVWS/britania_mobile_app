import * as React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import { Styles } from "../styles";
import { AntDesign } from '@expo/vector-icons'; 
import MainHeader from "../component/mainHeader";

export default class LanguageSetting_Screen extends React.Component {
    render() {
        return (
            <View style={[Styles.flex, Styles.al_center,Styles.w100,Styles.h100,Styles.FFF]}>
                <MainHeader name={'ตั้งค่าภาษา / Language'} backto={'Account'}/>
                <TouchableOpacity style={[Styles.boxWithShadow, Styles.w90, Styles.p15, Styles.FFF, Styles.br_5, Styles.mt5, Styles.row]}>
                    <View style={[Styles.w90]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, {bottom: 3}]}>
                            ภาษาไทย
                        </Text>
                    </View>
                    <View style={[Styles.jc_center, Styles.al_end]}>
                    <AntDesign name="check" size={24} color="#f1645e"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.boxWithShadow, Styles.w90, Styles.p15, Styles.FFF, Styles.br_5, Styles.mt5, Styles.row]}>
                    <View style={[Styles.w90]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, {bottom: 3}]}>
                            English
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
