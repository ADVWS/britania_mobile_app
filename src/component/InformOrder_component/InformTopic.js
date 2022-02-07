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
import { useRecoilState } from "recoil";
import * as Global from "../../globalState"

const InformTopic = ({data}) => {
    const [LANG, setLANG] = useRecoilState(Global.Language)
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
                <Text style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont_x_db]}>
                    {LANG.homecare_text_07} {data.caseNumber}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                    {LANG.homecare_text_08}
                </Text>
                <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
                    {data.details.length}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                    {LANG.homecare_text_09}
                </Text>
                <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}>
                    {moment(data.createdAt).format("DD/MM/YY HH:mm")}
                </Text>
            </View>
            <View style={[Styles.w50, Styles.al_end]}>
                {Script.statusTranform(data.status)}
                <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                    {' '}
                </Text>
                <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
                    {' '}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                    {LANG.homecare_text_10}
                </Text>
                <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}>
                    {moment(data.checkInDate).format("DD/MM/YY")} {data.checkInRangeTime !== null ? data.checkInRangeTime.label : "-"}
                </Text>
            </View>
        </View>
    );
}
export default InformTopic;