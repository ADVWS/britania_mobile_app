import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import moment from "moment";
import "moment/locale/th";
import { SimpleLineIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import mainScript from "../../script";
import { Styles } from "../../styles";
import { useSetRecoilState, useRecoilState } from "recoil";
import Modal_loading from "../../component/modal_loading";
import Modal from "react-native-modal";
import key from "../../KEYS.json";
import Script from "../../script/caseDetail_script"

import * as Global from "../../globalState";

const HistoryList = () => {
  const [listHistory, setlistHistory] = useRecoilState(Global.dataListHistory);
  const [loading, setLoading] = React.useState(false);
  const gobalData = useSetRecoilState(Global.dataInformDetail);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  function viewDetailOrder(data) {
    gobalData(data);
    setLoading(true)
    Script.homecareGetCaseById(data.id, key.TOKEN, (res) => {
      if (res.homecareGetCaseById && res.homecareGetCaseById !== null) {
        gobalData(res.homecareGetCaseById);
        var paramNav = "SUCCESS";
        setTimeout(() => {
          setLoading(false);
          navigate.navigate("InformOrder", { paramNav });
        }, 100);
      }
    });
  }

  return (
    <View style={[Styles.w100, Styles.p15]}>
      {listHistory.length > 0 ? (
        listHistory.map((item) => (
          <TouchableOpacity
            onPress={() => viewDetailOrder(item)}
            style={[
              Styles.w100,
              Styles.p15,
              Styles.br_5,
              Styles.FFF,
              Styles.boxWithShadow,
              Styles.row,
              Styles.mt10,
            ]}
          >
            <View style={[Styles.w50]}>
              <Text
                style={[
                  Styles.mainColor_text,
                  Styles.f_22,
                  Styles.mainFont_x_db,
                ]}
              >
                {LANG.homecare_text_07} {item.caseNumber}
              </Text>
              <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                {LANG.homecare_text_08}
              </Text>
              <Text
                style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}
              >
                {item.details.length}
              </Text>
              <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                {LANG.homecare_text_09}
              </Text>
              <Text
                style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}
              >
                {moment(item.createdAt).format("DD/MM/YY HH:mm ???.")}
              </Text>
            </View>
            <View style={[Styles.w50, Styles.al_end]}>
              {mainScript.statusTranform(item.status)}
              <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                {" "}
              </Text>
              <Text
                style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}
              >
                {" "}
              </Text>
              <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                {LANG.homecare_text_10}
              </Text>
              <Text
                style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 20 }]}
              >
                {moment(item.createdAt).format("DD/MM/YY")}{" "}
                {item.checkInRangeTime.label}
              </Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View
          style={[
            Styles.w100,
            Styles.al_center,
            Styles.jc_center,
            { height: 400 },
          ]}
        >
          <Image
            source={require("../../../assets/image/empty_case.png")}
            style={{ height: 75, width: 75, tintColor: "#9f9f9f" }}
          />
          <Text
            style={[
              Styles.mainFont,
              Styles.f_20,
              Styles.mt10,
              { color: "#9f9f9f" },
            ]}
          >
            {LANG.homecare_text_05}
          </Text>
        </View>
      )}
      <Modal
        isVisible={loading}
        style={Styles.al_center}
        backdropOpacity={0.25}
      >
        <Modal_loading />
      </Modal>
    </View>
  );
};
export default HistoryList;
