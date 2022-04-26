import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import * as navigate from "../../navigator/RootNavigation";
import * as Global from "../../globalState"
import { useSetRecoilState, useRecoilState } from "recoil";

import { Styles } from "../../styles";
import InformBox from "./informbox";
import Script from "../../script/Homecare_script";
import Key from "../../KEYS.json"

const InformList = () => {
    const [listInform, setListInform] = useRecoilState(Global.dataListInform)
    const [typeInform, setTypeInform] = useRecoilState(Global.informType)
    const [dataIform, setDataInform] = React.useState([])
    const newInform = useSetRecoilState(Global.newInform)
    const caseType = useSetRecoilState(Global.caseType)
    const caseList = useSetRecoilState(Global.caseList)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    React.useEffect(() => {
        setDataInform(listInform)
    })
    console.log('data:::=>', listInform)

    const gotoSelectTypeInform = () => {
        Script.homecareGetCategory(Key.TOKEN, typeInform, (res) => {
            if(res.length > 0){
                caseType(res)
                newInform({
                    unitOwnerId: "",
                    owner: "",
                    phoneOwner: "",
                    checkInDate: "",
                    checkInRangeTime: "",
                })
                caseList([])
                navigate.navigate('SelectTypeInform')
            } else {
                return
            }
        })
    }
    return (
        <View style={[Styles.w100, Styles.p15, Styles.h65]}>
            <TouchableOpacity
                onPress={() => { gotoSelectTypeInform() }}
                style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.al_center,
                    Styles.jc_center,
                    Styles.mainColor_bb6,
                    Styles.boxWithShadow,
                    Styles.row
                ]}>
                <MaterialIcons name="add" size={25} color={"#FFF"} />
                <Text style={[Styles.white_text, Styles.f_24, Styles.mainFont_x, { marginLeft: '1%' }]}>
                    {LANG.homecare_text_06}
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
                    <View style={[Styles.w100, Styles.al_center, Styles.jc_center, { height: 400 }]}>
                        <Image source={require('../../../assets/image/empty_case.png')} style={{ height: 75, width: 75, tintColor: "#9f9f9f"}} />
                        <Text style={[Styles.mainFont, Styles.f_20, Styles.mt10, { color: "#9f9f9f" }]}>{LANG.homecare_text_05}</Text>
                    </View>
                )
                }
            </View>
        </View>
    );
}
export default InformList