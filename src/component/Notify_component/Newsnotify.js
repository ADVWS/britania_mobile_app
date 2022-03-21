import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { Styles } from "../../styles";
import { SimpleLineIcons } from "@expo/vector-icons";
import moment from "moment";

const Newsnotify = (notify) => {
  return (
    <View style={[Styles.mt20, Styles.w100]}>
      <Text
        style={[
          Styles.mainColor_text3,
          Styles.mainFont,
          Styles.f_22,
          Styles.text_right,
        ]}
      >
        อ่านทั้งหมด (
        {
          notify.notify.filter((item) => {
            return item.type == "news";
          }).length
        }
        )
      </Text>
      {notify.notify != undefined
        ? notify.notify.map((item) =>
            item.type == "news" ? (
              <View
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
                <View style={[Styles.w20, Styles.al_center, Styles.jc_center]}>
                  <View
                    style={[
                      { backgroundColor: "#ffdfdf" },
                      Styles.p10,
                      Styles.circle,
                    ]}
                  >
                    <SimpleLineIcons name="tag" size={27} color="#bb6a70" />
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
                  <Text
                    style={[Styles.f_20, Styles.mainFont, Styles.gray_text]}
                  >
                    {moment(item.notificationDate).format("DD MMMM YYYY HH:mm")}
                  </Text>
                </View>
              </View>
            ) : null
          )
        : null}

      {/* <View
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
        <View style={[Styles.w20, Styles.al_center, Styles.jc_center]}>
          <View
            style={[{ backgroundColor: "#ffdfdf" }, Styles.p10, Styles.circle]}
          >
            <SimpleLineIcons name="tag" size={27} color="#f1645e" />
          </View>
        </View>
        <View style={[Styles.w80, Styles.p10]}>
          <Text style={[Styles.f_20, Styles.mainFont, Styles.black_gray_text]}>
            บริทาเนีย ให้เหนือกว่าใคร กับโปรอยู่ฟรีสูงสุด 2 ปี
          </Text>
          <Text style={[Styles.f_20, Styles.mainFont, Styles.gray_text]}>
            14 ม.ค. 2562 13:23
          </Text>
        </View>
      </View>
      <View
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
        <View style={[Styles.w20, Styles.al_center, Styles.jc_center]}>
          <View
            style={[{ backgroundColor: "#ffdfdf" }, Styles.p10, Styles.circle]}
          >
            <SimpleLineIcons name="tag" size={27} color="#f1645e" />
          </View>
        </View>
        <View style={[Styles.w80, Styles.p10]}>
          <Text style={[Styles.f_20, Styles.mainFont, Styles.black_gray_text]}>
            บริทาเนีย ให้เหนือกว่าใคร กับโปรอยู่ฟรีสูงสุด 2 ปี
          </Text>
          <Text style={[Styles.f_20, Styles.mainFont, Styles.gray_text]}>
            13 ม.ค. 2562 13:23
          </Text>
        </View>
      </View>
      <View
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
        <View style={[Styles.w20, Styles.al_center, Styles.jc_center]}>
          <View
            style={[{ backgroundColor: "#ffdfdf" }, Styles.p10, Styles.circle]}
          >
            <SimpleLineIcons name="tag" size={27} color="#f1645e" />
          </View>
        </View>
        <View style={[Styles.w80, Styles.p10]}>
          <Text style={[Styles.f_20, Styles.mainFont, Styles.black_gray_text]}>
            บริทาเนีย ให้เหนือกว่าใคร กับโปรอยู่ฟรีสูงสุด 2 ปี
          </Text>
          <Text style={[Styles.f_20, Styles.mainFont, Styles.gray_text]}>
            12 ม.ค. 2562 13:23
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default Newsnotify;
