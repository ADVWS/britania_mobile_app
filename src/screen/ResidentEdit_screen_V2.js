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

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/ResidentEdit_component/radio_resadd";
import ThaiForm from "../component/ResidentEdit_component/thai_form";
import ForeignForm from "../component/ResidentEdit_component/foreigner_form";
import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";

import { useRecoilState, useSetRecoilState } from "recoil";
import KEYS from "../KEYS.json";
import * as Global from "../globalState";
import Script from "../script/ResidentEdit_script";
import mainScript from "../script";
import Store from "../store";

const ResidentEdit = ({ route }) => {
  const [member, setMember] = React.useState(route.params);
  const [type, setType] = React.useState(member.nationType);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const [uploadImage, setUploadImage] = React.useState("");
  const setUnitMember = useSetRecoilState(Global.unitMember);
  const [alert, setAlert] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");

  const [name, setName] = React.useState(member.name);
  const [idcard, setIdcard] = React.useState(member.idcard);
  const [mobileNo, setMobileNo] = React.useState(member.mobileNo);
  const [email, setEmail] = React.useState(member.email);
  const [passport, setPassport] = React.useState(member.passport);

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
    if (/^[0-9]+$/.test(mobileNo) === false) {
      checker.push(false);
    }
    if(type === 'thai'){
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
    if(type == "thai"){
      var edit = {
        name: name,
        idcard: idcard,
        mobileNo: mobileNo,
        email: email,
        nationType: "thai",
        unitMemberId: member.unitMemberId,
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
      };
    }
    saveEdit(edit);
  }

  function saveEdit(edit) {
    console.log("saveEdit:::", edit);
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
    console.log("editData:::", edit);
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
    if (img !== null) {
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

  const closeModalAlert = () => setAlert(false);

  return (
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
      <MainHeader name={LANG.residentedit_text_01} backto={"ResidentDetail"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={[Styles.w100, Styles.h75]}
      >
        <View style={Styles.al_center}>{setImage(member.profileImage)}</View>
        <View style={Styles.ml5}>
          <Text style={[Styles.mainFont, Styles.f_22, Styles.black_gray_text]}>
            {LANG.residentedit_text_03}
          </Text>
          <Radio
            isSelectType={isSelectType}
            type={member.nationType}
            LANG={LANG}
          />
        </View>
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
            {LANG.residentedit_text_06}
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
              value={name}
              onChangeText={(val) => {
                setName(val);
              }}
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
              ? LANG.residentedit_text_07
              : LANG.residentedit_text_12}
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
            {LANG.residentedit_text_08}
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
              value={mobileNo}
              onChangeText={(val) => {
                setMobileNo(val);
              }}
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
            {LANG.residentedit_text_09}
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
              value={email}
              onChangeText={(val) => {
                setEmail(val);
              }}
            />
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
                {LANG.residentedit_text_13}
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
              onPress={() => navigate.navigate("ResidentDetail", member)}
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
                {LANG.residentedit_text_11}
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
    </View>
  );
};

export default ResidentEdit;
