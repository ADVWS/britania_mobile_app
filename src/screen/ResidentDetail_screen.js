import * as React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../globalState";
import { Styles } from "../styles";
import Modal from "react-native-modal";
import MainHeader from "../component/mainHeader";
import Edit_btn from "../component/ResidentDetail_component/edit_btn";
import OTP_btn from "../component/ResidentDetail_component/OTP_btn";
import Status from "../component/ResidentDetail_component/status";
import * as navigate from "../navigator/RootNavigation";
import Script from "../script/OccupantDetail_script";
import mainScript from "../script";
import KEYS from "../KEYS.json";
import Modal_confirm from "../component/modal_confirm";

const ResidentDetail = ({ route }) => {
  const [alert, setAlert] = React.useState(false);
  const [member, setMember] = React.useState(route.params);
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const setUnitMember = useSetRecoilState(Global.unitMember);

  const openConfirm = () => setAlert(true);
  const setBtnMember = (status) => {
    if (status === "active") {
      return <Edit_btn member={member} openConfirm={openConfirm} />;
    } else {
      return (
        <>
          <Edit_btn member={member} openConfirm={openConfirm} />
          <OTP_btn member={member} />
        </>
      );
    }
  };

  const setImage = (img) => {
    if (img !== null) {
      return (
        <Image
          source={{ uri: img }}
          style={[
            { width: 100, height: 100, resizeMode: "cover" },
            Styles.circle,
          ]}
        />
      );
    } else {
      return (
        <Image
          source={require("../../assets/image/Britania-connect-assets/default-img-circle.png")}
          style={[
            { width: 100, height: 100, resizeMode: "cover" },
            Styles.circle,
          ]}
        />
      );
    }
  };

  const confirm = (req) => {
    if (req === "CANCEL") {
      setAlert(false);
    } else {
      Script.memberDeleteProfile(
        member.unitMemberId,
        KEYS.TOKEN,
        member.unitid,
        (res) => {
          var data = mainScript.recoilTranform(unitMember);
          data.unitMember = res;
          setUnitMember(data);
          setAlert(false);
          navigate.navigate("MemberManageIndivi");
        }
      );
    }
  };

  return (
    <View style={[Styles.flex, Styles.al_center]}>
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader
          name={LANG.residentdetail_text_01}
          backto={"MemberManageIndivi"}
        />
        <ScrollView style={[Styles.w100, Styles.p15, Styles.FFF]}>
          <View>
            <View
              style={[
                Styles.w100,
                Styles.p10,
                Styles.br_5,
                Styles.FFF,
                Styles.al_left,
                Styles.boxWithShadow,
                Styles.mb15,
              ]}
            >
              <View style={[Styles.row]}>
                <View style={[Styles.w40]}>
                  {setImage(member.profileImage)}
                  <Text
                    style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}
                  >
                    {LANG.residentdetail_text_04}
                  </Text>
                  <Text
                    style={[
                      Styles.mainFont_x,
                      { color: "#8f8f8f", fontSize: 22 },
                    ]}
                  >
                    {member.mobileNo}
                  </Text>
                </View>
                <View>
                  <View style={Styles.row}>
                    <Status status={member.memberStatus} />
                    <View style={Styles.w10}></View>
                  </View>
                  <View style={[Styles.w100, { marginTop: 7 }]}>
                    <Text
                      style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}
                    >
                      {LANG.residentdetail_text_03}
                    </Text>
                    <Text
                      style={[
                        Styles.f_22,
                        Styles.mainFont_x,
                        { color: "#8f8f8f" },
                      ]}
                    >
                      {member.name}
                    </Text>
                    <Text
                      style={[Styles.f_22, Styles.mainFont_x, Styles.spacing5]}
                    >
                      {LANG.residentdetail_text_05}
                    </Text>
                    <Text
                      style={[
                        Styles.f_22,
                        Styles.mainFont_x,
                        { color: "#8f8f8f" },
                      ]}
                    >
                      {member.email}
                    </Text>
                  </View>
                </View>
              </View>
              {setBtnMember(member.memberStatus)}
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_confirm
          text={`${LANG.residentdetail_text_09} ${member.name}`}
          confirmFunction={confirm}
        />
      </Modal>
    </View>
  );
};

export default ResidentDetail;
