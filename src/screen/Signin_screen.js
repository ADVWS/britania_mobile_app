import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import * as navigate from "../navigator/RootNavigation";

import { Styles } from "../styles";
import FooterSignin from "../component/footer_signin";

export default function Signin() {

  const [userid, setUserid] = React.useState("");
  const [clearbtn, setClearbtn] = React.useState(false);

  function isClearBtn() {
    if(userid.length > 1){
      setClearbtn(true)
      return
    }
    setClearbtn(false)
  }
 
  return (
    <LinearGradient
      colors={["#fbd4d4", "#fff4f3", "#fffefe"]}
      style={[Styles.flex, Styles.al_center, Styles.jc_center]}
    >
      <View style={[Styles.al_center, Styles.w100, Styles.h90, Styles.p30]}>
        <View style={[Styles.w100, Styles.al_start]}>
          <TouchableOpacity onPress={()=> navigate.navigate('Login')}>
              <MaterialIcons name="arrow-back" size={32} color="#f1645e" />
          </TouchableOpacity>
          <Text
            style={[
              Styles.f_26,
              Styles.mainFont,
              Styles.mainColor_text,
              Styles.mt30,
            ]}
          >
            เข้าสู่ระบบ
          </Text>
        </View>
        <View style={[Styles.w100, Styles.al_start]}>
          <Text
            style={[
              Styles.f_16,
              Styles.mainFont,
              Styles.mainColor_text,
              Styles.mt80,
            ]}
          >
            เลขประจำตัวประชาชน / หมายเลขหนังสือเดินทาง
          </Text>
          <View style={[Styles.row, Styles.mt15]}>
            <TextInput
              value= {userid}
              maxLength={13}
              onChange={()=>isClearBtn()}
              onChangeText={(text)=> setUserid(text)}
              style={[
                Styles.w80,
                Styles.p15,
                Styles.pink_light,
                Styles.f_16,
                Styles.br_5_left,
              ]}
            />
            <View
              style={[
                Styles.w20,
                Styles.p15,
                Styles.pink_light,
                Styles.br_5_right,
                Styles.al_end,
              ]}
            >
              {clearbtn && (
                <TouchableOpacity
                  onPress={()=>{
                    setUserid('')
                    setClearbtn(false)
                  }}
                  style={[
                    Styles.FFF,
                    Styles.w50,
                    Styles.al_center,
                    Styles.circle,
                  ]}
                >
                  <Ionicons name="close" size={18} color="red" />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigate.navigate("OTP")}
            style={[
              Styles.w100,
              Styles.p12,
              Styles.mainColor,
              Styles.al_center,
              Styles.br_5,
              Styles.mt20,
              Styles.boxWithShadow,
            ]}
          >
            <View style={[Styles.row]}>
              <Text
                style={[
                  Styles.f_18,
                  Styles.mainFont,
                  Styles.white_text,
                  Styles.text_center,
                ]}
              >
                ถัดไป
              </Text>
              <View style={{ bottom: 2 }}>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#FFF"
                  style={[Styles.mt5]}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FooterSignin/>
    </LinearGradient>
  );
}
