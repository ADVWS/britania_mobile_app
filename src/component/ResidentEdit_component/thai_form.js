import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";

import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState"


export default function thai_form (item) {

    const callback = useRecoilState(Global.callbackEdit)


    console.log("ITEM:", callbackAccount)

        return (
            <View style={{marginBottom: 30}}>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_22,Styles.black_gray_text]}>ชื่อ-นามสกุล</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt10,Styles.textfieldbox]} value={item.item.name}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_22,Styles.black_gray_text]}>เลขประจำตัวประชาชน</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt10,Styles.textfieldbox]} value={item.item.identity}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_22,Styles.black_gray_text]}>เบอร์โทรศัพท์</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]} value={item.item.tel}></TextInput>
                </View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_22,Styles.black_gray_text]}>อีเมล์</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]} value={item.item.email}></TextInput>
                </View>
                <View style={Styles.al_center}>
                <TouchableOpacity style={[
                    Styles.w90,
                    Styles.row,
                    Styles.mt20,
                    Styles.confirm_btn
                ]}
                onPress={() => navigate.navigate('ResidentAddOTP')}>
                    <Text style={[Styles.white_text, Styles.f_24, Styles.mainFont, {marginLeft: '1%'}]}>
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
                ]}
                onPress={() => navigate.navigate('ResidentDetail', callback)}>
                    <Text style={[Styles.text_center,Styles.mainColor_text, Styles.f_24, Styles.mainFont, {marginLeft: '1%'}]}>
                        ยกเลิก
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
