import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/ResidentAdd_component/radio_resadd";
import ThaiForm from "../component/OccupantAdd_component/thai_form";
import ForeignForm from "../component/OccupantAdd_component/foreigner_form";
import * as Global from "../globalState";
import { useSetRecoilState, useRecoilState } from "recoil";

export default function OccupantAdd({route}) {
  console.log('item', route.params)
  const [unit, setUnit] = React.useState(route.params)
  const [LANG, setLANG] = useRecoilState(Global.Language);


  const [type, setType] = React.useState("thai");

  function isSelectType(TYPE) {
    setType(TYPE);
  }

  const setImage = (img) => {
    console.log(img)
    if (img) {
        return (<ProfilePicCom picture={{uri: img}} />)
    } else {
        return (<ProfilePicCom picture={require('../../assets/image/Britania-connect-assets/default-img-circle.png')}/>)
    }
  }

  return (
    <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.mainColor2]}>
      <MainHeader name={LANG.occupantadd_text_01} backto={"MemberManageIndivi"} />
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
            {LANG.occupantadd_text_02}
          </Text>
          <Radio isSelectType={isSelectType} />
        </View>
        {type === "thai" && <ThaiForm unit={unit}/>}
        {type === "foreign" && <ForeignForm unit={unit}/>}
      </ScrollView>
    </View>
  );
}
