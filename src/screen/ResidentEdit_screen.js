import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from 'react-native-modal'

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

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  function uploadImg(img) {
    setUploadImage(img);
  }

  function saveEdit(edit) {
    return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
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
          edit.files = res
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
            setLoading(false)
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res;
            setUnitMember(data);
            navigate.navigate("MemberManageIndivi");
          } else {
            setTextAlert(res)
            setLoading(false)
            setTimeout(() => {
              setAlert(true)
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
            setLoading(false)
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res;
            setUnitMember(data);
            navigate.navigate("MemberManageIndivi");
          } else {
            setTextAlert(res)
            setLoading(false)
            setTimeout(() => {
              setAlert(true)
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
        {type === "thai" && <ThaiForm item={member} saveDataEdit={saveEdit} />}
        {type === "foreign" && (
          <ForeignForm item={member} saveDataEdit={saveEdit} />
        )}
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
