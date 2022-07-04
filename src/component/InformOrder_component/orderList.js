import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  PixelRatio,
} from "react-native";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import Key from "../../KEYS.json";
import Script from "../../script/Satisfaction_script";
import mainScript from "../../script";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";
import Modal from "react-native-modal";
import moment from "moment";

const OrderList = ({ data, index, route, informDetail }) => {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT);
  const [zoom, setZoom] = React.useState(false);
  const [izoom, setiZoom] = React.useState("");
  const [detailId, setDetailId] = React.useState("");


  var paramNav = route;

  console.log("==>", data.files);

  function gotoResponsible(param, _case) {
    var mechanic = param;
    var _CASE = _case;
    navigate.navigate("Responsible", { paramNav, mechanic, _CASE });
  }

  function gotoOnsite(param, _case) {
    var mechanic = param;
    var _CASE = _case;
    navigate.navigate("Onsite", { paramNav, mechanic, _CASE });
  }

  function gotoRepiairList(param, _case) {
    var mechanic = param;
    var _CASE = mainScript.recoilTranform(_case);
    _CASE.detailLog.map((item) => {
      item.sort = moment(item.date).unix();
    });
    var detailLog = _CASE.detailLog;
    detailLog.sort((b, a) => {
      return a.sort - b.sort;
    });
    _CASE.detailLog = detailLog;
    navigate.navigate("RepiairList", { paramNav, mechanic, _CASE });
  }

  function gotoSatisfaction(param) {
    console.log("gotoSatisfaction==>>>>", param);
    Script.homecareAllCsatQuestion(Key.TOKEN, (res) => {
      var mechanic = param;
      var QUES = res;
      var thisCase = data;
      navigate.navigate("Satisfaction", {
        paramNav,
        mechanic,
        QUES,
        informDetail,
        thisCase,
      });
    });
  }

  const RemoteImage = ({ uri, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0);

    Image.getSize(uri, (width, height) => {
      setDesiredHeight((desiredWidth / width) * height);
    });
    return desiredHeight > 926 ? (
      <Image
        source={require("../../../assets/image_over.png")}
        style={{
          width: 420,
          height: 400,
        }}
      />
    ) : (
      <Image
        source={{ uri }}
        style={{
          width: desiredWidth,
          height: desiredHeight,
        }}
      />
    );
  };

  function zoomImage(img, id) {
    console.log(id)
    setZoom(true);
    setiZoom(img);
    setDetailId(id)
  }

  return (
    <>
      <View
        style={[
          Styles.w100,
          Styles.p15,
          Styles.br_5,
          Styles.mainColorF9,
          Styles.mt5,
          Styles.mb10,
        ]}
      >
        <Text
          style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont_x_db]}
        >
          {LANG.homecare_text_11} {index}
        </Text>

        <View style={[Styles.w100, Styles.row, Styles.mt10]}>
          <View style={[Styles.w50]}>
            <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
              {LANG.homecare_text_12}
            </Text>
            <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
              {data.category !== null
                ? mainScript.setTypeInform(data.category.id, LANG)
                : "-"}
            </Text>
          </View>
          <View style={[Styles.w50, Styles.al_start]}>
            <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
              {LANG.homecare_text_13}
            </Text>
            <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
              {data.isRate ? LANG.homecare_text_20 : LANG.homecare_text_14}
            </Text>
          </View>
        </View>
        <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
          {LANG.homecare_text_15}
        </Text>
        <Text style={[Styles.mainFont, Styles.f_20, { color: "#8f8f8f" }]}>
          {data.description}
        </Text>
        {data.files.length > 0 ? (
          <>
            <Text
              style={[
                Styles.f_22,
                Styles.mainFont,
                Styles.spacing5,
                Styles.mt10,
              ]}
            >
              {LANG.homecare_text_16}
            </Text>
            <ScrollView style={[Styles.w100, Styles.mt5]} horizontal={true}>
              {data.files.map((item) => (
                <>
                  {item.status === "Pending" && (
                    <TouchableOpacity
                      onPress={() => zoomImage(item.homecareImageSrc, item.id)}
                    >
                      <Image
                        source={{ uri: item.homecareImageSrc }}
                        style={[
                          Styles.br_5,
                          { width: 120, height: 120, marginRight: 10 },
                        ]}
                      />
                    </TouchableOpacity>
                  )}
                </>
              ))}
            </ScrollView>
          </>
        ) : null}
        {data.status !== "Pending" && (
          <TouchableOpacity
            onPress={() => gotoResponsible(data.homecareName, data)}
            style={[
              Styles.w100,
              Styles.p20,
              Styles.row,
              Styles.br_5,
              Styles.mt20,
              { backgroundColor: "#ffecec" },
            ]}
          >
            <View style={[Styles.w80]}>
              <Text
                style={[
                  Styles.f_22,
                  Styles.mainColor_text,
                  Styles.mainFont,
                  Styles.mt5,
                ]}
              >
                {LANG.homecare_text_17}
              </Text>
            </View>
            <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                style={Styles.mainColor_text}
              />
            </View>
          </TouchableOpacity>
        )}
        {data.status !== "Pending" && data.status !== "Assign" && (
          <TouchableOpacity
            onPress={() => gotoOnsite(data.homecareName, data)}
            style={[
              Styles.w100,
              Styles.p20,
              Styles.row,
              Styles.br_5,
              Styles.mt10,
              { backgroundColor: "#ffecec" },
            ]}
          >
            <View style={[Styles.w80]}>
              <Text
                style={[
                  Styles.f_22,
                  Styles.mainColor_text,
                  Styles.mainFont,
                  Styles.mt5,
                ]}
              >
                {LANG.homecare_text_18}
              </Text>
            </View>
            <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                style={Styles.mainColor_text}
              />
            </View>
          </TouchableOpacity>
        )}
        {data.status !== "Pending" &&
          data.status !== "Assign" &&
          data.status !== "Checking" && (
            <TouchableOpacity
              onPress={() => gotoRepiairList(data.homecareName, data)}
              style={[
                Styles.w100,
                Styles.p20,
                Styles.row,
                Styles.br_5,
                Styles.mt10,
                Styles.mb10,
                { backgroundColor: "#ffecec" },
              ]}
            >
              <View style={[Styles.w80]}>
                <Text
                  style={[
                    Styles.f_22,
                    Styles.mainColor_text,
                    Styles.mainFont,
                    Styles.mt5,
                  ]}
                >
                  {LANG.homecare_text_19}
                </Text>
              </View>
              <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  style={Styles.mainColor_text}
                />
              </View>
            </TouchableOpacity>
          )}
        {route === "SUCCESS" && data.isRate !== true && (
          <TouchableOpacity
            onPress={() => gotoSatisfaction(data.homecareName)}
            style={[
              Styles.w100,
              Styles.p15,
              Styles.mt10,
              Styles.mainColor,
              Styles.br_5,
              Styles.al_center,
              { marginBottom: 20 },
            ]}
          >
            <Text
              style={[
                Styles.f_24,
                Styles.white_text,
                Styles.mainFont,
                Styles.mt5,
              ]}
            >
              {LANG.homecare_text_21}
            </Text>
          </TouchableOpacity>
        )}
        {route === "UNSUCCESS" &&
          data.isRate !== true &&
          data.status == "Close" && (
            <TouchableOpacity
              onPress={() => gotoSatisfaction(data.homecareName)}
              style={[
                Styles.w100,
                Styles.p15,
                Styles.mainColor,
                Styles.br_5,
                Styles.al_center,
                { marginBottom: 20 },
              ]}
            >
              <Text
                style={[
                  Styles.f_24,
                  Styles.white_text,
                  Styles.mainFont,
                  Styles.mt5,
                ]}
              >
                {LANG.homecare_text_21}
              </Text>
            </TouchableOpacity>
          )}
      </View>
      <Modal
        onBackdropPress={() => setZoom(false)}
        isVisible={zoom}
        style={[Styles.al_center, Styles.jc_center]}
      >
        <RemoteImage
          uri={izoom}
          desiredWidth={Dimensions.get("window").width - 60}
        />
      </Modal>
    </>
  );
};

export default OrderList;
