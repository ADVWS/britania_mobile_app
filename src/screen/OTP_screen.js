import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../navigator/RootNavigation";

import { Styles } from "../styles";

import Radio from "../component/OTP_component/radio_button";
import FooterSignin from "../component/footer_signin";

export default function OTP() {
  const [type, setType] = React.useState("MOBILE");
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    { label: "ไม่พบหมายเลขโทรศัพท์", value: "" },
  ]);
  const [dropdown, setDropdown] = React.useState(40);
  const [value, setValue] = React.useState(items[0].value);
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    var dataItems = [{ label: "XXX-XXX-8888", value: "0888888888" }];
    if (dataItems.length > 0) {
      var sizeItem = 40 * dataItems.length;
      setDropdown(sizeItem);
      setItems(dataItems);
      setValue(dataItems[0].value);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, []);

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        colors={["#fbd4d4", "#fff4f3", "#fffefe"]}
        style={[Styles.flex, Styles.al_center, Styles.jc_center]}
      >
        <View
          style={[
            Styles.al_center,
            Styles.w100,
            Styles.h90,
            Styles.p30,
            Styles.mt30,
          ]}
        >
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
            {type === "MOBILE" && (
              <>
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
                  disabled={disabled}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  dropDownDirection=""
                  style={[
                    Styles.pink_light,
                    Styles.mt10,
                    { borderWidth: 0, marginBottom: open ? dropdown : 15 },
                  ]}
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
              </>
            )}
            {type === "EMAIL" && (
              <>
                <Text
                  style={[
                    Styles.f_18,
                    Styles.mainFont,
                    Styles.mainColor_text,
                    Styles.mt30,
                  ]}
                >
                  อีเมลที่ต้องการรับ OTP
                </Text>
                <TextInput
                  placeholder="ระบุ Email"
                  style={[
                    Styles.pink_light,
                    Styles.mt10,
                    Styles.w100,
                    Styles.br_5,
                    Styles.mainFont,
                    Styles.black_gray_text,
                    { borderWidth: 0, marginBottom: 15, padding: 14.5 },
                  ]}
                />
              </>
            )}
          </View>
          <TouchableOpacity
            onPress={() => navigate.navigate("InputOTP")}
            style={[
              Styles.w100,
              Styles.p12,
              Styles.mainColor,
              Styles.al_center,
              Styles.br_5,
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
        <FooterSignin/>
        <Text
          style={[
            Styles.f_14,
            Styles.mainFont,
            Styles.mainColor_text,
            Styles.text_center,
            Styles.mb20,
          ]}
        >
          หากหมายเลขโทรศัพท์ หรืออีเมลของท่านไม่ถูกต้อง{"\n"}กรุณาติดต่อ Call
          Center โทร 021 613 000{"\n"}ในวันเวลาทำการ 9:00-18:00 น.
        </Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
