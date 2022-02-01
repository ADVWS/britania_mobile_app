import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import moment from "moment";
import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";
import Edit_btn from "../component/OccupantDetail_component/edit_btn";
import OTP_btn from "../component/OccupantDetail_component/OTP_btn";
import Status from "../component/OccupantDetail_component/status";

const OccupantDetail = ({ route }) => {

  // const callback = useRecoilState(Global.callbackAccount);
  const [switchInform, setSwitchInform] = React.useState(route.params.allowHomecare)
  const [member, setMember] = React.useState(route.params)
  console.log("TEST::::", route.params.allowHomecare);
  const informSwitch = (val) => {
    setSwitchInform(val)
  }

  const setBtnMember = (status) => {
    if (status === 'active') {
      return (<Edit_btn member={member} />)
    } else {
      return (<OTP_btn member={member} />)
    }
  }

  const setImage = (img) => {
    if (img) {
      return (<Image
        source={{ uri: img }}
        style={[
          { width: 100, height: 100, resizeMode: "cover" },
          Styles.circle,
        ]} />)
    } else {
      return (<Image
        source={require('../../assets/image/Britania-connect-assets/default-img-circle.png')}
        style={[
          { width: 100, height: 100, resizeMode: "cover" },
          Styles.circle,
        ]} />)
    }
  }

  return (
    <View style={[Styles.flex, Styles.al_center]}>
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={"ผู้เช่า"} backto={"MemberManageIndivi"} />
        <ScrollView style={[Styles.w100]}>
          <View style={[Styles.w100]}>
            <View style={[Styles.p12, Styles.FFF]}>
              <View
                style={[
                  Styles.w100,
                  Styles.p15,
                  Styles.br_5,
                  Styles.FFF,
                  Styles.al_left,
                  Styles.boxWithShadow,
                  Styles.mb15,
                ]}>
                <View style={[Styles.row]}>
                  <View style={[Styles.w40]}>
                    {setImage(member.image)}
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                      เบอร์โทรศัพท์
                    </Text>
                    <Text
                      style={[
                        Styles.mainFont,
                        { color: "#8f8f8f", fontSize: 22 },
                      ]}>
                      {member.mobileNo}
                    </Text>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                      สิทธิ์หมดอายุ
                    </Text>
                    <Text
                      style={[
                        Styles.mainFont,
                        { color: "#8f8f8f", fontSize: 22 },
                      ]}>
                      {moment(member.expiredDate).format("DD/MM/YYYY")}
                    </Text>
                  </View>
                  <View>
                    <View style={Styles.row}>
                      <Status status={member.memberStatus} />
                      <View style={Styles.w10}></View>
                    </View>
                    <View style={[Styles.w100, { marginTop: 6 }]}>
                      <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                        ชื่อ-นามสกุล
                      </Text>
                      <Text
                        style={[
                          Styles.f_22,
                          Styles.mainFont,
                          { color: "#8f8f8f" },
                        ]}>
                        {member.name}
                      </Text>
                      <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                        อีเมล
                      </Text>
                      <Text
                        style={[
                          Styles.f_22,
                          Styles.mainFont,
                          { color: "#8f8f8f" },
                        ]}>
                        {member.email}
                      </Text>
                    </View>
                  </View>
                </View>
                {setBtnMember(member.memberStatus)}
              </View>
            </View>
            <View style={[Styles.p15]}>
              <Text style={[Styles.mainFont, Styles.mainColor_text, Styles.f_26, Styles.mt10]}>จัดการเมนู</Text>
              <Text style={[Styles.mainFont, Styles.f_22, Styles.mt5, { color: '#9f9f9f' }]}>เลือกเมนูที่ต้องการให้ผู้เช่าสามารถมองเห็นได้</Text>
              <View style={[Styles.w100, Styles.FFF, Styles.p20, Styles.br_5, Styles.boxWithShadow, Styles.row, Styles.mt10]}>
                <View style={[Styles.w50, Styles.jc_center]}>
                  <Text style={[Styles.f_24, Styles.mainFont_x]}>
                    แจ้งซ่อม
                  </Text>
                </View>
                <View style={[Styles.w50, Styles.al_end]}>
                  <Switch
                    trackColor={{ false: "#767577", true: "#FFA4A0" }}
                    thumbColor={switchInform ? "#f1645e" : "#f4f3f4"}
                    onValueChange={informSwitch}
                    value={switchInform}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default OccupantDetail;
