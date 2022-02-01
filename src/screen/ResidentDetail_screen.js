import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";

import * as Global from "../globalState";
import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import Edit_btn from "../component/ResidentDetail_component/edit_btn";
import OTP_btn from "../component/ResidentDetail_component/OTP_btn";
import Status from "../component/ResidentDetail_component/status";

const ResidentDetail = ({ route }) => {
  const [member, setMember] = React.useState(route.params)

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
        <MainHeader name={"ผู้อยู่อาศัยร่วม"} backto={"MemberManageIndivi"} />
        <ScrollView style={[Styles.w100, Styles.p15, Styles.FFF]}>
          <View>
              <View
                style={[
                  Styles.w100,
                  Styles.p10,
                  Styles.br_5,
                  Styles.FFF,
                  Styles.al_left,
                  Styles.boxWithShadow,
                  Styles.mb15,
                ]}
              >
                <View style={[Styles.row]}>
                  <View style={[Styles.w40]}>
                    {setImage(member.image)}
                    <Text
                      style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}
                    >
                      เบอร์โทรศัพท์
                    </Text>
                    <Text
                      style={[
                        Styles.mainFont_x,
                        { color: "#8f8f8f", fontSize: 22 },
                      ]}
                    >
                      {member.mobileNo}
                    </Text>
                  </View>
                  <View>
                    <View style={Styles.row}>
                      <Status status={member.memberStatus}/>
                      <View style={Styles.w10}></View>
                    </View>
                    <View style={[Styles.w100, {marginTop: 7}]}>
                      <Text style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}>
                        ชื่อ-นามสกุล
                      </Text>
                      <Text
                        style={[
                          Styles.f_22,
                          Styles.mainFont_x,
                          { color: "#8f8f8f" },
                        ]}
                      >
                        {member.name}
                      </Text>
                      <Text
                        style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}
                      >
                        อีเมล
                      </Text>
                      <Text
                        style={[
                          Styles.f_22,
                          Styles.mainFont_x,
                          { color: "#8f8f8f" },
                        ]}
                      >
                        {member.email}
                      </Text>
                    </View>
                  </View>
                </View>
                {setBtnMember(member.memberStatus)}
              </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ResidentDetail;
