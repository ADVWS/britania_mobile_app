import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";
import CalendarPicker from 'react-native-calendar-picker';

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";
import moment from "moment";


const InformCalendar = ({ route }) => {
    const [minDate, setMindate] = React.useState(moment().startOf('day'))
    const [defaultTime, setDefaultTime] = React.useState("9.00 น.")

    React.useEffect(() => {
        console.log('TIME', route)
        if(route.params){
            setDefaultTime(route.params.InformTime)
        }
      }, []);

    function onDateChange(date) {
        console.log(date)
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'เลือกวันที่และเวลา'} backto={'InformContact'} />
                <ScrollView style={[Styles.w100, Styles.flex, Styles.FFF]}>
                    <View style={[Styles.w100, Styles.p15]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.mt5]}>
                            เลือกวันที่รับบริการ
                        </Text>
                    </View>
                    <View style={[Styles.w100, Styles.p10, { backgroundColor: "#ffecec" }]}>
                        <CalendarPicker
                            minDate={minDate}
                            previousTitle={<MaterialIcons name="arrow-back-ios" size={18} />}
                            nextTitle={<MaterialIcons name="arrow-forward-ios" size={18} />}
                            weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                            todayBackgroundColor="transparent"
                            todayTextStyle={{ color: "#000" }}
                            selectedDayStyle={{ backgroundColor: "#f1645e" }}
                            selectedDayTextColor="#FFF"
                            onDateChange={onDateChange()}
                        />
                    </View>
                    <View style={[Styles.w100, Styles.p15]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10]}>
                            เลือกเวลา
                        </Text>
                        <Text style={[Styles.f_14, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                            {defaultTime}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>  navigate.navigate('InformTime')}
                            style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt10, Styles.mb5, { borderColor: "#f1645e", borderWidth: 1.5 }]}>
                            <Text style={[Styles.f_16, Styles.mainColor_text, Styles.mainFont, Styles.text_center]}>
                                เลือกเวลา
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Addmore()}
                            style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt10, Styles.mt100, Styles.mainColor]}>
                            <Text style={[Styles.f_16, Styles.white_text, Styles.mainFont, Styles.text_center]}>
                                ยืนยัน
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default InformCalendar
