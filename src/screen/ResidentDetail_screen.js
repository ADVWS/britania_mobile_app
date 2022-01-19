import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AntDesign } from "@expo/vector-icons";

import * as Global from "../globalState";

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";

const ResidentDetail = ({ route }) => {
  const callback = useRecoilState(Global.callbackAccount);
  console.log("TEST::::", callback[0]);
  return (
    <View style={[Styles.flex, Styles.al_center]}>
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={"ผู้อยู่อาศัยร่วม"} backto={"MemberManageIndivi"} />
        <ScrollView style={[Styles.w100, Styles.p15, Styles.FFF]}>
          <View>
            {route.params.map((item) => (
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
                    <Image
                      source={{ uri: item.image }}
                      style={[
                        { width: 100, height: 100, resizeMode: "cover" },
                        Styles.circle,
                      ]}
                    ></Image>
                    {/* <Image source={require('../../../assets/image/profpic/SampleProf2.jpg')} style={[{width:100,height:100,resizeMode:'cover'},Styles.circle]}></Image> */}
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
                    </View>

                    <View style={[Styles.w100, {marginTop: 7}]}>
                      <Text
                        style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}
                      >
                        ชื่อ-นามสกุล
                      </Text>
                      <Text
                        style={[
                          Styles.f_22,
                          Styles.mainFont_x,
                          { color: "#8f8f8f" },
                        ]}
                      >
                        {item.name}
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
                        {item.email}
                      </Text>
                    </View>
                  </View>
                </View>
                {item.status === "VERIFY" ? (
                  <TouchableOpacity
                    onPress={() =>
                      navigate.navigate("ResidentAddOTP")
                    }
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
                {item.status === "ACTIVE" ? (
                  <View style={Styles.row}>
                    <TouchableOpacity
                      style={[
                        Styles.w45,
                        Styles.row,
                        Styles.mt10,
                        Styles.transparent,
                        Styles.al_center,
                        Styles.br_5,
                        Styles.border_btn,
                        Styles.p10,
                        Styles.jc_center,
                      ]}
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
                        ลบ
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        Styles.w45,
                        Styles.row,
                        Styles.mt10,
                        Styles.transparent,
                        Styles.al_center,
                        Styles.br_5,
                        Styles.border_btn,
                        Styles.p10,
                        Styles.jc_center,
                        Styles.ml5,
                      ]}
                      onPress={() => navigate.navigate("ResidentEdit", item)}
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
                        แก้ไข
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ResidentDetail;
