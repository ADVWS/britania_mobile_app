import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Styles } from "../../styles";
import Script from "../../script";
import { useSetRecoilState, useRecoilState } from "recoil";
import { AntDesign } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";

import * as Global from "../../globalState";

// const ResidentBtn = ({data})
const ResidentBtn = (resident, item) => {
  // console.log("INBOUND")
  // console.log(resident)

  // const [dataListResident, setDataListResident] = useRecoilState(Global.dataListResident)
  const [dataListResident, setDataListResident] = React.useState(
    resident.resident
  );
  // console.log(dataListResident)
  const params = item;
  const Addcallback = useSetRecoilState(Global.callbackEdit);
  const _callback = useRecoilState(Global.callbackEdit);

  function gotoResidentDetail(usertype, identity) {
    console.log("USER TYPE::", usertype);
    var listdetail = [];
    if (usertype === "Host-resident") {
      dataListResident.map((item) => {
        listdetail.push(item);
      });
    } else {
      dataListResident.map((item) => {
        if (item.identity === identity) {
          listdetail.push(item);
        }
      });
    }
    console.log(listdetail);
    Addcallback(listdetail);
    console.log("=====", _callback);
    navigate.navigate("ResidentDetail", listdetail);
  }

  return (
    <View>
      {dataListResident.map((item) => (
        <TouchableOpacity
          onPress={() => {
            gotoResidentDetail(item.usertype, item.identity);
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
              <Image
                source={{ uri: item.image }}
                style={[
                  { width: 100, height: 100, resizeMode: "cover" },
                  Styles.circle,
                ]}
              ></Image>
              {/* <Image source={require('../../../assets/image/profpic/SampleProf2.jpg')} style={[{width:100,height:100,resizeMode:'cover'},Styles.circle]}></Image> */}
              <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                เบอร์โทรศัพท์
              </Text>
              <Text
                style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 15 }]}
              >
                {item.tel}
              </Text>
            </View>
            <View>
              <View style={Styles.row}>
                {item.status === "VERIFY" ? (
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
                          Styles.f_16,
                          Styles.mainFont,
                          { color: "#f4910d", marginLeft: 10, marginRight: 10 },
                        ]}
                      >
                        ยังไม่เปิดการใช้งาน
                      </Text>
                    </View>
                  </View>
                ) : null}
                {item.status === "ACTIVE" ? (
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
                            Styles.f_16,
                            Styles.mainFont,
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
                {/* {this.statusTranform(data.status)}
                                <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                                    {' '}
                                </Text>
                                <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                                    {' '}
                                </Text> */}
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

              <View style={[Styles.w100]}>
                <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                  ชื่อ-นามสกุล
                </Text>
                <Text
                  style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}
                >
                  {item.name}
                </Text>
                <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                  อีเมล
                </Text>
                <Text
                  style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}
                >
                  {item.email}
                </Text>
              </View>
            </View>
          </View>
          {item.status === "VERIFY" ? (
            <TouchableOpacity
              onPress={() => navigate.navigate("ResidentAddOTP", { params })}
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
                  Styles.f_18,
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
export default ResidentBtn;
