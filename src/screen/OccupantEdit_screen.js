import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/OccupantEdit_component/radio_resadd";
import ThaiForm from "../component/OccupantEdit_component/thai_form";
import ForeignForm from "../component/OccupantEdit_component/foreigner_form";

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

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  function uploadImg(img) {
    setUploadImage(img);
  }

  function saveEdit(edit) {
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
        member.unitid,
        (res) => {
          if (typeof res === "object") {
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res;
            setUnitMember(data);
            navigate.navigate("MemberManageIndivi");
          }
        }
      );
    } else {
      Script.memberUpdateProfile_foreign(
        edit,
        KEYS.TOKEN,
        member.unitid,
        (res) => {
          if (typeof res === "object") {
            var data = mainScript.recoilTranform(unitMember);
            data.unitMember = res;
            setUnitMember(data);
            navigate.navigate("MemberManageIndivi");
          }
        }
      );
    }
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

  return (
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
      <MainHeader name={LANG.occupantedit_text_01} backto={"OccupantDetail"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={[Styles.w100, Styles.h75]}
      >
        <View style={Styles.al_center}>{setImage(member.image)}</View>
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
        {type === "thai" && <ThaiForm item={member} saveDataEdit={saveEdit}/>}
        {type === "foreign" && <ForeignForm item={member} saveDataEdit={saveEdit}/>}
      </ScrollView>
    </View>
  );
};

export default OccupantEdit;
