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
import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../../globalState"

// const ResidentBtn = ({data})
const ResidentBtn = () => {

    const [dataListResident, setDataListResident] = useRecoilState(Global.dataListResident)

    return (
        <View>
            {dataListResident.map((item) => (
                <View style={[Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.FFF,Styles.al_center,Styles.mt10]}>
                    <View
                        style={[Styles.row]}>
                        <View style={[Styles.w50]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                                เบอร์โทรศัพท์
                            </Text>
                            <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 15 }]}>
                                {item.tel}
                            </Text>
                        </View>
                        <View>
                        <View>
                            {item.status === 'VERIFY' ? 
                            <View style={[Styles.w90]}>
                                <View style={[Styles.circle, { backgroundColor: "#fcf4d4" },Styles.al_center]}>
                                    <Text style={[Styles.f_16, Styles.mainFont, { color: "#f4910d", marginLeft: 10, marginRight: 10 }]}>
                                        ยังไม่เปิดการใช้งาน
                                    </Text>
                                </View>
                            </View> : null}
                            {item.status === 'ACTIVE' ? 
                            <View style={[Styles.w90]}>
                                <View style={[Styles.circle, { backgroundColor: "#dcfcf4" },Styles.al_center]}>
                                    <Text style={[Styles.f_16, Styles.mainFont, { color: "#3fc89b", marginLeft: 10, marginRight: 10 }]}>
                                        เปิดการใช้งานแล้ว
                                    </Text>
                                </View>
                            </View>
                             : null}
                            {/* {this.statusTranform(data.status)}
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                                {' '}
                            </Text>
                            <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                                {' '}
                            </Text> */}
                        </View>
                        <View style={[Styles.w100]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                                ชื่อ-นามสกุล
                            </Text>
                            <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                                {item.name}
                            </Text>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                                อีเมล
                            </Text>
                            <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                                {item.email}
                            </Text>
                        </View>
                        </View>
                    </View>
                    {
                        item.status === 'VERIFY' ?
                        <TouchableOpacity style={[
                            Styles.w100,
                            Styles.row,
                            Styles.mt10,
                            Styles.transparent,
                            Styles.al_center,
                            Styles.br_5,
                            Styles.border_btn,
                            Styles.p15,
                            Styles.jc_center
                        ]}>
                            <Text style={[Styles.text_center,Styles.mainColor_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                                กรอก OTP เพื่อเปิดใช้งาน
                            </Text>
                        </TouchableOpacity> : null
                    }
                    {
                        item.status === 'ACTIVE' ?
                        <View style={Styles.row}>
                        <TouchableOpacity style={[
                            Styles.w45,
                            Styles.row,
                            Styles.mt10,
                            Styles.transparent,
                            Styles.al_center,
                            Styles.br_5,
                            Styles.border_btn,
                            Styles.p15,
                            Styles.jc_center,
                        ]}>
                            <Text style={[Styles.text_center,Styles.mainColor_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                                ลบ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[
                            Styles.w45,
                            Styles.row,
                            Styles.mt10,
                            Styles.transparent,
                            Styles.al_center,
                            Styles.br_5,
                            Styles.border_btn,
                            Styles.p15,
                            Styles.jc_center,
                            Styles.ml5
                        ]}>
                            <Text style={[Styles.text_center,Styles.mainColor_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                                แก้ไข
                            </Text>
                        </TouchableOpacity>
                        </View>
                         : null
                    }
                </View>
            ))}
        </View>
    );
}
export default ResidentBtn;