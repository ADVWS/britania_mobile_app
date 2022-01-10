import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";

import { Styles } from "../../styles";
import * as Global from "../../globalState";

import { useSetRecoilState, useRecoilState } from "recoil";
import * as navigate from "../../navigator/RootNavigation";

const form = [
  {
    field_name: "ชื่อ-นามสกุล",
    field_state: "name",
  },
  {
    field_name: "เลขประจำตัวประชาชน",
    field_state: "identity",
  },
  {
    field_name: "เบอร์โทรศัพท์",
    field_state: "tel",
  },
  {
    field_name: "อีเมล",
    field_state: "email",
  },
];

export default function thai_form() {
  const setNewOccupant = useSetRecoilState(Global.dataListOccupant);

  // const [name, setName] = React.useState("");
  // const [identity, setIdentity] = React.useState("");
  // const [tel, setTel] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [date, setDate] = React.useState("");

  const [data, setData] = React.useState({
    name: "",
    identity: "",
    tel: "",
    email: "",
    date: "",
  });

  const addData = () => {
    if (
      data.name == "" ||
      data.identity == "" ||
      data.tel == "" ||
      data.email == "" ||
      data.date == ""
    ) {
      console.log(
        "data in" + data.name + data.identity + data.tel + data.email
      );
      alert("Please fill all the form");
    } else {
      let outDate = data.date.split("-");

      console.log("Name: " + data.name);
      console.log("Identity: " + data.identity);
      console.log("Tel: " + data.tel);
      console.log("Email: " + data.email);
      console.log(
        "Date: " +
          Date.parse(new Date(outDate[2], outDate[1] - 1, outDate[0])) / 1000
      );

      setNewOccupant((oldOccupant) => [
        ...oldOccupant,
        {
          name: data.name,
          identity: data.identity,
          tel: data.tel,
          email: data.email,
          type: "THAI",
          status: "VERIFY",
          expire:
            Date.parse(new Date(outDate[2], outDate[1] - 1, outDate[0])) / 1000,
          image:
            "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.6435-9/119062205_124961352661129_4552694077607062116_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHL6WzClQIeSwjYXwbCCdUtf9e2NS2gwlJ_17Y1LaDCUgyQcqOns6cJ_XBu9M9ncGCgPhX2XlInc73XrGfAewfs&_nc_ohc=gqzud7Ke3gkAX9JPSpm&_nc_ht=scontent.fbkk22-1.fna&oh=00_AT-Pf9OV_FLq_XKzykPYbGP6a-z66lvGjmiW_8fwTDABWQ&oe=61FEF325",
        },
      ]);

      alert("Saved");
      // setName("");
      // setIdentity("");
      // setTel("");
      // setEmail("");
      // setDate("");

      navigate.navigate("MemberManage");
    }
  };

  return (
    <View style={{ marginBottom: 30 }}>
      {form.map((item) => (
        <React.Fragment key={item.field_state}>
          <Text
            style={[
              Styles.ml5,
              Styles.mt10,
              Styles.mainFont,
              Styles.f_16,
              Styles.black_gray_text,
            ]}
          >
            {item.field_name}
          </Text>
          <View style={Styles.al_center}>
            {/* (nameIn) => {setData( (currentState) => ({...currentState,name : nameIn}))} */}
            <TextInput
              style={[Styles.w90, Styles.mt10, Styles.textfieldbox]}
              value={data[item.field_state]}
              onChangeText={(input) =>
                setData((curr) => ({ ...curr, [item.field_state]: input }))
              }
            ></TextInput>
          </View>
        </React.Fragment>
      ))}

      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_16,
          Styles.black_gray_text,
        ]}
      >
        วันที่สิทธิ์หมดอายุ
      </Text>
      <View style={Styles.al_center}>
        {/* <TextInput style={[Styles.w90,Styles.mt5,Styles.textfieldbox]}></TextInput> */}
        <DatePicker
          style={[Styles.w90, Styles.mt5, Styles.textfieldbox]}
          date={data.date} // Initial date from state
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
          onDateChange={(input) =>
            setData((curr) => ({ ...curr, date: input }))
          }
        />
      </View>

      <View style={Styles.al_center}>
        <TouchableOpacity
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
          // onPress={() => navigate.navigate("OccupantAddOTP")}
          onPress={addData}
        >
          <Text
            style={[
              Styles.white_text,
              Styles.f_18,
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
          onPress={() => navigate.navigate("MemberManageIndivi")}
        >
          <Text
            style={[
              Styles.text_center,
              Styles.mainColor_text,
              Styles.f_18,
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
