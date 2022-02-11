import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import moment from "moment";
import { Styles } from "../styles"; 
import Modal from "react-native-modal";
import MainHeader from "../component/mainHeader";
import Edit_btn from "../component/OccupantDetail_component/edit_btn";
import OTP_btn from "../component/OccupantDetail_component/OTP_btn";
import Status from "../component/OccupantDetail_component/status";
import * as navigate from "../navigator/RootNavigation";
import Script from "../script/OccupantDetail_script";
import mainScript from "../script";
import KEYS from "../KEYS.json"
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../globalState"
import Modal_confirm from "../component/modal_confirm"

const OccupantDetail = ({ route }) => {

  // const callback = useRecoilState(Global.callbackAccount);alert
  const [switchInform, setSwitchInform] = React.useState(route.params.allowHomecare)
  const [alert, setAlert] = React.useState(false)
  const [member, setMember] = React.useState(route.params)
  const [unitMember, setUnitMembers] = useRecoilState(Global.unitMember);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const setUnitMember = useSetRecoilState(Global.unitMember);

  const informSwitch = (val) => {
    console.log(val)
    var edit = {
      unitMemberId: member.unitMemberId,
      allowHomecare: val
    }
    Script.memberUpdateAllowHomecare(edit, KEYS.TOKEN, member.unitid, (res)=>{
      console.log('RESPONE==>', res)
      var newMember = mainScript.recoilTranform(member)
      newMember.allowHomecare = val
      setMember(newMember)
      setSwitchInform(val)
    })
  }
  const openConfirm = () => setAlert(true)
  const setBtnMember = (status) => {
    if (status === 'active') {
      return (<Edit_btn member={member} openConfirm={openConfirm}/>)
    } else {
      return (<OTP_btn member={member} />)
    }
  }

  const setImage = (img) => {
    if (img) {
      return (<Image
        source={{ uri: img }}
        style={[
          { width: 100, height: 100, resizeMode: "cover" },
          Styles.circle,
        ]} />)
    } else {
      return (<Image
        source={require('../../assets/image/Britania-connect-assets/default-img-circle.png')}
        style={[
          { width: 100, height: 100, resizeMode: "cover" },
          Styles.circle,
        ]} />)
    }
  }

  const confirm = (req) => {
    if (req === "CANCEL") {
      setAlert(false);
    } else {
      Script.memberDeleteProfile(member.unitMemberId, KEYS.TOKEN, member.unitid,(res)=>{
        var data = mainScript.recoilTranform(unitMember)
        data.unitMember = res
        setUnitMember(data)
        setAlert(false);
        navigate.navigate("MemberManageIndivi")
      })
    }
  }

  return (
    <View style={[Styles.flex, Styles.al_center]}>
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={"ผู้เช่า"} backto={"MemberManageIndivi"} />
        <ScrollView style={[Styles.w100]}>
          <View style={[Styles.w100]}>
            <View style={[Styles.p12, Styles.mainColor2]}>
              <View
                style={[
                  Styles.w100,
                  Styles.p15,
                  Styles.br_5,
                  Styles.FFF,
                  Styles.al_left,
                  Styles.boxWithShadow,
                  Styles.mb15,
                ]}>
                <View style={[Styles.row]}>
                  <View style={[Styles.w40]}>
                    {setImage(member.image)}
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                      เบอร์โทรศัพท์
                    </Text>
                    <Text
                      style={[
                        Styles.mainFont,
                        { color: "#8f8f8f", fontSize: 22 },
                      ]}>
                      {member.mobileNo}
                    </Text>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                      สิทธิ์หมดอายุ
                    </Text>
                    <Text
                      style={[
                        Styles.mainFont,
                        { color: "#8f8f8f", fontSize: 22 },
                      ]}>
                      {moment(member.expiredDate).format("DD/MM/YYYY")}
                    </Text>
                  </View>
                  <View>
                    <View style={Styles.row}>
                      <Status status={member.memberStatus} />
                      <View style={Styles.w10}></View>
                    </View>
                    <View style={[Styles.w100, { marginTop: 6 }]}>
                      <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                        ชื่อ-นามสกุล
                      </Text>
                      <Text
                        style={[
                          Styles.f_22,
                          Styles.mainFont,
                          { color: "#8f8f8f" },
                        ]}>
                        {member.name}
                      </Text>
                      <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                        อีเมล
                      </Text>
                      <Text
                        style={[
                          Styles.f_22,
                          Styles.mainFont,
                          { color: "#8f8f8f" },
                        ]}>
                        {member.email}
                      </Text>
                    </View>
                  </View>
                </View>
                {setBtnMember(member.memberStatus)}
              </View>
            </View>
            <View style={[Styles.p15 ,Styles.mainColor2]}>
              <Text style={[Styles.mainFont, Styles.mainColor_text3, Styles.f_26, Styles.mt10]}>จัดการเมนู</Text>
              <Text style={[Styles.mainFont, Styles.f_22, Styles.mt5, { color: '#9f9f9f' }]}>เลือกเมนูที่ต้องการให้ผู้เช่าสามารถมองเห็นได้</Text>
              <View style={[Styles.w100, Styles.FFF, Styles.p20, Styles.br_5, Styles.boxWithShadow, Styles.row, Styles.mt10]}>
                <View style={[Styles.w50, Styles.jc_center]}>
                  <Text style={[Styles.f_24, Styles.mainFont_x]}>
                    แจ้งซ่อม
                  </Text>
                </View>
                <View style={[Styles.w50, Styles.al_end]}>
                  <Switch
                    trackColor={{ false: "#767577", true: "#cc8e93" }}
                    thumbColor={switchInform ? "#bb6a70" : "#f4f3f4"}
                    onValueChange={informSwitch}
                    value={switchInform}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_confirm text={`ยืนยันการลบผู้เช่า ${member.name}`} confirmFunction={confirm}/>
      </Modal>
    </View>
  );
};

export default OccupantDetail;
