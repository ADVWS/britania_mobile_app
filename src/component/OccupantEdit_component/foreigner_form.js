import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DatePicker from 'react-native-datepicker';

import { Styles } from "../../styles";

export default class foreigner_form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : ''
        };
    }
    render() {
        return (
            <View style={{marginBottom: 30}}>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>ชื่อ-นามสกุล</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt10,Styles.textfieldbox]}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>หมายเลขหนังสือเดินทาง</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt10,Styles.textfieldbox]}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>เบอร์โทรศัพท์</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>อีเมล์</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>วันที่สิทธิ์หมดอายุ</Text>
                <View style={Styles.al_center}>
                    {/* <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]}></TextInput> */}
                <DatePicker
                    style={[Styles.w90,Styles.mt5,Styles.textfieldbox]}
                    date={this.state.date} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="เลือกวันที่"
                    format="DD-MM-YYYY"
                    minDate="01-01-1970"
                    maxDate="01-01-2500"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                        width : 0,
                        height : 0
                        },
                        dateInput: {
                        marginLeft: 0,
                        },
                    }}
                    onDateChange={(date) => {
                        this.setState({ date : date})
                    }}
                    />
                </View>
                <View style={Styles.al_center}>
                <TouchableOpacity style={[
                    Styles.w90,
                    Styles.row,
                    Styles.mt20,
                    Styles.confirm_btn
                ]} onPress={() => navigate.navigate('OccupantAddOTP')}>
                    <Text style={[Styles.white_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                        บันทึก
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    Styles.w90,
                    Styles.row,
                    Styles.mt10,
                    Styles.transparent,
                    Styles.al_center,
                    Styles.br_5,
                    Styles.border_btn,
                    Styles.p15,
                    Styles.jc_center
                ]} onPress={() => navigate.navigate('MemberManageIndivi')}>
                    <Text style={[Styles.text_center,Styles.mainColor_text, Styles.f_18, Styles.mainFont, {marginLeft: '1%'}]}>
                        ยกเลิก
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
