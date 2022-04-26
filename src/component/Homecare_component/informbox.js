import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import moment from "moment";
import "moment/locale/th";
import mainScript from "../../script";
import Modal from "react-native-modal";
import Script from "../../script/caseDetail_script";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import { useSetRecoilState, useRecoilState } from "recoil";
import Modal_loading from "../../component/modal_loading";
import key from "../../KEYS.json";
import * as Global from "../../globalState";

const InformBox = ({ data }) => {
  const gobalData = useSetRecoilState(Global.dataInformDetail);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [loading, setLoading] = React.useState(false);

  function viewDetailOrder() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
    Script.homecareGetCaseById(data.id, key.TOKEN, (res) => {
      console.log("res.homecareGetCaseById:::=>", res.homecareGetCaseById);
      if (res.homecareGetCaseById && res.homecareGetCaseById !== null) {
        gobalData(res.homecareGetCaseById);
        var paramNav = "UNSUCCESS";
        setTimeout(() => {
          setLoading(false)
          navigate.navigate("InformOrder", { paramNav });
        }, 100);
      }
    });
  }
  return (
    <>
      <TouchableOpacity
        onPress={() => viewDetailOrder()}
        style={[
          Styles.w100,
          Styles.p15,
          Styles.br_5,
          Styles.FFF,
          Styles.boxWithShadow,
          Styles.row,
          Styles.mt10,
          Styles.mb10,
        ]}
      >
        <View style={[Styles.w50]}>
          <Text
            style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont_x_db]}
          >
            {LANG.homecare_text_07} {data.caseNumber}
          </Text>
          <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
            {LANG.homecare_text_08}
          </Text>
          <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
            {data.details.length}
          </Text>
          <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
            {LANG.homecare_text_09}
          </Text>
          <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}>
            {moment(data.createdAt).format("DD/MM/YY HH:mm น.")}
          </Text>
        </View>
        <View style={[Styles.w50, Styles.al_end]}>
          {mainScript.statusTranform(data.status)}
          <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}> </Text>
          <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
            {" "}
          </Text>
          <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
            {LANG.homecare_text_10}
          </Text>
          <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}>
            {moment(data.checkInDate).format("DD/MM/YY")}{" "}
            {data.checkInRangeTime !== null ? data.checkInRangeTime.label : "-"}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={loading}
        style={Styles.al_center}
        backdropOpacity={0.25}
      >
        <Modal_loading />
      </Modal>
    </>
  );
};

export default InformBox;
