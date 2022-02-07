import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import { Styles } from "../../styles";
import * as Global from "../../globalState";
import { useSetRecoilState, useRecoilState } from "recoil";
import * as navigate from "../../navigator/RootNavigation";
import mainScript from "../../script";
import Script from "../../script/ResidentAdd_script";
import KEYS from "../../KEYS.json";

export default function thai_form({ unit }) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [name, setName] = React.useState("");
  const [idcard, setIdcard] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const setUnitMember = useSetRecoilState(Global.unitMember);

  const addData = () => {
    var add = {
      unitId: unit.unitId,
      ownerType: "coowner",
      nationType: "thai",
      passport: null,
      name: name,
      idcard: idcard,
      mobileNo: mobileNo,
      email: email,
    };
    Script.memberAddProflie_thai(add, KEYS.TOKEN, unit.id, (res) => {
      console.log(res);
      if (typeof res === "object") {
        var data = mainScript.recoilTranform(unitMember);
        data.unitMember = res.unitUpdate;
        var otp = res.otp;
        otp.mobileNo = mobileNo;
        otp.name = name;
        otp.unitId = unit.unitId;
        setUnitMember(data);
        navigate.navigate("ResidentAddOTP", otp);
      }
    });
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
        {LANG.residentadd_text_05}
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
          onChangeText={(val) => {
            setName(val);
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
        {LANG.residentadd_text_06}
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
          onChangeText={(val) => {
            setIdcard(val);
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
        {LANG.residentadd_text_07}
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
          onChangeText={(val) => {
            setMobileNo(val);
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
        {LANG.residentadd_text_08}
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
          onChangeText={(val) => {
            setEmail(val);
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
            {LANG.residentadd_text_09}
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
            {LANG.residentadd_text_10}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
