import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Styles } from "../../styles";

export default class InformTopic extends React.Component {
    render() {
        return (
            <View
                style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.FFF,
                    Styles.row,
                ]}>
                <View style={[Styles.w50]}>
                    <Text style={[Styles.mainColor_text, Styles.f_16, Styles.mainFont]}>
                        เลขที่ซ่อม 1100886
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                        จำนวน
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                        2
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                        วันที่และเวลาแจ้งซ่อม
                    </Text>
                    <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 15 }]}>
                        09/06/62 12.34 น.
                    </Text>
                </View>
                <View style={[Styles.w50, Styles.al_start]}>
                    <View style={[Styles.al_end, Styles.w100]}>
                        <View style={[Styles.circle, { backgroundColor: "#dbecfc" }]}>
                            <Text style={[Styles.f_16, Styles.mainFont_thin, { color: "#267bbf", marginLeft: 10, marginRight: 10 }]}>
                                อยู่ระหว่างดำเนินการ
                            </Text>
                        </View>
                    </View>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                        {' '}
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                        {' '}
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                        วันที่และเวลาที่เข้ารับบริการ
                    </Text>
                    <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 15 }]}>
                        12/06/62 10.00-11.00 น.
                    </Text>
                </View>
            </View>
        );
    }
}
