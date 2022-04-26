import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Styles } from "../../styles";
import Script from "../../script";
import { useSetRecoilState, useRecoilState } from "recoil";
import { AntDesign } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import OTP_btn from "../../component/ResidentDetail_component/OTP_btn";
import * as Global from "../../globalState";

const ResidentBtn = ({ item }) => {
  const [unitMember, setUnitMember] = useRecoilState(Global.unitMember);
  const params = item;
  const [LANG, setLANG] = useRecoilState(Global.Language);

  function gotoResidentDetail(member) {
    navigate.navigate("ResidentDetail", member);
  }
  console.log(unitMember.unitMember.resident)
  const setImage = (img) => {
    console.log('IMAGE==>', img)
    if (img !== null) {
      return (
        <Image
          source={{ uri: img }}
          style={[
            { width: 90, height: 90, resizeMode: "cover" },
            Styles.circle,
          ]}
        />
      );
    } else {
      return (
        <Image
          source={require("../../../assets/image/Britania-connect-assets/default-img-circle.png")}
          style={[
            { width: 90, height: 90, resizeMode: "cover" },
            Styles.circle,
          ]}
        />
      );
    }
  };

  return (
    <View>
      {unitMember.unitMember.resident.map((item) => (
        <TouchableOpacity
          onPress={() => {
            gotoResidentDetail(item);
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
              {setImage(item.profileImage)}
              <Text
                style={[
                  Styles.f_22,
                  Styles.mainFont_x,
                  Styles.spacing5,
                  Styles.mt20,
                ]}
              >
                {LANG.membermanageindivi_text_07}
              </Text>
              <Text
                style={[Styles.mainFont_x, { color: "#8f8f8f", fontSize: 22 }]}
              >
                {item.mobileNo}
              </Text>
            </View>
            <View style={[Styles.w60]}>
              <View style={[Styles.row, Styles.w100, Styles.p5]}>
                {item.memberStatus === "active" ? (
                  <>
                    <View style={[Styles.w70]}>
                      <View style={[Styles.w100]}>
                        <View
                          style={[
                            Styles.circle,
                            { backgroundColor: "#dcfcf4" },
                            Styles.al_center,
                          ]}
                        >
                          <Text
                            style={[
                              Styles.f_22,
                              Styles.mainFont_x,
                              {
                                color: "#3fc89b",
                                marginLeft: 10,
                                marginRight: 10,
                              },
                            ]}
                          >
                            {LANG.membermanageindivi_text_11}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[Styles.w30]}>
                      <View style={[Styles.w100, Styles.al_end]}>
                        <View
                          style={[
                            { width: 30, height: 30, backgroundColor: "#EEEEEE", right: 10 },
                            Styles.circle,
                            Styles.al_center,
                            Styles.jc_center
                          ]}>
                          <View>
                            <AntDesign
                              name="right"
                              size={20}
                              color="gray"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={[Styles.w70, Styles.p5]}>
                      <View style={[Styles.w100]}>
                        <View
                          style={[
                            Styles.circle,
                            { backgroundColor: "#fcf4d4" },
                            Styles.al_center,
                          ]}
                        >
                          <Text
                            style={[
                              Styles.f_22,
                              Styles.mainFont_x,
                              {
                                color: "#f4910d",
                                marginLeft: 10,
                                marginRight: 10,
                              },
                            ]}
                          >
                            {LANG.membermanageindivi_text_05}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[Styles.w30, Styles.p5]}>
                      <View style={[Styles.w100, Styles.al_end]}>
                        <View
                          style={[
                            { width: 30, height: 30, backgroundColor: "#EEEEEE", right: 10 },
                            Styles.circle,
                            Styles.al_center,
                            Styles.jc_center
                          ]}>
                          <View>
                            <AntDesign
                              name="right"
                              size={20}
                              color="gray"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </>
                )}
              </View>

              <View style={[Styles.w100]}>
                <Text style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}>
                  {LANG.membermanageindivi_text_06}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#8f8f8f" }]}>
                  {item.name}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}>
                  {LANG.membermanageindivi_text_08}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont_x, { color: "#8f8f8f" }]}>
                  {item.email}
                </Text>
              </View>
            </View>
          </View>
          {item.memberStatus !== "active" ? <OTP_btn member={item} /> : null}
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default ResidentBtn;
