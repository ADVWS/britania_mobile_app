import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import * as Global from "../../globalState"
import { useSetRecoilState, useRecoilState } from "recoil";

import { Styles } from "../../styles";
import InformBox from "./informbox";

const InformList = ({listInform}) => {
    const [dataIform, setDataInform] = React.useState([])
    const newContactInform = useSetRecoilState(Global.newContactInform)
    const newInform = useSetRecoilState(Global.newInform)
    React.useEffect(()=>{
        setDataInform(listInform)
    })
    const gotoSelectTypeInform = () => {
        newContactInform({
            address: "",
            fullname: "",
            mobileno: ""
        })
        newInform([])
        navigate.navigate('SelectTypeInform')
    }
    return (
        <View style={[Styles.w100, Styles.p15, Styles.h65]}>
            <TouchableOpacity 
                onPress={()=>{gotoSelectTypeInform()}}
                style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.al_center,
                    Styles.jc_center,
                    Styles.mainColor,
                    Styles.boxWithShadow,
                    Styles.row
                ]}>
                <MaterialIcons name="add" size={25} color={"#FFF"} />
                <Text style={[Styles.white_text, Styles.f_18, Styles.mainFont, { marginLeft: '1%' }]}>
                    เพิ่มรายการแจ้งซ่อม
                </Text>
            </TouchableOpacity>
            <ScrollView style={[Styles.w100, { padding: 3 }]}>
                {dataIform.map((item, index) => (
                    <InformBox data={item} index={index}/>
                ))}
            </ScrollView>
        </View>
    );
}
export default InformList