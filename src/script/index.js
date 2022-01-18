import {
    View,
    Text,
} from "react-native";
import { Styles } from "../styles";

import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../globalState"

export function statusTranform(key) {
    switch (key) {
        case 3:
            return (
                <View style={[Styles.circle, { backgroundColor: "#fcf4d4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#f4910d", marginLeft: 10, marginRight: 10 }]}>
                        รอนัดหมาย
                    </Text>
                </View>
            )
        case 4:
            return (
                <View style={[Styles.circle, { backgroundColor: "#dbecfc" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#267bbf", marginLeft: 10, marginRight: 10 }]}>
                        อยู่ระหว่างดำเนินการ
                    </Text>
                </View>
            )
        case 5:
            return (
                <View style={[Styles.circle, { backgroundColor: "#dcfcf4" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#3fc89b", marginLeft: 10, marginRight: 10 }]}>
                        สำเร็จ
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

export default {
    statusTranform,
    callfunction,
    mapDataMycare,
    formatPhoneNumber,
    formatPhoneNumber2
}