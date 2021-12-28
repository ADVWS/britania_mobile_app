import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../../styles";

export default class InformList extends React.Component {
    render() {
        return (
            <View style={[Styles.w100, Styles.p15]}>
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
                        เพิ่มรายการแจ้งซ่อม
                    </Text>
                </TouchableOpacity>
                <View style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.FFF,
                    Styles.boxWithShadow,
                    Styles.row,
                    Styles.mt20
                ]}>
                    <View style={[Styles.w50]}>
                        <Text style={[Styles.mainColor_text, Styles.f_16, Styles.mainFont]}>
                            เลขที่ซ่อม 1100886
                        </Text>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                            จำนวน
                        </Text>
                        <Text style={[Styles.f_16, Styles.mainFont, {color: "#8f8f8f"}]}>
                            2
                        </Text>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                            วันที่และเวลาแจ้งซ่อม
                        </Text>
                        <Text style={[Styles.mainFont, {color: "#8f8f8f", fontSize: 15}]}>
                            09/06/62 12.34 น.
                        </Text>
                    </View>
                    <View style={[Styles.w50, Styles.al_end]}>
                        <View style={[Styles.circle, {backgroundColor: "#fcf4d4"}]}>
                            <Text style={[Styles.f_16, Styles.mainFont_thin,{color: "#f4910d", marginLeft: 10, marginRight: 10}]}>
                                รอนัดหมาย
                            </Text>
                        </View>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                            {' '}
                        </Text>
                        <Text style={[Styles.f_16, Styles.mainFont, {color: "#8f8f8f"}]}>
                        {' '}
                        </Text>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                            วันที่และเวลาที่เข้ารับบริการ
                        </Text>
                        <Text style={[Styles.mainFont, {color: "#8f8f8f", fontSize: 15}]}>
                            12/06/62 10.00-11.00 น.
                        </Text>
                    </View>
                </View>               
            </View>
        );
    }
}
