import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/ResidentAdd_component/radio_resadd";
import ThaiForm from "../component/ResidentAdd_component/thai_form";
import ForeignForm from "../component/ResidentAdd_component/foreigner_form";
import * as Global from "../globalState";
import { useSetRecoilState, useRecoilState } from "recoil";

export default function ResidentAdd({ route }) {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [unit, setUnit] = React.useState(route.params);
  const [picture, setPicture] = React.useState(
    {
      image: require("../../assets/image/Britania-connect-assets/default-img-circle.png"),
    },
  );

  const setImage = (img) => {
    console.log(img)
    if (img) {
        return (<ProfilePicCom picture={{uri: img}} />)
    } else {
        return (<ProfilePicCom picture={require('../../assets/image/Britania-connect-assets/default-img-circle.png')}/>)
    }
  }

  const [type, setType] = React.useState("thai");

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  return (
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
      <MainHeader
        name={LANG.residentadd_text_01}
        backto={"MemberManageIndivi"}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={[Styles.w100, Styles.h75]}
      >
        <View style={Styles.al_center}>
          {setImage()}
        </View>
        <View style={Styles.ml5}>
          <Text style={[Styles.mainFont, Styles.f_24, Styles.black_gray_text]}>
            {LANG.residentadd_text_02}
          </Text>
          <Radio isSelectType={isSelectType} />
        </View>
        {type === "thai" && <ThaiForm unit={unit} />}
        {type === "foreign" && <ForeignForm unit={unit} />}
      </ScrollView>
    </View>
  );
}
