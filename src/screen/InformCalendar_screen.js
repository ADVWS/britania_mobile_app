import * as React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import CalendarPicker from 'react-native-calendar-picker';

import * as Global from "../globalState"

import { Styles } from "../styles";
import mainScript from "../script" 
import Script from "../script/makeCase_script" 
import Key from "../KEYS.json"

import MainHeader from "../component/mainHeader";
import moment from "moment";
import Modal_confirm_2 from "../component/modal_confirm_2";


const InformCalendar = ({ route }) => {
    const informStatus = ['Pending', 'Checking', 'Assign', 'Reject', 'ReInprocess', 'Hold-Customer', 'Unapproved']
    const historyStatus = ['Finish', 'Close']
    const [minDate, setMindate] = React.useState(moment().startOf('day'))

    const [selectDate, setSelectDate] = React.useState(moment())
    const [confirmBox, setConfirmBox] = React.useState(false)
    const [unitOwner, setUnitOwner_] = useRecoilState(Global.unitOwner)
    console.log('Check route', selectDate)

    const [time, setTime] = useRecoilState(Global.checkInTime)
    const [newInform, setNewInform] = useRecoilState(Global.newInform)
    const [dataMyHome, setDataMyHome] = useRecoilState(Global.dataMyHome)
    const [thisDataMyProject, setThisDataMyProject] = useRecoilState(Global.dataMyproject)
    const [listInform, setDataListInform] = useRecoilState(Global.dataListInform)

    const [defaultTime, setDefaultTime] = React.useState({
        name: time[0].name,
        value: time[0].value
    })

    const setListInform = useSetRecoilState(Global.dataListInform)
    const setlistHistory = useSetRecoilState(Global.dataListHistory)

    const addMyHome = useSetRecoilState(Global.dataMyHome)
    const addMyProject = useSetRecoilState(Global.dataMyproject)

    const informSet = newInform

    React.useEffect(() => {
        if (route.params) {
            setDefaultTime(route.params.InformTime)
        }
    }, []);
    function settimeInform() {
        if (route.params) {
            return route.params.name
        } else {
            return defaultTime.name
        }
    }

    function onDateChange(date) {
        var dateInform = moment()
        setSelectDate(dateInform)
    }

    function confirmData() {
        if(route.params){
            var selectTime = route.params.value
        } else {
            var selectTime = defaultTime.value
        }
        if(selectDate !== ''){
            var inform = []
            var history = []
            var dataset = mainScript.recoilTranform(informSet)
            dataset = mainScript.recoilTranform(newInform)
            dataset.unitOwnerId = unitOwner.id
            dataset.checkInRangeTime = String(selectTime)
            dataset.checkInDate = selectDate
            var detailTemp = ''
            dataset.details.map((item)=>{
                console.log(item.file)
                detailTemp += 
                    `{
                        categoryId: "${item.categoryId}"
                        description: "${item.description}"
                        files: ${item.file.length === 0 ? '[]': item.file}
                    }`
            })
            detailTemp += ''
            dataset.details = JSON.stringify(dataset.details)
            console.log('dataset', moment(dataset.selectDate).format('DD/MM/YYYY HH:mm:sss'))
            console.log('dataset', dataset)
            Script.homecareCreateCase(Key.TOKEN, detailTemp, dataset, unitOwner.id, (res)=>{
                console.log('DATA SORT', res)
                if(res.homecareAllCase && res.homecareAllCase !== null){
                    res.homecareAllCase.map((item)=>{
                        if(informStatus.indexOf(item.status) !== -1){
                            if(item.details.length > 0){
                                inform.push(item)
                            }
                        } else if(historyStatus.indexOf(item.status) !== -1) {
                            if(item.details.length > 0){
                                history.push(item)
                            }
                        }
                    })
                    setListInform(inform)
                    setlistHistory(history)
                    setConfirmBox(true)
                    //navigate.navigate('Homecare')
                }
            })
        }

    }

    function confirm() {
        navigate.navigate("Homecare")
    }

    return (
        <>
            {!confirmBox &&
                <View style={[Styles.flex, Styles.al_center]}>
                    <View
                        style={[
                            Styles.al_center,
                            Styles.w100,
                            Styles.h100
                        ]}>
                        <MainHeader name={'เลือกวันที่และเวลา'} backto={'InformContact'} informSet={informSet} />
                        <ScrollView style={[Styles.w100, Styles.flex, Styles.FFF]}>
                            <View style={[Styles.w100, Styles.p15]}>
                                <Text style={[Styles.f_24, Styles.mainFont, Styles.mt5]}>
                                    เลือกวันที่รับบริการ
                                </Text>
                            </View>
                            <View style={[Styles.w100, Styles.p10, { backgroundColor: "#ffecec" }]}>
                                <CalendarPicker
                                    minDate={minDate}
                                    previousTitle={<MaterialIcons name="arrow-back-ios" size={18} />}
                                    nextTitle={<MaterialIcons name="arrow-forward-ios" size={18} />}
                                    weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                                    todayBackgroundColor="#f1645e"
                                    todayTextStyle={{ color: "#000" }}
                                    selectedDayStyle={{ backgroundColor: "#f1645e" }}
                                    selectedDayTextColor="#FFF"
                                    textStyle={[Styles.mainFont_x, Styles.f_20]}
                                    yearTitleStyle={[Styles.mainFont, Styles.f_22]}
                                    monthTitleStyle={[Styles.mainFont, Styles.f_22]}
                                    disabledDatesTextStyle={[Styles.f_26]}
                                    onDateChange={(val) => onDateChange(val)}
                                />
                            </View>
                            <View style={[Styles.w100, Styles.p15]}>
                                <Text style={[Styles.f_24, Styles.mainFont, Styles.mt10]}>
                                    เลือกเวลา
                                </Text>
                                <Text style={[Styles.f_24, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                    {settimeInform()}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigate.navigate('InformTime')}
                                    style={[Styles.w100, Styles.p10, Styles.br_5, Styles.mt10, Styles.mb5, { borderColor: "#f1645e", borderWidth: 1.5 }]}>
                                    <Text style={[Styles.f_24, Styles.mainColor_text, Styles.mainFont, Styles.text_center]}>
                                        เลือกเวลา
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => confirmData()}
                                    style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt10, Styles.mt100, Styles.mainColor]}>
                                    <Text style={[Styles.f_24, Styles.white_text, Styles.mainFont, Styles.text_center]}>
                                        ยืนยัน
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            }
            <Modal isVisible={confirmBox} style={Styles.al_center} backdropOpacity={0.5} >
                <Modal_confirm_2 text={'เจ้าหน้าที่ Homecare จะติดต่อกลับเพื่อยืนยันนัดหมายภายในวันทำการถัดไป'} confirmFunction={confirm} />
            </Modal>
        </>
    );
}

export default InformCalendar
