import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from 'react-native-modal'

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/ResidentAdd_component/radio_resadd";
import ThaiForm from "../component/ResidentAdd_component/thai_form";
import ForeignForm from "../component/ResidentAdd_component/foreigner_form";
import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";

import * as Global from "../globalState";
import { useSetRecoilState, useRecoilState } from "recoil";
import KEYS from "../KEYS.json";
import Script from "../script/ResidentAdd_script";
import mainScript from "../script";
import Store from "../store";

export default function ResidentAdd({ route }) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [unit, setUnit] = React.useState(route.params);
  const [uploadImage, setUploadImage] = React.useState("");
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const setUnitMember = useSetRecoilState(Global.unitMember);
  const [alert, setAlert] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");

  const [type, setType] = React.useState("thai");

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  function uploadImg(img) {
    console.log(img)
    setUploadImage(img);
  }

  function addMember(add) {
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
          console.log("IMAGE", res);
          add.files = res
          addData(add);
        });
      });
    } else {
      addData(add);
    }
  }

  function addData(add) {
    if (add.nationType === "thai") {
      Script.memberAddProflie_thai(
        add,
        KEYS.TOKEN,
        unit.unitid,
        (res) => {
          if (typeof res === "object") {
            setLoading(false)
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res.unitUpdate;
            var otp = res.otp;
            otp.mobileNo = add.mobileNo;
            otp.name = add.name;
            otp.unitId = unit.unitId;
            setUnitMember(data);
            navigate.navigate("ResidentAddOTP", otp);
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
      Script.memberAddProflie_foreign(
        add,
        KEYS.TOKEN,
        unit.unitid,
        (res) => {
          if (typeof res === "object") {
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res.unitUpdate;
            var otp = res.otp;
            otp.mobileNo = add.mobileNo;
            otp.name = add.name;
            otp.unitId = unit.unitId;
            setUnitMember(data);
            navigate.navigate("ResidentAddOTP", otp);
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
    if (img) {
        return (<ProfilePicCom picture={{uri: img}} uploadImage={uploadImg}/>)
    } else {
        return (<ProfilePicCom picture={require('../../assets/image/Britania-connect-assets/default-img-circle.png')} uploadImage={uploadImg}/>)
    }
  }

  const closeModalAlert = () => setAlert(false);

  return (
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
      <MainHeader
        name={LANG.residentadd_text_01}
        backto={"MemberManageIndivi"}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={[Styles.w100, Styles.h75]}
      >
        <View style={Styles.al_center}>
          {setImage()}
        </View>
        <View style={Styles.ml5}>
          <Text style={[Styles.mainFont, Styles.f_24, Styles.black_gray_text]}>
            {LANG.residentadd_text_02}
          </Text>
          <Radio isSelectType={isSelectType} />
        </View>
        {type === "thai" && <ThaiForm unit={unit} addMember={addMember}/>}
        {type === "foreign" && <ForeignForm unit={unit} addMember={addMember}/>}
      </ScrollView>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={texAlert} closeModalAlert={closeModalAlert} />
      </Modal>
      <Modal isVisible={loading} style={Styles.al_center}>
        <Modal_loading />
      </Modal>
    </View>
  );
}
