import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Styles } from "../../styles";
import moment from "moment";
import Script from "../../script";
import { useSetRecoilState, useRecoilState } from "recoil";
import { AntDesign } from "@expo/vector-icons";

import * as Global from "../../globalState";
import * as navigate from "../../navigator/RootNavigation";

export default function OccupantBtn({item}) {
  const [unitMember, setUnitMember] = useRecoilState(Global.unitMember);
  const [dataListOccupant, setDataListOccupant] = React.useState(unitMember.unitMember.tenant);
  const params = item;
  function gotoOccupantDetail(member) {
    navigate.navigate("OccupantDetail", member);
  }

  const setImage = (img) => {
    if(img){
      return (<Image source={{ uri: img }} style={[{ width: 100, height: 100, resizeMode: "cover" }, Styles.circle]} />)
    } else {
      return (<Image source={require('../../../assets/image/Britania-connect-assets/default-img-circle.png')} 
                  style={[{ width: 100, height: 100, resizeMode: "cover" }, Styles.circle]}/>)
    }
  }

  console.log('DEV', unitMember.unitMember.tenant)

  return (
    <View>
      {unitMember.unitMember.tenant.map((item) => (
        <TouchableOpacity
          onPress={() => {
            gotoOccupantDetail(item);
          }}
          style={[
            Styles.w100,
            Styles.p15,
            Styles.br_5,
            Styles.FFF,
            Styles.al_left,
            Styles.mt10,
          ]}
        >
          <View style={[Styles.row]}>
            <View style={[Styles.w40]}>
              {setImage(item.image)}
              <Text style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5, Styles.mt10]}>
                เบอร์โทรศัพท์
              </Text>
              <Text
                style={[Styles.mainFont_x, { color: "#8f8f8f", fontSize: 22 }]}
              >
                {item.mobileNo}
              </Text>
              <Text style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}>
                สิทธิ์หมดอายุ
              </Text>
              <Text
                style={[Styles.mainFont_x, { color: "#8f8f8f", fontSize: 22 }]}
              >
                {moment(item.expiredDate).format("DD/MM/YYYY")}
              </Text>
            </View>
            <View style={[Styles.mt5]}>
              <View style={Styles.row}>
                {item.memberStatus === "pending" ? (
                  <View style={[Styles.w65]}>
                    <View
                      style={[
                        Styles.circle,
                        { backgroundColor: "#fcf4d4" },
                        Styles.al_center,
                      ]}
                    >
                      <Text
                        style={[
                          Styles.f_24,
                          Styles.mainFont_x,
                          {
                            color: "#f4910d",
                            marginLeft: 10,
                            marginRight: 10,
                          },
                        ]}
                      >
                        ยังไม่เปิดการใช้งาน
                      </Text>
                    </View>
                  </View>
                ) : null}
                {item.memberStatus === "active" ? (
                  <View>
                    <View style={[Styles.w65]}>
                      <View
                        style={[
                          Styles.circle,
                          { backgroundColor: "#dcfcf4" },
                          Styles.al_center,
                        ]}
                      >
                        <Text
                          style={[
                            Styles.f_24,
                            Styles.mainFont_x,
                            {
                              color: "#3fc89b",
                              marginLeft: 10,
                              marginRight: 10,
                            },
                          ]}
                        >
                          เปิดการใช้งานแล้ว
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : null}
                <View style={Styles.w10}></View>
                <View
                  style={[
                    { width: 30, height: 30, backgroundColor: "#EEEEEE" },
                    Styles.circle,
                  ]}
                >
                  <View>
                    <AntDesign
                      name="right"
                      size={20}
                      color="gray"
                      style={[Styles.mt5, { marginLeft: 5 }]}
                    />
                  </View>
                </View>
              </View>
              <View style={[Styles.w100, {marginTop: 7}]}>
                <Text style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}>
                  ชื่อ-นามสกุล
                </Text>
                <Text
                  style={[Styles.f_22, Styles.mainFont_x, { color: "#8f8f8f" }]}
                >
                  {item.name}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}>
                  อีเมล
                </Text>
                <Text
                  style={[Styles.f_22, Styles.mainFont_x, { color: "#8f8f8f" }]}
                >
                  {item.email}
                </Text>
              </View>
            </View>
          </View>
          {item.memberStatus !== "active" ? (
            <TouchableOpacity
              onPress={() => navigate.navigate("OccupantAddOTP", { params })}
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
                กรอก OTP เพื่อเปิดใช้งาน
              </Text>
            </TouchableOpacity>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
};
