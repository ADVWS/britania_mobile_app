import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Styles } from "../../styles";
import moment from "moment";
import Script from "../../script";

const InformTopic = ({data}) => {
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
                    เลขที่ซ่อม {data.id}
                </Text>
                <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                    จำนวน
                </Text>
                <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                    {data.order.length}
                </Text>
                <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                    วันที่และเวลาแจ้งซ่อม
                </Text>
                <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 15 }]}>
                    {moment.unix(data.informtime).format("DD/MM/YYYY HH:mm")}
                </Text>
            </View>
            <View style={[Styles.w50, Styles.al_end]}>
                {Script.statusTranform(data.status)}
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
                    {data.servicetime}
                </Text>
            </View>
        </View>
    );
}
export default InformTopic;