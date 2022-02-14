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


const ResidentEdit = ({route}) => {
    const [member, setMember] = React.useState(route.params);
    const [type, setType] = React.useState(member.nationType);

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

    return(
        <View style={[Styles.flex,Styles.w100,Styles.h100,Styles.FFF]}>
            <MainHeader name={'แก้ไขผู้อาศัยร่วม'} backto={'ResidentDetail'}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style={[Styles.w100, Styles.h75]}>
           <View style={Styles.al_center}>
            {setImage(member.image)}
           </View>
           <View style={Styles.ml5}>
           <Text style={[Styles.mainFont,Styles.f_22,Styles.black_gray_text,]}>ผู้อาศัยร่วม</Text>
           <Radio isSelectType={isSelectType} type={member.nationType}/>
           </View>
           {type === "thai" && (<ThaiForm item={member}/>)}
           {type === "foreign" && (<ForeignForm item={member}/>)}
           </ScrollView>
        </View>
    )
}

export default ResidentEdit
