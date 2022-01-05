import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader"
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import Radio from "../component/OccupantEdit_component/radio_resadd";
import ThaiForm from "../component/OccupantEdit_component/thai_form";
import ForeignForm from "../component/OccupantEdit_component/foreigner_form";

export default function OccupantEdit() {
    const [picture, setPicture] = React.useState([{ image: require("../../assets/image/profpic/SampleProf3.jpg")}])

    const [type, setType] = React.useState("THAI");

    function isSelectType(TYPE) {
        setType(TYPE);
      }

    return(
        <View style={[Styles.flex,Styles.w100,Styles.h100,Styles.FFF]}>
            <MainHeader name={'แก้ไขผู้เช่า'} backto={'MemberManageIndivi'}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style={[Styles.w100, Styles.h75]}>
           <View style={Styles.al_center}>
            <ProfilePicCom picture={picture}/>
           </View>
           <View style={Styles.ml5}>
           <Text style={[Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>ผู้อาศัยร่วม</Text>
           <Radio isSelectType={isSelectType} />
           </View>
           {type === "THAI" && (<ThaiForm />)}
           {type === "FOREIGN" && (<ForeignForm />)}
           </ScrollView>
        </View>
    )
}