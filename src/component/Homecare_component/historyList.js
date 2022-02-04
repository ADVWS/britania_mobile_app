import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import moment from 'moment';
import 'moment/locale/th';
import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import Script from "../../script";
import { Styles } from "../../styles";
import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../../globalState"

const HistoryList = () => {
    const [listHistory, setlistHistory] = useRecoilState(Global.dataListHistory)
    const [historyDetail, setHistoryDetail] = useRecoilState(Global.dataInformDetail)
    const gobalData = useSetRecoilState(Global.dataInformDetail)
    function viewDetailOrder(data) {
        gobalData(data)
        var paramNav = 'SUCCESS'
        setTimeout(() => {
          navigate.navigate('InformOrder', {paramNav})
        }, 100);
    }

    return (
        <View style={[Styles.w100, Styles.p15]}>
            {listHistory.map((item) => (
                <TouchableOpacity 
                onPress={()=>viewDetailOrder(item)}
                style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.FFF,
                    Styles.boxWithShadow,
                    Styles.row,
                    Styles.mt10
                ]}>
                    <View style={[Styles.w50]}>
                        <Text style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont_x_db]}>
                            เลขที่ซ่อม {item.caseNumber}
                        </Text>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                            จำนวน
                        </Text>
                        <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
                            {item.details.length}
                        </Text>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                            วันที่และเวลาแจ้งซ่อม
                        </Text>
                        <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}>
                            {moment(item.createdAt).format('DD/MM/YY HH:mm น.')}
                        </Text>
                    </View>
                    <View style={[Styles.w50, Styles.al_end]}>
                        {Script.statusTranform(item.status)}
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                            {' '}
                        </Text>
                        <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
                            {' '}
                        </Text>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                            วันที่และเวลาที่เข้ารับบริการ
                        </Text>
                        <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}>
                            {moment(item.createdAt).format('DD/MM/YY')} {item.checkInRangeTime.label}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}
export default HistoryList;