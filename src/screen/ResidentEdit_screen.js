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
import Radio from "../component/ResidentEdit_component/radio_resadd";
import ThaiForm from "../component/ResidentEdit_component/thai_form";
import ForeignForm from "../component/ResidentEdit_component/foreigner_form";

import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../globalState"


export default function ResidentEdit(props) {
    const [picture, setPicture] = React.useState([{ image: {uri : props.route.params.image}}])

    const [type, setType] = React.useState(props.route.params.type);

    const callback = useRecoilState(Global.callbackEdit)

    function isSelectType(TYPE) {
        setType(TYPE);
    }

    console.log("Resident Edit", callback[0])
    //   console.log(props.route.params)

    return(
        <View style={[Styles.flex,Styles.w100,Styles.h100,Styles.FFF]}>
            {/* ยังแก้บัคไม่รีเฟรชไม่ได้ */}
            <MainHeader name={'แก้ไขผู้อาศัยร่วม'} backto={'ResidentDetail'}  callbackEdit={callback[0]}/>
            {/* <MainHeader name={'แก้ไขผู้อาศัยร่วม'} backto={'MemberManage'}/> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style={[Styles.w100, Styles.h75]}>
           <View style={Styles.al_center}>
            <ProfilePicCom picture={picture}/>
           </View>
           <View style={Styles.ml5}>
           <Text style={[Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>ผู้อาศัยร่วม</Text>
           <Radio isSelectType={isSelectType} type={type}/>
           </View>
           {type === "THAI" && (<ThaiForm item={props.route.params}/>)}
           {type === "FOREIGN" && (<ForeignForm item={props.route.params}/>)}
           </ScrollView>
        </View>
    )
}
