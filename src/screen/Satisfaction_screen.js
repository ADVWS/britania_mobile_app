import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";

import * as Global from "../globalState";

import { Styles } from "../styles";
import Modal from "react-native-modal";
import MainHeader from "../component/mainHeader";
import Vote from "../component/Satisfaction_component/vote";
import Key from "../KEYS.json";
import Script from "../script/Satisfaction_script";
import mainScript from "../script";
import Modal_alert from "../component/modal_alert";

const Satisfaction = ({ route }) => {
  const [question, setQuestion] = React.useState(route.params.QUES);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT);
  const [detail, setDetail] = useRecoilState(Global.dataInformDetail);
  const dataInformDetail = useSetRecoilState(Global.dataInformDetail);
  const [rate, setRate] = React.useState({});
  const [comment, setComment] = React.useState("");
  const [mainDetail, setMainDetail] = React.useState(route.params.informDetail);
  const [alert, setAlert] = React.useState(false);
  const [textAlert, setTextAlert] = React.useState("");
  const sendRate = (rate) => {
    console.log("RATE", rate);
    setRate(rate);
  };
  const setImage = (image) => {
    if (image.image) {
      return (
        <Image
          source={{ uri: route.params.mechanic.image }}
          style={[Styles.circle, { height: 100, width: 100 }]}
        />
      );
    } else {
      return (
        <Image
          source={require("../../assets/image/Britania-connect-assets/default-img-circle.png")}
          style={[Styles.circle, { height: 100, width: 100 }]}
        />
      );
    }
  };

  const closeModalAlert = () => setAlert(false)

  const voteCase = () => {
    var mainId = mainDetail.id;
    var detailId = route.params.thisCase.id;
    var checker = false;
    for (var key in rate) {
      if (rate[key] === 0) {
        checker = true;
      }
    }
    if (!checker) {
        Script.homecareCreateCsat(Key.TOKEN, mainId, detailId, rate, comment, (res)=>{
            var reload = mainScript.recoilTranform(detail)
            reload.details.map((item)=>{
                if(item.id === route.params.thisCase.id){
                    item.isRate = true,
                    item.status = "Close"
                }
            })
            dataInformDetail(reload)
            console.log('homecareCreateCsat:::', res)
            var paramNav = 'SUCCESS'
            navigate.navigate('InformOrder', {paramNav})
        })
    } else {
        setTextAlert(LANG.satisfaction_text_06)
        setAlert(true)
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[Styles.flex, Styles.al_center]}
    >
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader
          name={LANG.satisfaction_text_01}
          backto={"InformOrder"}
          param={route.params.paramNav}
        />
        <ScrollView style={[Styles.w100, Styles.FFF]}>
          <View
            style={[
              Styles.w100,
              Styles.p15,
              { borderBottomWidth: 0.5, borderColor: "#DDD" },
            ]}
          >
            {/* <Image source={{ uri: item.image }} style={[Styles.circle, { height: 110, width: 110 }]} /> */}
            <View style={[Styles.w100, Styles.al_center]}>
              {setImage(route.params.mechanic)}
              <Text
                style={[
                  Styles.f_24,
                  Styles.mainFont,
                  Styles.mt10,
                  Styles.text_center,
                ]}
              >
                {route.params.mechanic
                  ? route.params.mechanic.firstnameThai +
                    " " +
                    route.params.mechanic.lastnameThai
                  : "-"}
              </Text>
              <Text
                style={[Styles.f_24, Styles.mainFont, { color: "#8f8f8f" }]}
              >
                {LANG.satisfaction_text_02}
              </Text>
            </View>
            <Text style={[Styles.f_22, Styles.mainFont_x, Styles.mt10]}>
              {LANG.satisfaction_text_03} {LANG.satisfaction_text_04}
            </Text>
          </View>
          <Vote question={question} sendRate={sendRate} LANG={LANGTEXT} />
          <View style={[Styles.w100, Styles.p15]}>
            <Text style={[Styles.f_22, Styles.mainFont_x]}>
              {LANG.satisfaction_text_05}
            </Text>
            <TextInput
              style={[
                Styles.w100,
                Styles.p15,
                Styles.br_5,
                { borderWidth: 0.5, borderColor: "#DDD" },
              ]}
              onChangeText={setComment}
            />
            {!route.params.thisCase.isRate ? (
              <TouchableOpacity
                onPress={() => voteCase()}
                style={[
                  Styles.w100,
                  Styles.p15,
                  Styles.br_5,
                  Styles.mt20,
                  Styles.mb20,
                  Styles.mainColor,
                ]}
              >
                <Text
                  style={[
                    Styles.f_24,
                    Styles.white_text,
                    Styles.mainFont,
                    Styles.text_center,
                  ]}
                >
                  {LANG.occupantadd_text_09}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                disabled={true}
                onPress={() => navigate.navigate("Homecare")}
                style={[
                  Styles.w100,
                  Styles.p15,
                  Styles.br_5,
                  Styles.mt20,
                  Styles.mb20,
                  Styles.DDD,
                ]}
              >
                <Text
                  style={[
                    Styles.f_24,
                    Styles.white_text,
                    Styles.mainFont,
                    Styles.text_center,
                  ]}
                >
                  {LANG.satisfaction_text_07}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={textAlert} closeModalAlert={closeModalAlert} />
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Satisfaction;
