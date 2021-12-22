import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../navigator/RootNavigation";

import { Styles } from "../styles";

import Radio from "../component/OTP_component/radio_button";

export default function OTP() {
  const [type, setType] = React.useState("MOBILE");
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    { label: "XXX-XXX-3071", value: "0968803071" },
  ]);
  const [value, setValue] = React.useState(items[0].value);

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  return (
    <LinearGradient
      colors={["#fbd4d4", "#fff4f3", "#fffefe"]}
      style={[Styles.flex, Styles.al_center, Styles.jc_center]}
    >
      <View style={[Styles.al_center, Styles.w100, Styles.h90, Styles.p30, Styles.mt30]}>
        <View style={[Styles.w100, Styles.al_start]}>
          <TouchableOpacity onPress={() => navigate.navigate("Signin")}>
            <MaterialIcons name="arrow-back" size={32} color="#f1645e" />
          </TouchableOpacity>
          <Text
            style={[
              Styles.f_18,
              Styles.mainFont,
              Styles.mainColor_text,
              Styles.mt60,
            ]}
          >
            เลือกวิธีรับ OTP
          </Text>
          <Radio isSelectType={isSelectType} />
          <Text
            style={[
              Styles.f_18,
              Styles.mainFont,
              Styles.mainColor_text,
              Styles.mt30,
            ]}
          >
            หมายเลขโทรศัพท์ที่ต้องการรับ OTP
          </Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={[Styles.pink_light, Styles.mt10, { borderWidth: 0 }]}
            labelStyle={[Styles.mainFont, Styles.black_gray_text]}
            dropDownContainerStyle={[{ borderWidth: 0 }]}
            listItemLabelStyle={[Styles.mainFont, Styles.black_gray_text]}
            ArrowDownIconComponent={({ style }) => (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={30}
                color="#f1645e"
              />
            )}
            ArrowUpIconComponent={({ style }) => (
              <MaterialIcons
                name="keyboard-arrow-up"
                size={30}
                color="#f1645e"
              />
            )}
            TickIconComponent={({ style }) => (
              <MaterialIcons name="check" size={25} color="#f1645e" />
            )}
          />
        </View>
        <TouchableOpacity
          //onPress={() => navigate.navigate("OTP")}
          style={[
            Styles.w100,
            Styles.p12,
            Styles.mainColor,
            Styles.al_center,
            Styles.br_5,
            Styles.mt15,
            Styles.boxWithShadow,
          ]}
        >
          <Text
            style={[
              Styles.f_18,
              Styles.mainFont,
              Styles.white_text,
              Styles.text_center,
            ]}
          >
            ส่ง OTP
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/image/bottom-bg2.png")}
        style={[
          Styles.w55,
          Styles.h35,
          Styles.absolute,
          Styles.bottomMin20,
          Styles.opacity01,
        ]}
      />
      <Text style={[Styles.f_14, Styles.mainFont, Styles.mainColor_text, Styles.text_center, Styles.mb20]}>
        หากหมายเลขโทรศัพท์ หรืออีเมลของท่านไม่ถูกต้อง{'\n'}กรุณาติดต่อ Call Center โทร 021 613 000{'\n'}ในวันเวลาทำการ 9:00-18:00 น.
      </Text>
    </LinearGradient>
  );
}
