import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

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
  const setNewResident = useSetRecoilState(Global.dataListResident);

  const [name, setName] = React.useState("");
  const [identity, setIdentity] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");

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
      data.email == ""
    ) {
      console.log("data in" + name + identity + tel + email);
      alert("Please fill all the form");
    } else {
      console.log("Name: " + data.name);
      console.log("Identity: " + data.identity);
      console.log("Tel: " + data.tel);
      console.log("Email: " + data.email);

      setNewResident((oldResident) => [
        ...oldResident,
        {
          name: data.name,
          identity: data.identity,
          tel: data.tel,
          email: data.email,
          type: "THAI",
          status: "VERIFY",
          image:
            "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.6435-9/100099641_112862920442600_8204332883431653376_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE3Hhl3oQ_dq3xdTCpsOOzkQ9RGaXRkkCVD1EZpdGSQJe-S1oyZwZg-cIRyc6Xff-oKrY3ucdCEvgad47HOo4B_&_nc_ohc=LC8JEsc2IecAX_npsU7&_nc_ht=scontent.fbkk22-3.fna&oh=00_AT-GLYszm2_g1Zfz8aQVlvGZ9xtVTkjwmDVqYemIiZ1TlQ&oe=61FD2C63",
        },
      ]);

      alert("Saved");
      // setName("");
      // setIdentity("");
      // setTel("");
      // setEmail("");

      navigate.navigate("ResidentAddOTP");
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

      {/* <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_16,
          Styles.black_gray_text,
        ]}
      >
        ชื่อ-นามสกุล
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[Styles.w90, Styles.mt10, Styles.textfieldbox]}
          value={name}
          onChangeText={setName}
        ></TextInput>
      </View> */}

      {/* <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_16,
          Styles.black_gray_text,
        ]}
      >
        เลขประจำตัวประชาชน
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[Styles.w90, Styles.mt10, Styles.textfieldbox]}
          value={identity}
          onChangeText={setIdentity}
        ></TextInput>
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_16,
          Styles.black_gray_text,
        ]}
      >
        เบอร์โทรศัพท์
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[Styles.w90, Styles.mt5, Styles.textfieldbox]}
          value={tel}
          onChangeText={setTel}
        ></TextInput>
      </View>
      <Text
        style={[
          Styles.ml5,
          Styles.mt10,
          Styles.mainFont,
          Styles.f_16,
          Styles.black_gray_text,
        ]}
      >
        อีเมล์
      </Text>
      <View style={Styles.al_center}>
        <TextInput
          style={[Styles.w90, Styles.mt5, Styles.textfieldbox]}
          value={email}
          onChangeText={setEmail}
        ></TextInput>
      </View> */}
      <View style={Styles.al_center}>
        <TouchableOpacity
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
          //onPress={() => navigate.navigate('ResidentAddOTP')}>
          onPress={() => addData()}
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
