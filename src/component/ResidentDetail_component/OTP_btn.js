import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";
import Script from "../../script/ResidentAdd_script";
import mainScript from "../../script";
import KEYS from "../../KEYS.json";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState";
import Store from "../../store";

const OTP_btn = ({ member }) => {
  const [unitMember, setUnitMember] = useRecoilState(Global.unitMember);
  console.log("OTP===>", member);
  const vertfyOTP = (mem) => {
    Store.getLocalStorege(KEYS.TOKEN, (res) => {
      const token = res.detail.token;
      Script.memberResendOtp(
        token,
        member.mobileNo,
        unitMember.unitId,
        (res) => {
          console.log("callback", res);
          var otp = res;
          otp.mobileNo = mem.mobileNo;
          otp.name = mem.name;
          otp.unitId = mainScript.recoilTranform(unitMember.unitId);
          navigate.navigate("ResidentAddOTP", otp);
        }
      );
    });
  };

  const [LANG, setLANG] = useRecoilState(Global.Language);

  return (
    <TouchableOpacity
      onPress={() => vertfyOTP(member)}
      style={[
        Styles.w100,
        Styles.row,
        Styles.mt10,
        Styles.transparent,
        Styles.al_center,
        Styles.br_5,
        Styles.border_btn,
        Styles.p15,
        Styles.jc_center,
      ]}
    >
      <Text
        style={[
          Styles.text_center,
          Styles.mainColor_text,
          Styles.f_22,
          Styles.mainFont,
          { marginLeft: "1%" },
        ]}
      >
        {LANG.membermanageindivi_text_09}
      </Text>
    </TouchableOpacity>
  );
};

export default OTP_btn;
