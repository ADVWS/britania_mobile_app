import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Styles } from "../../styles";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import Script from "../../script/Notification_script";
import mainScript from "../../script";
import Key from "../../KEYS.json";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState";

const Fixnotify = (notify) => {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const notifySet = useSetRecoilState(Global.dataNotify);
  const [dataNotify, setDataNotify] = useRecoilState(Global.dataNotify);
  var read = 0;
  const setRead = (id) => {
    Script.notificationRead(id, Key.TOKEN, (res) => {
      var updateNotify = mainScript.recoilTranform(dataNotify);
      updateNotify.map((item) => {
        if(res.notificationReadMessage){
          if (item.id === res.notificationReadMessage.id) {
            item.readDate = res.notificationReadMessage.readDate;
          }
        }
      });
      notifySet(updateNotify);
    });
  };

  const setReadAll = (arr) => {
    let unread = arr.filter((item) => {
      return (
        item.type == "activity" && (item.readDate == null || !item.readDate)
      );
    });
    if (unread.length > 0) {
      readAll(unread);
    }
  };

  const readAll = (unread) => {
    var data = unread[read];
    if (read < unread.length) {
      Script.notificationRead(data.id, Key.TOKEN, (res) => {
        var updateNotify = mainScript.recoilTranform(dataNotify);
        updateNotify.map((item) => {
          if(res.notificationReadMessage){
            if (item.id === res.notificationReadMessage.id) {
              item.readDate = res.notificationReadMessage.readDate;
            }
          }
        });
        notifySet(updateNotify);
        read++;
        readAll(unread);
      });
    } else {
      read = 0;
    }
  };
  return (
    <View style={[Styles.mt20, Styles.w100]}>
      <TouchableOpacity onPress={() => setReadAll(notify.notify)}>
        <Text
          style={[
            Styles.mainColor_text3,
            Styles.mainFont,
            Styles.f_22,
            Styles.text_right,
            Styles.mb10,
          ]}
        >
          {LANG.notify_text_05} (
          {
            notify.notify.filter((item) => {
              return (
                item.type == "activity" &&
                (item.readDate == null || !item.readDate)
              );
            }).length
          }
          )
        </Text>
      </TouchableOpacity>

      {notify.notify != undefined && notify.notify.length > 0
        ? notify.notify.map((item) =>
            item.type == "activity" ? (
              item.readDate === null || !item.readDate ? (
                <TouchableOpacity
                  onPress={() => setRead(item.id)}
                  style={[
                    Styles.w100,
                    Styles.FFF,
                    Styles.p15,
                    Styles.br_5,
                    Styles.boxWithShadow,
                    Styles.row,
                    Styles.mb10,
                  ]}
                >
                  <View
                    style={[Styles.w20, Styles.al_center, Styles.jc_center]}
                  >
                    <View style={[Styles.p10, Styles.circle]}>
                    <Image
                        source={require("../../../assets/image/empty_case.png")}
                        style={{ height: 32, width: 32, tintColor: "#555" }}
                     />
                    </View>
                  </View>
                  <View style={[Styles.w80, Styles.p10]}>
                    <Text
                      style={[
                        Styles.f_20,
                        Styles.mainFont,
                        Styles.black_gray_text,
                      ]}
                    >
                      {item.title}
                    </Text>
                    {item.description !== "" ? (
                      <Text
                        style={[
                          Styles.f_20,
                          Styles.mainFont,
                          { color: "#c0bfc0" },
                        ]}
                      >
                        {item.description}
                      </Text>
                    ) : null}
                    <Text
                      style={[
                        Styles.f_20,
                        Styles.mainFont,
                        { color: "#c0bfc0" },
                      ]}
                    >
                      <FontAwesome name="circle" size={12} color="#bb6a70" />
                      {"  "}
                      {moment(item.notificationDate).format(
                        "DD MMMM YYYY HH:mm"
                      )}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  style={[
                    Styles.w100,
                    //Styles.DDD,
                    { backgroundColor: "#ecebec" },
                    Styles.p15,
                    Styles.br_5,
                    Styles.boxWithShadow,
                    Styles.row,
                    Styles.mb10,
                  ]}
                >
                  <View
                    style={[Styles.w20, Styles.al_center, Styles.jc_center]}
                  >
                    <View
                      style={[
                        { backgroundColor: "#ecebec" },
                        Styles.p10,
                        Styles.circle,
                      ]}
                    >
                      <Image
                        source={require("../../../assets/image/empty_case.png")}
                        style={{ height: 32, width: 32, tintColor: "#555" }}
                     />
                    </View>
                  </View>
                  <View style={[Styles.w80, Styles.p10]}>
                    <Text
                      style={[
                        Styles.f_20,
                        Styles.mainFont,
                        Styles.black_gray_text,
                      ]}
                    >
                      {item.title}
                    </Text>
                    {item.description !== "" ? (
                      <Text
                        style={[
                          Styles.f_20,
                          Styles.mainFont,
                          { color: "#c0bfc0" },
                        ]}
                      >
                        {item.description}
                      </Text>
                    ) : null}
                    <Text
                      style={[
                        Styles.f_20,
                        Styles.mainFont,
                        { color: "#c0bfc0" },
                      ]}
                    >
                      {moment(item.notificationDate).format(
                        "DD MMMM YYYY HH:mm"
                      )}
                    </Text>
                  </View>
                </View>
              )
            ) : null
          )
        : (
          <View style={[Styles.w100, Styles.h100, Styles.al_center, Styles.jc_center, {marginTop: '5%'}]}>
          <MaterialIcons name="notifications" size={90} color="#c0bfc0"/>
          <Text style={[Styles.f_24, Styles.mainFont_x, Styles.mt10, {color:"#c0bfc0", marginBottom: '20%'}]}>{LANG.notify_text_06}</Text>
        </View>
        )}
    </View>
  );
};

export default Fixnotify;
