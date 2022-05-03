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
import moment from "moment";
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/OccupantEdit_component/radio_resadd";
import ThaiForm from "../component/OccupantEdit_component/thai_form";
import ForeignForm from "../component/OccupantEdit_component/foreigner_form";
import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";

import { useRecoilState, useSetRecoilState } from "recoil";
import KEYS from "../KEYS.json";
import * as Global from "../globalState";
import Script from "../script/OccupantEdit_script";
import mainScript from "../script";
import Store from "../store";

const OccupantEdit = ({ route }) => {
  const [member, setMember] = React.useState(route.params);
  const [type, setType] = React.useState(member.nationType);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const [uploadImage, setUploadImage] = React.useState("");
  const setUnitMember = useSetRecoilState(Global.unitMember);
  const [alert, setAlert] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");

  const [date, setDate] = React.useState(
    moment(member.expiredDate).format("DD-MM-YYYY")
  );
  const [chosenDate, setChosenDate] = React.useState(
    new Date(member.expiredDate)
  );
  const [rawDate, setRawDate] = React.useState(member.expiredDate);
  const [name, setName] = React.useState(member.name);
  const [idcard, setIdcard] = React.useState(member.idcard);
  const [mobileNo, setMobileNo] = React.useState(member.mobileNo);
  const [email, setEmail] = React.useState(member.email);
  const [passport, setPassport] = React.useState(member.passport)

  const [iosDatepicker, setIosDatepicker] = React.useState(false);

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  function uploadImg(img) {
    setUploadImage(img);
  }

  function checkData() {
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
    if (type === "thai") {
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
      if(passport === ""){
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
    if (type == "thai") {
      var edit = {
        name: name,
        idcard: idcard,
        mobileNo: mobileNo,
        email: email,
        nationType: "thai",
        unitMemberId: member.unitMemberId,
        expiredDate: rawDate,
      };
    } else {
      var edit = {
        name: name,
        passport: passport,
        idcard: member.idcard,
        mobileNo: mobileNo,
        email: email,
        nationType: "foreign",
        unitMemberId: member.unitMemberId,
        expiredDate: rawDate,
      };
    }
    saveEdit(edit);
  }

  function saveEdit(edit) {
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
          edit.files = res;
          editData(edit);
        });
      });
    } else {
      editData(edit);
    }
  }

  function editData(edit) {
    if (edit.nationType === "thai") {
      Script.memberUpdateProfile_thai(
        edit,
        KEYS.TOKEN,
        unitMember.unitId,
        (res) => {
          if (typeof res === "object") {
            setLoading(false);
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res;
            setUnitMember(data);
            navigate.navigate("MemberManageIndivi");
          } else {
            setTextAlert(res);
            setLoading(false);
            setTimeout(() => {
              setAlert(true);
            }, 500);
          }
        }
      );
    } else {
      Script.memberUpdateProfile_foreign(
        edit,
        KEYS.TOKEN,
        unitMember.unitId,
        (res) => {
          if (typeof res === "object") {
            setLoading(false);
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res;
            setUnitMember(data);
            navigate.navigate("MemberManageIndivi");
          } else {
            setTextAlert(res);
            setLoading(false);
            setTimeout(() => {
              setAlert(true);
            }, 500);
          }
        }
      );
    }
  }

  const setImage = (img) => {
    console.log(img);
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
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
      <MainHeader name={LANG.occupantedit_text_01} backto={"OccupantDetail"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={[Styles.w100, Styles.h75]}
      >
        <View style={Styles.al_center}>{setImage(member.profileImage)}</View>
        <View style={Styles.ml5}>
          <Text style={[Styles.mainFont, Styles.f_22, Styles.black_gray_text]}>
            {LANG.occupantedit_text_03}
          </Text>
          <Radio
            isSelectType={isSelectType}
            type={member.nationType}
            LANG={LANG}
          />
        </View>
        {/* {type === "thai" && <ThaiForm item={member} saveDataEdit={saveEdit}/>}
        {type === "foreign" && <ForeignForm item={member} saveDataEdit={saveEdit}/>} */}
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
            {LANG.occupantedit_text_06}
          </Text>
          <View style={Styles.al_center}>
            <TextInput
              style={[
                Styles.w90,
                Styles.mt10,
                Styles.textfieldbox,
                Styles.f_20,
                Styles.mainFont_x,
                { borderWidth: 2, borderColor: "#DDD" },
              ]}
              value={name}
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
            {type === "thai"
              ? LANG.occupantedit_text_07
              : LANG.occupantedit_text_12}
          </Text>
          <View style={Styles.al_center}>
            {type === "thai" ? (
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
                value={idcard}
                onChangeText={(val) => {
                  setIdcard(val);
                }}
              />
            ) : (
              <TextInput
                style={[
                  Styles.w90,
                  Styles.mt10,
                  Styles.textfieldbox,
                  Styles.f_20,
                  Styles.mainFont_x,
                  Styles.border_btn2,
                ]}
                value={
                  passport !== "null"
                    ? passport !== null
                      ? passport
                      : null
                    : "-"
                }
                onChangeText={setPassport}
              />
            )}
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
            {LANG.occupantedit_text_08}
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
                { borderWidth: 2, borderColor: "#DDD" },
              ]}
              value={mobileNo}
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
            {LANG.occupantedit_text_09}
          </Text>
          <View style={Styles.al_center}>
            <TextInput
              style={[
                Styles.w90,
                Styles.mt5,
                Styles.textfieldbox,
                Styles.f_20,
                Styles.mainFont_x,
                { borderWidth: 2, borderColor: "#DDD" },
              ]}
              value={email}
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
            {LANG.occupantedit_text_13}
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
              onPress={() => checkData()}
            >
              <Text
                style={[
                  Styles.white_text,
                  Styles.f_24,
                  Styles.mainFont,
                  { marginLeft: "1%" },
                ]}
              >
                {LANG.occupantedit_text_10}
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
                  Styles.mainColor_text,
                  Styles.f_24,
                  Styles.mainFont,
                  { marginLeft: "1%" },
                ]}
              >
                {LANG.occupantedit_text_11}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
      <Modal isVisible={loading} style={Styles.al_center}>
        <Modal_loading />
      </Modal>
    </View>
  );
};

export default OccupantEdit;
