import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState";
import mainScript from "../../script"
import Script from "../../script/OccupantEdit_script"
import KEYS from "../../KEYS.json"

export default function foreigner_form({ item }) {

  const [member, setMember] = React.useState(item)
  const [name, setName] = React.useState(member.name)
  const [passport, setPassport] = React.useState(member.passport)
  const [mobileNo, setMobileNo] = React.useState(member.mobileNo)
  const [email, setEmail] = React.useState(member.email)
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const setUnitMember = useSetRecoilState(Global.unitMember);

  const saveEdit = () => {
    var edit = {
      name: name,
      passport: passport,
      idcard: member.idcard,
      mobileNo: mobileNo,
      email: email,
      nationType: "foreign",
      unitMemberId: member.unitMemberId,
    }
    Script.memberUpdateProfile_foreign(edit, KEYS.TOKEN, member.unitid,(res)=>{
      if(typeof res === 'object'){
        var data = mainScript.recoilTranform(unitMember)
        data.unitMember = res
        setUnitMember(data)
        navigate.navigate("MemberManageIndivi")
      }
    })
  }

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
            Styles.f_20,
            Styles.textfieldbox,
            Styles.mainFont_x,
            Styles.border_btn2
          ]}
          value={name}
          onChangeText={(val) => {
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
            Styles.border_btn2
          ]}
          value={passport}
          onChangeText={(val)=>{
            setPassport(val)
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
            Styles.border_btn2
          ]}
          value={mobileNo}
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
            Styles.border_btn2
          ]}
          value={email}
          onChangeText={(val)=>{
            setEmail(val)
          }}
        />
      </View>
      <View style={Styles.al_center}>
        <TouchableOpacity
          style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
          onPress={() => saveEdit()}
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
          onPress={() => navigate.navigate("ResidentDetail", member)}
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
