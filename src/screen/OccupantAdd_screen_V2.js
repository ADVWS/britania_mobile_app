import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/ResidentAdd_component/radio_resadd";
import ThaiForm from "../component/OccupantAdd_component/thai_form";
import ForeignForm from "../component/OccupantAdd_component/foreigner_form";
import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";

import * as Global from "../globalState";
import { useSetRecoilState, useRecoilState } from "recoil";
import KEYS from "../KEYS.json";
import Script from "../script/OccupantAdd_script";
import mainScript from "../script";
import Store from "../store";

export default function OccupantAdd({ route }) {
  const [unit, setUnit] = React.useState(route.params);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [type, setType] = React.useState("thai");
  const [uploadImage, setUploadImage] = React.useState("");
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const setUnitMember = useSetRecoilState(Global.unitMember);
  const [alert, setAlert] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");

  const [chosenDate, setChosenDate] = React.useState(new Date());
  const [date, setDate] = React.useState(
    moment().format("DD-MM-YYYY")
  );
  const [rawDate, setRawDate] = React.useState("");
  const [name, setName] = React.useState("");
  const [idcard, setIdcard] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passport, setPassport] = React.useState("");

  const [iosDatepicker, setIosDatepicker] = React.useState(false);

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  function uploadImg(img) {
    setUploadImage(img);
  }

  const checkAdd = () => {
    var checker = [];
    if (name === "") {
      checker.push(false);
    }
    if (mobileNo === "") {
      checker.push(false);
    }
    if (email === "") {
      checker.push(false);
    }
    if (/^[0-9]+$/.test(mobileNo) === false) {
      checker.push(false);
    }
    if (type === "thai") {
      if (idcard === "") {
        checker.push(false);
      }
      if (/^[0-9]+$/.test(idcard) === false) {
        checker.push(false);
      }
      if (idcard.length < 13) {
        checker.push(false);
      }
      if (!mainScript.chkDigitPid(idcard)) {
        checker.push(false);
      }
    } else {
      if (passport === "") {
        checker.push(false);
      }
    }
    if (mobileNo.length < 10) {
      checker.push(false);
    }
    if (checker.indexOf(false) !== -1) {
      setTextAlert(LANG.alert_text_01);
      setAlert(true);
      return;
    }
    var add = {
      unitId: unit.unitId,
      ownerType: "tenant",
      nationType: type,
      name: name,
      mobileNo: mobileNo,
      email: email,
      expiredDate: rawDate,
    };
    if (type == "thai") {
      add.idcard = idcard;
      add.passport = "";
    } else {
      add.passport = passport;
      add.idcard = "";
    }
    console.log(add)
    addMember(add);
  };

  function addMember(add) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    if (uploadImage !== "") {
      var formdata = new FormData();
      var Type = uploadImage.substring(uploadImage.lastIndexOf(".") + 1);
      var Data = {
        uri: uploadImage,
        name: `upload_image`,
        type: `image/${Type}`,
      };
      formdata.append("file", Data);
      formdata.append("target", "profile");
      Store.getLocalStorege(KEYS.TOKEN, (tk) => {
        const token = tk.detail.token;
        mainScript.uploadImage(token, formdata, (res) => {
          add.files = res;
          addData(add);
        });
      });
    } else {
      addData(add);
    }
  }

  function addData(add) {
    Script.memberAddProflie(add, KEYS.TOKEN, unit.unitId, (res) => {
      if (typeof res === "object") {
        setLoading(false);
        var data = mainScript.recoilTranform(unitMember);
        data.unitMember = res.unitUpdate;
        var otp = res.otp;
        otp.mobileNo = add.mobileNo;
        otp.name = add.name;
        otp.unitId = unit.unitId;
        setUnitMember(data);
        navigate.navigate("OccupantAddOTP", otp);
      } else {
        setTextAlert(res);
        setLoading(false);
        setTimeout(() => {
          setAlert(true);
        }, 500);
      }
    });
  }

  const setImage = (img) => {
    if (img) {
      return <ProfilePicCom picture={{ uri: img }} uploadImage={uploadImg} />;
    } else {
      return (
        <ProfilePicCom
          picture={require("../../assets/image/Britania-connect-assets/default-img-circle.png")}
          uploadImage={uploadImg}
        />
      );
    }
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
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.mainColor2]}>
      <MainHeader
        name={LANG.occupantadd_text_01}
        backto={"MemberManageIndivi"}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={[Styles.w100, Styles.h75]}
      >
        <View style={Styles.al_center}>{setImage()}</View>
        <View style={Styles.ml5}>
          <Text style={[Styles.mainFont, Styles.f_24, Styles.black_gray_text]}>
            {LANG.occupantadd_text_02}
          </Text>
          <Radio isSelectType={isSelectType} />
        </View>
        <KeyboardAvoidingView behavior="padding" style={{ marginBottom: 30, height: '70%' }}>
          <Text
            style={[
              Styles.ml5,
              Styles.mt10,
              Styles.mainFont,
              Styles.f_22,
              Styles.black_gray_text,
            ]}
          >
            {LANG.occupantadd_text_05}
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
            {type === "thai" ? LANG.occupantadd_text_06 : LANG.occupantadd_text_11}
          </Text>
          <View style={Styles.al_center}>
            {type === "thai" &&
            <TextInput
              maxLength={13}
              keyboardType={"number-pad"}
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
            }
            {type === "foreign" &&
            <TextInput
              style={[
                Styles.w90,
                Styles.mt5,
                Styles.textfieldbox,
                Styles.f_20,
                Styles.mainFont_x,
                Styles.border_btn2,
              ]}
              onChangeText={setPassport}
            />
            }
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
            {LANG.occupantadd_text_07}
          </Text>
          <View style={Styles.al_center}>
            <TextInput
              maxLength={10}
              keyboardType={"number-pad"}
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
            {LANG.occupantadd_text_08}
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
            {LANG.occupantadd_text_12}
          </Text>
          <View style={Styles.al_center}>
            {Platform.OS !== "ios" ? (
              <DatePicker
                style={[Styles.w90, Styles.mt5, Styles.textfieldbox]}
                date={date} // Initial date from state
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
                  setDate(datein);
                  var newDate = datein.split("-");
                  newDate = `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
                  console.log(newDate)
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
              onPress={() => checkAdd()}
            >
              <Text
                style={[
                  Styles.white_text,
                  Styles.f_24,
                  Styles.mainFont,
                  { marginLeft: "1%" },
                ]}
              >
                {LANG.occupantadd_text_09}
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
              onPress={() => navigate.navigate("MemberManageIndivi")}
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
                {LANG.occupantadd_text_10}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={texAlert} closeModalAlert={closeModalAlert} />
      </Modal>
      <Modal isVisible={loading} style={Styles.al_center}>
        <Modal_loading />
      </Modal>
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
    </View>
  );
}
