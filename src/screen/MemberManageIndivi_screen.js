import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import MainHeader from "../component/mainHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { useSetRecoilState, useRecoilState } from "recoil";

import { Styles } from "../styles";
import ResidentList from "../component/MemberManageIndivi_component/resident_list";
import OccupantList from "../component/MemberManageIndivi_component/occupant_list";
import MenuBtn from "../component/MemberManageIndivi_component/menu_manage_btn";
import * as Global from "../globalState";

export default function MemberManageIndivi_screen({ route }) {
  console.log("ROUTE", route);

  const gobalData = useSetRecoilState(Global.callbackAccount);

  var item = route.params;
  var resident = item.unitMember.resident
  var occupant = item.unitMember.tenant
  gobalData(item);
  const scrollref = React.createRef();

  const [selected, setSelected] = React.useState(
    <ResidentList resident={resident} item={item} />
  );

  const selectMenu = (SELECT) => {
    console.log(SELECT);
    switch (SELECT) {
      case "RESIDENT":
        setSelected(<ResidentList resident={item.unitMember.resident} item={item} />);
        break;
      case "OCCUPANT":
        setSelected(<OccupantList occupant={item.unitMember.tenant} item={item} />);
        break;
      default:
        setSelected(<ResidentList resident={item.unitMember.resident} item={item} />);
        break;
    }
  };

  const setImage = (image) => {
    if (image) {
      return (
        <View style={[Styles.boxWithShadow, Styles.w100, Styles.mb20, { height: 200 }]}>
          <Image
            source={{ uri: image }}
            style={[Styles.h100, Styles.w100, Styles.br_5]}
          />
        </View>
      )
    } else {
      return (<></>)
    }
  }

  //   console.log("Item Here");
  //   console.log(item);

  return (
    <View style={[Styles.flex, Styles.al_center]}>
      <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={item.projectName} backto={"MemberManage"} />
        <ScrollView
          ref={scrollref}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={[Styles.w100, Styles.h75]}
        >
          <View style={[Styles.w100, Styles.p15, Styles.al_center, Styles.FFF]}>
            {setImage(item.image)}
            <View style={Styles.w80}>
              <Text
                style={[
                  { fontSize: 28 },
                  Styles.mainColor_text,
                  Styles.mainFont,
                  Styles.text_center,
                ]}
              >
                {item.projectName}
              </Text>
            </View>
          </View>
          <MenuBtn selectMenu={selectMenu} />
          {selected}
        </ScrollView>
      </View>
    </View>
  );
}
