import {
    View,
    Text,
} from "react-native";
import { Styles } from "../styles";

import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../globalState"

export function statusTranform(key) {
    switch (key) {
        case 'Pending':
            return (
                <View style={[Styles.circle, { backgroundColor: "#fcf4d4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#f4910d", marginLeft: 10, marginRight: 10 }]}>
                        รับเรื่องแจ้งซ่อม
                    </Text>
                </View>
            )
        case 'Checking':
            return (
                <View style={[Styles.circle, { backgroundColor: "#fcf4d4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#f4910d", marginLeft: 10, marginRight: 10 }]}>
                        เข้าตรวจสอบหน้างาน
                    </Text>
                </View>
            )
        case 'Assign':
            return (
                <View style={[Styles.circle, { backgroundColor: "#fcf4d4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#f4910d", marginLeft: 10, marginRight: 10 }]}>
                        รอเข้าซ่อม
                    </Text>
                </View>
            )
        case 'Reject':
            return (
                <View style={[Styles.circle, { backgroundColor: "#f4c7cc" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#782d36", marginLeft: 5, marginRight: 5 }]}>
                        ไม่อยู่ในเงื่อนไขการรับประกัน
                    </Text>
                </View>
            )
        case 'Inprocess':
            return (
                <View style={[Styles.circle, { backgroundColor: "#c4e4f9" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#267bbf", marginLeft: 10, marginRight: 10 }]}>
                        อยู่ในระหว่างการซ่อม
                    </Text>
                </View>
            )
        case 'ReInprocess':
            return (
                <View style={[Styles.circle, { backgroundColor: "#dbecfc" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#267bbf", marginLeft: 10, marginRight: 10 }]}>
                        ซ่อมซ้ำ
                    </Text>
                </View>
            )
        case 'Hold-Customer':
            return (
                <View style={[Styles.circle, { backgroundColor: "#fcf4d4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#f4910d", marginLeft: 10, marginRight: 10 }]}>
                        ลูกบ้านยังไม่สะดวก
                    </Text>
                </View>
            )
        case 'Unapproved':
            return (
                <View style={[Styles.circle, { backgroundColor: "#fcf4d4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#f4910d", marginLeft: 10, marginRight: 10 }]}>
                        รายการแจ้งซ่อมรออนุมัติ
                    </Text>
                </View>
            )
        case 'Finish':
            return (
                <View style={[Styles.circle, { backgroundColor: "#dcfcf4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#3fc89b", marginLeft: 10, marginRight: 10 }]}>
                        เสร็จสิ้น
                    </Text>
                </View>
            )
        case 'Close':
            return (
                <View style={[Styles.circle, { backgroundColor: "#DDD" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#FFF", marginLeft: 10, marginRight: 10 }]}>
                        ปิดงาน
                    </Text>
                </View>
            )
        default:
            return (<></>)
    }
}

export function callfunction(key, param, cb) {
    switch (key) {
        case 'mapDataMycare':
            console.log('mapDataMycare')
            mapDataMycare(param, cb)
            break;
        default:
            break;
    }
}

const mapDataMycare = (param, cb) => {
    console.log('start')
    const setListInform = useSetRecoilState(Global.dataListInform)
    const setlistHistory = useSetRecoilState(Global.dataListHistory)
    var inform = []
    var history = []
    param.inform.map((item) => {
        if (item.inform) {
            for (let i = 0; i < item.inform.length; i++) {
                if (item.inform[i].status !== 5) {
                    inform.push(item.inform[i])
                } else {
                    history.push(item.inform[i])
                }
            }
        }
        if (item.inform.status !== 5) {
            inform.push(item.inform)
        } else {
            history.push(item.inform)
        }
    })
    setListInform(inform)
    setlistHistory(history)
    var res = {
        inform: inform,
        history: history
    }
    cb(res)
}

const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3];
    }
    return null;
}

const formatPhoneNumber2 = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return null;
}

const recoilTranform = (data) => {
    var tranform = data
    tranform = JSON.stringify(tranform)
    tranform = JSON.parse(tranform)
    return tranform
}

const isEmptyObject = (obj) => {
    if (JSON.stringify(obj) === '{}') {
        return null
    } else {
        return obj
    }
}

export default {
    statusTranform,
    callfunction,
    mapDataMycare,
    formatPhoneNumber,
    formatPhoneNumber2,
    recoilTranform,
    isEmptyObject
}