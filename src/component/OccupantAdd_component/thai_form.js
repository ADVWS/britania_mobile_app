import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";

import { Styles } from "../../styles";
import * as Global from "../../globalState";
import { useSetRecoilState, useRecoilState } from "recoil";
import * as navigate from "../../navigator/RootNavigation";
import mainScript from "../../script";
import Script from "../../script/OccupantAdd_script";
import KEYS from "../../KEYS.json"

export default function thai_form(unit) {
  console.log('user', unit)
  const [rawDate, setRawDate] = React.useState('');
  const [name, setName] = React.useState('')
  const [idcard, setIdcard] = React.useState('')
  const [mobileNo, setMobileNo] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const setUnitMember = useSetRecoilState(Global.unitMember);
  const addData = () => {
    var add = {
      unitId: unit.unit.unitId,
      ownerType: "tenant",
      nationType: "thai",
      passport: null,
      name: name,
      idcard: idcard,
      mobileNo: mobileNo,
      email: email,
      expiredDate: rawDate
    }
    Script.memberAddProflie_thai(add, KEYS.TOKEN, unit.unit.id, (res)=>{
      console.log(res)
      if(typeof res === 'object'){
        var data = mainScript.recoilTranform(unitMember)
        data.unitMember = res.unitUpdate
        var otp = res.otp
        otp.mobileNo = mobileNo
        otp.name = name
        otp.unitId = unit.unit.unitId
        setUnitMember(data)
        navigate.navigate("OccupantAddOTP", otp)
      }
    })
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        ชื่อ-นามสกุล
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
          ]}
          onChangeText={(val)=>{
            setName(val)
          }}
        />
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        เลขประจำตัวประชาชน
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt10,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
          ]}
          onChangeText={(val)=>{
            setIdcard(val)
          }}
        />
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        เบอร์โทรศัพท์
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
          ]}
          onChangeText={(val)=>{
            setMobileNo(val)
          }}
        />
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}>
        อีเมล
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[
            Styles.w90,
            Styles.mt5,
            Styles.textfieldbox,
            Styles.f_20,
            Styles.mainFont_x,
          ]}
          onChangeText={(val)=>{
            setEmail(val)
          }}
        />
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_22,
          Styles.black_gray_text,
        ]}
      >
        วันที่สิทธิ์หมดอายุ
      </Text>
      <View style={Styles.al_center}>
        {/* <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]}></TextInput> */}
        <DatePicker
          style={[Styles.w90, Styles.mt5, Styles.textfieldbox]}
          //date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="เลือกวันที่"
          format="DD-MM-YYYY"
          minDate="01-01-1970"
          maxDate="01-01-2500"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: "none",
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
              width: 0,
              height: 0,
            },
            dateInput: {
              marginLeft: 0,
            },
          }}
          onDateChange={(datein) => {
            var newDate = datein.split("-");
            newDate = `${newDate[2]}-${newDate[1]}-${newDate[0]}`
            setRawDate(newDate);
          }}
        />
      </View>

      <View style={Styles.al_center}>
        <TouchableOpacity
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
          onPress={() => addData()}
        >
          <Text
            style={[
              Styles.white_text,
              Styles.f_24,
              Styles.mainFont,
              { marginLeft: "1%" },
            ]}
          >
            บันทึก
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.w90,
            Styles.row,
            Styles.mt10,
            Styles.transparent,
            Styles.al_center,
            Styles.br_5,
            Styles.border_btn,
            Styles.p15,
            Styles.jc_center,
          ]}
          onPress={() => navigate.navigate("OccupantDetail", member)}
        >
          <Text
            style={[
              Styles.text_center,
              Styles.mainColor_text,
              Styles.f_24,
              Styles.mainFont,
              { marginLeft: "1%" },
            ]}
          >
            ยกเลิก
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
