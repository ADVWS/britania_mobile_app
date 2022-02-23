import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";

import { Styles } from "../../styles";
import * as Global from "../../globalState";
import moment from "moment";

import { useSetRecoilState, useRecoilState } from "recoil";
import * as navigate from "../../navigator/RootNavigation";
import mainScript from "../../script";
import Script from "../../script/OccupantAdd_script";
import KEYS from "../../KEYS.json";
import Modal_alert from "../../component/modal_alert";

export default function thai_form(unit) {
  console.log("user", unit);
  const [chosenDate, setChosenDate] = React.useState(new Date());
  const [rawDate, setRawDate] = React.useState("");
  const [name, setName] = React.useState("");
  const [idcard, setIdcard] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const setUnitMember = useSetRecoilState(Global.unitMember);
  const [alert, setAlert] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");

  const [iosDatepicker, setIosDatepicker] = React.useState(false);

  const addData = () => {
    var checker = [];
    if (name === "") {
      checker.push(false);
    }
    if (idcard === "") {
      checker.push(false);
    }
    if (mobileNo === "") {
      checker.push(false);
    }
    if (email === "") {
      checker.push(false);
    }
    if (rawDate === ""){
      checker.push(false);
    }
    if (checker.indexOf(false) !== -1) {
      setTextAlert("กรุณาระบุข้อมูลให้ครบถ้วน");
      setAlert(true);
      return;
    }
    var add = {
      unitId: unit.unit.unitId,
      ownerType: "tenant",
      nationType: "thai",
      passport: null,
      name: name,
      idcard: idcard,
      mobileNo: mobileNo,
      email: email,
      expiredDate: rawDate,
    };
    Script.memberAddProflie_thai(add, KEYS.TOKEN, unit.unit.id, (res) => {
      console.log(res);
      if (typeof res === "object") {
        var data = mainScript.recoilTranform(unitMember);
        data.unitMember = res.unitUpdate;
        var otp = res.otp;
        otp.mobileNo = mobileNo;
        otp.name = name;
        otp.unitId = unit.unit.unitId;
        setUnitMember(data);
        navigate.navigate("OccupantAddOTP", otp);
      }
    });
  };

  const onChangeIosPicker = (event, selectedDate) => {
    setChosenDate(selectedDate);
  };
  const onSelectIosPicker = () => {
    setRawDate(chosenDate);
    setIosDatepicker(false);
  };

  const closeModalAlert = () => setAlert(false);

  return (
    <>
      <KeyboardAvoidingView behavior="padding" style={{ marginBottom: 30 }}>
        <Text
          style={[
            Styles.ml5,
            Styles.mt10,
            Styles.mainFont,
            Styles.f_22,
            Styles.black_gray_text,
          ]}
        >
          ชื่อ-นามสกุล
        </Text>
        <View style={Styles.al_center}>
          <TextInput
            style={[
              Styles.w90,
              Styles.mt10,
              Styles.textfieldbox,
              Styles.f_20,
              Styles.mainFont_x,
              Styles.border_btn2,
            ]}
            onChangeText={setName}
          />
        </View>
        <Text
          style={[
            Styles.ml5,
            Styles.mt10,
            Styles.mainFont,
            Styles.f_22,
            Styles.black_gray_text,
          ]}
        >
          เลขประจำตัวประชาชน
        </Text>
        <View style={Styles.al_center}>
          <TextInput
            style={[
              Styles.w90,
              Styles.mt10,
              Styles.textfieldbox,
              Styles.f_20,
              Styles.mainFont_x,
              Styles.border_btn2,
            ]}
            onChangeText={setIdcard}
          />
        </View>
        <Text
          style={[
            Styles.ml5,
            Styles.mt10,
            Styles.mainFont,
            Styles.f_22,
            Styles.black_gray_text,
          ]}
        >
          เบอร์โทรศัพท์
        </Text>
        <View style={Styles.al_center}>
          <TextInput
            style={[
              Styles.w90,
              Styles.mt5,
              Styles.textfieldbox,
              Styles.f_20,
              Styles.mainFont_x,
              Styles.border_btn2,
            ]}
            onChangeText={setMobileNo}
          />
        </View>
        <Text
          style={[
            Styles.ml5,
            Styles.mt10,
            Styles.mainFont,
            Styles.f_22,
            Styles.black_gray_text,
          ]}
        >
          อีเมล
        </Text>
        <View style={Styles.al_center}>
          <TextInput
            style={[
              Styles.w90,
              Styles.mt5,
              Styles.textfieldbox,
              Styles.f_20,
              Styles.mainFont_x,
              Styles.border_btn2,
            ]}
            onChangeText={setEmail}
          />
        </View>
        <Text
          style={[
            Styles.ml5,
            Styles.mt10,
            Styles.mainFont,
            Styles.f_22,
            Styles.black_gray_text,
          ]}
        >
          วันที่สิทธิ์หมดอายุ
        </Text>
        <View style={Styles.al_center}>
          {Platform.OS !== "ios" ? (
            <DatePicker
              style={[Styles.w90, Styles.mt5, Styles.textfieldbox]}
              //date={chosenDate} // Initial date from state
              mode="date" // The enum of date, datetime and time
              format="DD-MM-YYYY"
              minDate="01-01-1970"
              maxDate="01-01-2500"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateText: { color: "#000" },
                dateIcon: {
                  display: "none",
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                  width: 0,
                  height: 0,
                },
                dateInput: {
                  marginLeft: 0,
                },
              }}
              onDateChange={(datein) => {
                var newDate = datein.split("-");
                newDate = `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
                setRawDate(newDate);
              }}
            />
          ) : (
            <TouchableOpacity
              onPress={() => setIosDatepicker(true)}
              style={[
                Styles.w90,
                Styles.mt5,
                Styles.textfieldbox,
                Styles.p15,
                { borderWidth: 2, borderColor: "#DDD" },
              ]}
            >
              <Text>
                {rawDate !== ""
                  ? moment(rawDate).format("DD/MM/YYYY")
                  : rawDate}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={Styles.al_center}>
          <TouchableOpacity
            style={[Styles.w90, Styles.row, Styles.mt20, Styles.confirm_btn]}
            onPress={() => addData()}
          >
            <Text
              style={[
                Styles.white_text,
                Styles.f_24,
                Styles.mainFont,
                { marginLeft: "1%" },
              ]}
            >
              บันทึก
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.w90,
              Styles.row,
              Styles.mt10,
              Styles.transparent,
              Styles.al_center,
              Styles.br_5,
              Styles.border_btn,
              Styles.p15,
              Styles.jc_center,
            ]}
            onPress={() => navigate.navigate("OccupantDetail", member)}
          >
            <Text
              style={[
                Styles.text_center,
                Styles.mainColor_text3,
                Styles.f_24,
                Styles.mainFont,
                { marginLeft: "1%" },
              ]}
            >
              ยกเลิก
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Modal
        backdropOpacity={0.3}
        isVisible={iosDatepicker}
        onBackdropPress={() => setIosDatepicker(false)}
        style={(Styles.al_center, Styles.jc_end)}
      >
        <View
          style={[
            Styles.boxWithShadow,
            { width: "120%", right: "10%", top: 20 },
          ]}
        >
          <View
            style={[Styles.row, Styles.w100, { backgroundColor: "#F7F7F7" }]}
          >
            <View style={[Styles.w50]}>
              <TouchableOpacity
                style={[Styles.w50, Styles.p5, { left: "15%" }]}
                onPress={() => setIosDatepicker(false)}
              >
                <Text
                  style={[Styles.black_gray_text, Styles.mainFont, Styles.f_24]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[Styles.w55, Styles.al_end]}>
              <TouchableOpacity
                style={[Styles.w50, Styles.p5]}
                onPress={() => onSelectIosPicker()}
              >
                <Text
                  style={[Styles.black_gray_text, Styles.mainFont, Styles.f_24]}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[Styles.boxWithShadow, { backgroundColor: "#F7F7F7" }]}>
            <DateTimePicker
              testID="dateTimePicker"
              value={chosenDate}
              textColor={"#2b2b2b"}
              mode={"date"}
              //is24Hour={true}
              display="spinner"
              minimumDate={new Date()}
              locale="en-en"
              onChange={onChangeIosPicker}
            />
          </View>
        </View>
      </Modal>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={texAlert} closeModalAlert={closeModalAlert} />
      </Modal>
    </>
  );
}
