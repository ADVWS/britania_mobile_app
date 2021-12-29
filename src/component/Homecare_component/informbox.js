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
import Script from "../../script";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";

export default class InformBox extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={()=> navigate.navigate('InformOrder')} 
                style={[
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
                        เลขที่ซ่อม {this.props.data.id}
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                        จำนวน
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                        {this.props.data.order.length}
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                        วันที่และเวลาแจ้งซ่อม
                    </Text>
                    <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 15 }]}>
                        {moment.unix(this.props.data.informtime).format('DD/MM/YYYY HH:mm น.')}
                    </Text>
                </View>
                <View style={[Styles.w50, Styles.al_end]}>
                    {Script.statusTranform(this.props.data.status)}
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
                        {this.props.data.servicetime}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
