import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../globalState"

import { Styles } from "../styles";
import mainScript from "../script";

import MainHeader from "../component/mainHeader";
import Script from "../script/MyHome_script";
import Key from '../KEYS.json'


const MyProject = () => {
    const informStatus = ['Pending', 'Checking', 'Assign', 'Reject', 'ReInprocess', 'Hold-Customer', 'Unapproved']
    const historyStatus = ['Finish', 'Close']
    const setListInform = useSetRecoilState(Global.dataListInform)
    const setlistHistory = useSetRecoilState(Global.dataListHistory)

    const [userProfile, setUserProfile_] = useRecoilState(Global.userProfile)
    const [unitOwner, setUnitOwner_] = useRecoilState(Global.unitOwner)
    const setUnitOwner = useSetRecoilState(Global.unitOwner)
    const [typeInform, setTypeInform] = useRecoilState(Global.informType)
    const setCaseType = useSetRecoilState(Global.caseType)



    console.log(userProfile)

    function setDataSelect(obj) {
        setUnitOwner(obj)
        var inform = []
        var history = []
        Script.homecareAllCase(unitOwner.id, Key.TOKEN, typeInform, (res)=>{
            console.log(res)
            if(res.case.homecareAllCase && res.case.homecareAllCase !== null){
                res.case.homecareAllCase.map((item)=>{
                    if(informStatus.indexOf(item.status) !== -1){
                        if(item.details.length > 0){
                            inform.push(item)
                        }
                    } else if(historyStatus.indexOf(item.status) !== -1) {
                        if(item.details.length > 0){
                            history.push(item)
                        }
                    }
                })
                setCaseType(res.caseType.homecareGetCategory)
                setListInform(inform)
                setlistHistory(history)
                navigate.navigate('Homecare')
            }
        })
        //navigate.navigate('Homecare')
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                    Styles.mainColor2,
                ]}>
                <MainHeader name={'โครงการของฉัน'} backto={'Homecare'}  />
                {userProfile.me.unitsAllowHomecare.map((items) => (
                    <TouchableOpacity
                        onPress={() => setDataSelect(items)}
                        style={[Styles.w100, Styles.p15, Styles.FFF, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                        <View style={[Styles.w100]}>
                            <Text style={[Styles.f_24, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                                {items.projectName}
                            </Text>
                            <Text style={[Styles.f_22, Styles.mainFont_x, Styles.mt5, {color: "#8f8f8f"}]}>
                                บ้านเลขที่ {items.houseNumber}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default MyProject
