import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import * as navigate from "../../navigator/RootNavigation";
import * as Global from "../../globalState";

import { useSetRecoilState, useRecoilState } from "recoil";

import { Styles } from "../../styles";

export default function foreigner_form(item) {
  const [date, setDate] = React.useState(
    moment.unix(item.item.expire).format("DD-MM-YYYY")
  );
  const callback = useRecoilState(Global.callbackAccount);

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
          value={item.item.name}
        ></TextInput>
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
        หมายเลขหนังสือเดินทาง
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
          value={item.item.identity}
        ></TextInput>
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
          value={item.item.tel}
        ></TextInput>
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
        อีเมล์
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
          value={item.item.email}
        ></TextInput>
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
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="เลือกวันที่"
          format="DD-MM-YYYY"
          minDate="01-01-1970"
          maxDate="01-01-2500"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: "none",
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
            setDate(datein);
          }}
        />
      </View>
      <View style={Styles.al_center}>
        <TouchableOpacity
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
          onPress={() => navigate.navigate("MemberManageIndivi", { callback })}
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
          onPress={() => navigate.navigate("MemberManageIndivi", { callback })}
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
