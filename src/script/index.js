import * as React from "react";
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
                <View style={[Styles.circle, { backgroundColor: "#fff6dd" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#d3a12f", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Checking':
            return (
                <View style={[Styles.circle, { backgroundColor: "#ffe7cb" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#e37626", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Assign':
            return (
                <View style={[Styles.circle, { backgroundColor: "#f2ffc5" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#91a322", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Reject':
            return (
                <View style={[Styles.circle, { backgroundColor: "#f4c7cc" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#782d36", marginLeft: 5, marginRight: 5 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Inprocess':
            return (
                <View style={[Styles.circle, { backgroundColor: "#dbefff" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#418dc8", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'ReInprocess':
            return (
                <View style={[Styles.circle, { backgroundColor: "#dbefff" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#418dc8", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Hold-Customer':
            return (
                <View style={[Styles.circle, { backgroundColor: "#ebe3fb" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#7b52d3", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Unapproved':
            return (
                <View style={[Styles.circle, { backgroundColor: "#ffe7cb" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#e37626", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Finish':
            return (
                <View style={[Styles.circle, { backgroundColor: "#d8fff1" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#4dcca3", marginLeft: 10, marginRight: 10 }]}>
                        {key}
                    </Text>
                </View>
            )
        case 'Close':
            return (
                <View style={[Styles.circle, { backgroundColor: "#d8fff1" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#4dcca3", marginLeft: 10, marginRight: 10 }]}>
                        {key}
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

const setTypeInform = (obj, LANG) => {
    const [caseType, setCaseType] = useRecoilState(Global.caseType)
    const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT)
    var index = caseType.map(function (e) { return e.id; }).indexOf(obj);
    return (LANGTEXT === 'TH' ? caseType[index].nameThai : LANG[`type_${caseType[index].seq}`])
}

const uploadImage = (token, file, cb) => {
    const url = 'https://btnconnectapi.myorigin.net/uploadImage';
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer 2b1QVM4xIxZ0JcKoPjJfWtOnfhcqwD4T',
            'x-token': token
        },
        body: file,
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return cb(data);
        })
        .catch(err => {
            cb(false);
            console.error(err);
        });
}

export default {
    statusTranform,
    callfunction,
    mapDataMycare,
    formatPhoneNumber,
    formatPhoneNumber2,
    recoilTranform,
    isEmptyObject,
    setTypeInform,
    uploadImage
}