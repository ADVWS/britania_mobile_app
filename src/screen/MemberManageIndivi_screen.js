import * as React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import MainHeader from "../component/mainHeader";
import { useRecoilState } from "recoil";

import { Styles } from "../styles";
import ResidentList from "../component/MemberManageIndivi_component/resident_list";
import OccupantList from "../component/MemberManageIndivi_component/occupant_list";
import MenuBtn from "../component/MemberManageIndivi_component/menu_manage_btn";
import * as Global from "../globalState";

export default function MemberManageIndivi_screen() {
  const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT);
  const [unitMember, setUnitMember] = useRecoilState(Global.unitMember);
  const resident = unitMember.unitMember.resident;
  const occupant = unitMember.unitMember.tenant;
  console.log("unitMember==xx>", unitMember);
  //gobalData(item);
  const scrollref = React.createRef();

  const [selected, setSelected] = React.useState(
    <ResidentList resident={resident} item={unitMember} />
  );

  const selectMenu = (SELECT) => {
    console.log(SELECT);
    switch (SELECT) {
      case "RESIDENT":
        setSelected(<ResidentList resident={resident} item={unitMember} />);
        break;
      case "OCCUPANT":
        setSelected(<OccupantList occupant={occupant} item={unitMember} />);
        break;
      default:
        setSelected(<ResidentList resident={resident} item={unitMember} />);
        break;
    }
  };

  const setImage = (image) => {
    if (image.projectImageSrc && image.projectImageSrc !== null) {
      return (
        <View
          style={[
            Styles.boxWithShadow,
            Styles.w100,
            Styles.mb20,
            { height: 200 },
          ]}
        >
          <Image
            source={{ uri: image.projectImageSrc }}
            style={[Styles.h100, Styles.w100, Styles.br_5]}
          />
        </View>
      );
    } else {
      return (
        <View
          style={[
            Styles.boxWithShadow,
            Styles.w100,
            Styles.mb20,
            { height: 200 },
          ]}
        >
          <Image
            source={require("../../assets/image/image_not_found.png")}
            style={[Styles.h100, Styles.w100, Styles.br_5, { opacity: 0.3 }]}
          />
        </View>
      );
    }
  };

  return (
    <View style={[Styles.flex, Styles.al_center]}>
      <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={LANGTEXT === 'TH' ? unitMember.projectName : unitMember.project.nameEng} backto={"MemberManage"} />
        <ScrollView
          ref={scrollref}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={[Styles.w100, Styles.h75]}
        >
          <View style={[Styles.w100, Styles.p15, Styles.al_center, Styles.FFF]}>
            {setImage(unitMember.project)}
            <View style={Styles.w80}>
              <Text
                style={[
                  { fontSize: 28 },
                  Styles.mainColor_text,
                  Styles.mainFont,
                  Styles.text_center,
                ]}
              >
                {LANGTEXT === 'TH' ? unitMember.projectName : unitMember.project.nameEng}
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
