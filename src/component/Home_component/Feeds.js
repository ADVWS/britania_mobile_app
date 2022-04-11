import * as React from "react";
import { Image, View, Text, TouchableOpacity, Linking } from "react-native";
import { Styles } from "../../styles";

const Feeds = ({ feeds }) => {
  return (
    <View style={[Styles.w100]}>
      {feeds.map((item) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            Linking.openURL(item.link);
          }}
          style={[
            Styles.w100,
            Styles.mt15,
            Styles.boxWithShadow,
            { borderBottomColor: "#000000" },
          ]}
        >
          <Image
            source={{ uri: item.image }}
            style={[
              Styles.w100,
              { height: 170, borderTopLeftRadius: 5, borderTopRightRadius: 5 },
            ]}
          />
          <View
            style={[
              Styles.w100,
              Styles.p15,
              Styles.FFF,
              { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 },
            ]}
          >
            <Text style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text]}>
              {item.title}
            </Text>
            <Text style={[Styles.f_20, Styles.mainFont_x, Styles.mt10]}>
              {item.description}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Feeds;
