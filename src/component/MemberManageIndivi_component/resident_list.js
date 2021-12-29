import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Styles } from "../../styles";

export default class HistoryList extends React.Component {
    render() {
        return (
            <View style={[Styles.w100, Styles.p15,{backgroundColor : "#EEEEEE"}]}>
                <TouchableOpacity style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.al_center,
                    Styles.jc_center,
                    Styles.mainColor,
                    Styles.boxWithShadow,
                    Styles.row
                ]}>
                    <MaterialIcons name="add" size={25} color={"#FFF"}/> 
                    <Text style={[Styles.white_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                        เพิ่มผู้อาศัยร่วม
                    </Text>
                </TouchableOpacity>
                <View style={[Styles.al_center,Styles.p40,Styles.mt30]}>
                <MaterialCommunityIcons name="account-group-outline" size={70} color="#c5c5c5" />
                <Text style={[Styles.gray_text,Styles.mainFont]}>
                    ไม่มีผู้อาศัยร่วม
                </Text>
                </View>
            </View>
        );
    }
}
