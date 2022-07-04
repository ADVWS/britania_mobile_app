import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";

import * as Global from "../globalState";

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";
import moment from "moment";
import Modal from "react-native-modal";
import Script from "../script";

const RepiairList = ({ route }) => {
  const [homecareName, setHomecareName] = React.useState(route.params.mechanic);
  const [userCase, setUserCase] = React.useState(route.params._CASE);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT);
  const [zoom, setZoom] = React.useState(false);
  const [izoom, setiZoom] = React.useState("");
  const [avtiveStatus, setAvtiveStatus] = React.useState([
    "Inprocess",
    "ReInprocess",
    "Hold-Customer",
    "Close",
  ]);

  function zoomImage(img) {
    setZoom(true);
    setiZoom(img);
  }

  console.log(userCase);

  const RemoteImage = ({ uri, desiredWidth }) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0);

    Image.getSize(uri, (width, height) => {
      setDesiredHeight((desiredWidth / width) * height);
    });

    return desiredHeight > 926 ? (
      <Image
        source={require("../../assets/image_over.png")}
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

  return (
    <View style={[Styles.flex, Styles.al_center]}>
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader
          name={LANG.homecare_text_19}
          backto={"InformOrder"}
          param={route.params.paramNav}
        />
        <ScrollView style={[Styles.w100]}>
          {homecareName !== null ? (
            <>
              <View style={[Styles.w100, Styles.p15, Styles.FFF]}>
                <Text
                  style={[
                    Styles.f_24,
                    Styles.mainFont,
                    Styles.mainColor_text,
                    Styles.mb10,
                  ]}
                >
                  {LANG.homecare_text_22}
                </Text>
                <View style={[Styles.w100, Styles.row]}>
                  <View style={[Styles.w35, Styles.jc_center]}>
                    {/* <Image source={{ uri: item.image }} style={[Styles.circle, { height: 110, width: 110 }]} /> */}
                    {homecareName.homecareEmployeeImageSrc && homecareName.homecareEmployeeImageSrc !== null? (
                      <Image
                        source={{ uri: homecareName.homecareEmployeeImageSrc }}
                        style={[Styles.circle, { height: 100, width: 100 }]}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/image/Britania-connect-assets/default-img-circle.png")}
                        style={[Styles.circle, { height: 100, width: 100 }]}
                      />
                    )}
                  </View>
                  <View style={[Styles.w80]}>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5]}>
                      {LANG.homecare_text_26}
                    </Text>
                    <Text
                      style={[
                        Styles.f_22,
                        Styles.mainFont,
                        Styles.mt5,
                        { color: "#8f8f8f" },
                      ]}
                    >
                      {LANGTEXT === "TH"
                        ? homecareName.firstnameThai
                        : homecareName.firstnameEng}{" "}
                      {LANGTEXT === "TH"
                        ? homecareName.lastnameThai
                        : homecareName.lastnameEng}
                    </Text>
                    <View style={[Styles.w100, Styles.row, Styles.mt5]}>
                      <View style={[Styles.w45]}>
                        <Text
                          style={[Styles.f_22, Styles.mainFont, Styles.mt5]}
                        >
                          {LANG.homecare_text_23}
                        </Text>
                        <Text
                          style={[
                            Styles.f_22,
                            Styles.mainFont,
                            Styles.mt5,
                            { color: "#8f8f8f" },
                          ]}
                        >
                          {homecareName.workPhone}
                        </Text>
                      </View>
                      <View style={[Styles.w50]}>
                        <Text
                          style={[Styles.f_22, Styles.mainFont, Styles.mt5]}
                        >
                          {LANG.homecare_text_24}
                        </Text>
                        <Text
                          style={[
                            Styles.f_22,
                            Styles.mainFont,
                            Styles.mt5,
                            { color: "#8f8f8f" },
                          ]}
                        >
                          {homecareName.lineId}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[Styles.w100, Styles.mt10, { height: "100%" }]}>
                {userCase.detailLog.map((item) => (
                  <>
                    {avtiveStatus.indexOf(item.status) !== -1 && (
                      <View
                        style={[
                          Styles.w100,
                          Styles.p15,
                          Styles.FFF,
                          Styles.mb10,
                        ]}
                      >
                        <View style={[Styles.w100, Styles.row]}>
                          <View style={[Styles.w50]}>
                            <Text
                              style={[
                                Styles.mainFont,
                                Styles.mt15,
                                { fontSize: 22 },
                              ]}
                            >
                              {LANG.homecare_text_38}
                            </Text>
                          </View>
                          <View
                            style={[Styles.w50, Styles.al_end, Styles.mt10]}
                          >
                            <View
                              style={[
                                Styles.circle,
                                Styles.al_center,
                                Styles.jc_center,
                              ]}
                            >
                              <Text
                                style={[
                                  Styles.mainFont_x,
                                  Styles.mt5,
                                  {
                                    color: "#267bbf",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    fontSize: 20,
                                  },
                                ]}
                              >
                                {Script.statusTranform(item.status)}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Text
                          style={[
                            Styles.mainFont,
                            { color: "#8f8f8f", fontSize: 22 },
                          ]}
                        >
                          {route.params.paramNav == "UNSUCCESS"
                            ? item.date !== null
                              ? moment(item.date).format("DD/MM/YYYY HH:mm") +
                                " น."
                              : "-"
                            : item.date !== null
                            ? moment(item.date).format("DD/MM/YYYY HH:mm") +
                              " น."
                            : "-"}
                        </Text>
                        <Text
                          style={[
                            Styles.mainFont,
                            Styles.mt10,
                            { fontSize: 22 },
                          ]}
                        >
                          {LANG.homecare_text_30}
                        </Text>
                        <Text
                          style={[
                            Styles.mainFont,
                            Styles.mt5,
                            { color: "#8f8f8f", fontSize: 22 },
                          ]}
                        >
                          {item.remark ? item.remark : "-"}
                        </Text>
                        {item.files.length > 0 ? (
                          <>
                            <Text
                              style={[
                                Styles.mainFont,
                                Styles.mt10,
                                { fontSize: 22 },
                              ]}
                            >
                              {LANG.homecare_text_16}
                            </Text>
                            <ScrollView
                              style={[Styles.w100, Styles.mt10]}
                              horizontal={true}
                            >
                              {item.files.map((img, index) => (
                                <>
                                  <TouchableOpacity
                                    onPress={() =>
                                      zoomImage(img.homecareImageSrc)
                                    }
                                  >
                                    <Image
                                      source={{ uri: img.homecareImageSrc }}
                                      style={[
                                        Styles.br_5,
                                        {
                                          width: 120,
                                          height: 120,
                                          marginRight: 10,
                                        },
                                      ]}
                                    />
                                  </TouchableOpacity>
                                </>
                              ))}
                            </ScrollView>
                          </>
                        ) : (
                          null
                        )}
                      </View>
                    )}
                  </>
                ))}
              </View>
            </>
          ) : (
            <View
              style={[
                Styles.w100,
                Styles.p15,
                Styles.al_center,
                Styles.jc_center,
                { marginTop: "30%" },
              ]}
            >
              <Image
                source={require("../../assets/image/Britania-connect-assets/employee.png")}
                style={{ height: 140, width: 140, tintColor: "#9f9f9f" }}
              />
              <Text
                style={[
                  Styles.f_22,
                  Styles.mainFont,
                  Styles.mt5,
                  { color: "#9f9f9f" },
                ]}
              >
                {LANG.homecare_text_39}
              </Text>
            </View>
          )}
        </ScrollView>
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
    </View>
  );
};

export default RepiairList;
