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

const InformList = () => {
    const [listInform, setListInform] = useRecoilState(Global.dataListInform)
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
                <Text style={[Styles.white_text, Styles.f_24, Styles.mainFont_x, { marginLeft: '1%' }]}>
                    เพิ่มรายการแจ้งซ่อม
                </Text>
            </TouchableOpacity>
            <View style={[Styles.w100, { padding: 3 }]}>
                {listInform.length > 0 ? (
                    <>
                        {listInform.map((item) => (
                            <InformBox data={item} />
                        ))}
                    </>
                    ) : (
                        <View style={[Styles.w100, Styles.al_center, Styles.jc_center, {height: 400}]}>
                            <Image source={require('../../../assets/image/Britania-connect-assets/05-maintenanace/maintenance-empty.png')} style={{height: 75, width: 75}}/>
                            <Text style={[Styles.mainFont, Styles.f_20, Styles.mt10,{color: "#9f9f9f"}]}>ไม่มีรายการแจ้งซ่อม</Text>
                        </View>
                    ) 
                }
            </View>
        </View>
    );
}
export default InformList