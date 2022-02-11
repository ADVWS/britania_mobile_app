import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Header from "../component/MyHome_component/Header";
import * as navigate from "../navigator/RootNavigation";
import {MaterialIcons} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../globalState"
import mainScript from "../script"
import Script from "../script/MyHome_script"
import { Styles } from "../styles";
import key from '../KEYS.json'


const MyHome = () => {
    const [userProfile, setUserProfile_] = useRecoilState(Global.userProfile)
    const [unitOwner, setUnitOwner_] = useRecoilState(Global.unitOwner)
    const [typeInform, setTypeInform] = useRecoilState(Global.informType)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const setCaseType = useSetRecoilState(Global.caseType)
    const setUnitOwner = useSetRecoilState(Global.unitOwner)

    const setListInform = useSetRecoilState(Global.dataListInform)
    const setlistHistory = useSetRecoilState(Global.dataListHistory)
    const informStatus = ['Pending', 'Checking', 'Assign', 'Reject', 'ReInprocess', 'Hold-Customer', 'Unapproved', 'Inprocess']
    const historyStatus = ['Finish', 'Close']
    console.log(userProfile)
    startApp()
    function startApp() {
        if(mainScript.isEmptyObject(unitOwner) === null){
            if(userProfile.me.unitsAllowHomecare &&  userProfile.me.unitsAllowHomecare !== null){
                setUnitOwner(userProfile.me.unitsAllowHomecare[0])
            }
        }
    }

    function goToHomecare() {
        var inform = []
        var history = []
        Script.homecareAllCase(unitOwner.id, key.TOKEN, typeInform, (res)=>{
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
    }
    
    return (
        <View style={[Styles.flex, Styles.al_center, Styles.FFF]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <Header />
                {userProfile.me.unitsAllowHomecare &&  userProfile.me.unitsAllowHomecare !== null? (
                    <View style={[Styles.w100, Styles.p15, Styles.al_center]}>
                        <View style={[Styles.boxWithShadow, Styles.w100, { height: 250 }]}>
                            {unitOwner.project ? (
                                <Image source={{uri: unitOwner.project.projectImageSrc}} style={[Styles.h100, Styles.w100, Styles.br_5]} />
                            ): <Image source={require("../../assets/image/image_not_found.png")} style={[Styles.h100, Styles.w100, Styles.br_5, {opacity: 0.3}]} />}
                        </View>
                        <Text style={[{fontSize: 32}, Styles.mainColor_text, Styles.mainFont, Styles.mt20, Styles.text_center, Styles.mainColor_text]}>
                            {unitOwner.projectName}
                        </Text>
                        <Text style={[Styles.f_24, Styles.mainFont_x, Styles.mt10, Styles.text_center, Styles.gray_text]}>
                            บ้านเลขที่ {unitOwner.houseNumber ? unitOwner.houseNumber : null}
                        </Text>
                        {/* <View style={[Styles.w100, Styles.row]}>
                            <View style={[Styles.w50]}>
                                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10, Styles.text_center, Styles.gray_text]}>
                                    {LANG.myhome_text_01} {unitOwner.land ? unitOwner.land : "-"} {LANG.myhome_text_02}
                                </Text>
                            </View>
                            <View style={[Styles.w50]}>
                                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10, Styles.text_center, Styles.gray_text]}>
                                    {LANG.myhome_text_03} {unitOwner.usablearea ? unitOwner.usablearea : "-"} {LANG.myhome_text_04}
                                </Text>
                            </View>
                        </View> */}
                        <TouchableOpacity onPress={()=>{goToHomecare()}} style={[Styles.boxWithShadow, Styles.w100, Styles.p10, Styles.FFF, Styles.br_5, Styles.mt20, Styles.row]}>
                            <View style={[Styles.w20, Styles.p10]}>
                                <Image source={require('../../assets/image/tool_icon.png')} style={[Styles.w100, { height: 45 }]} />
                            </View>
                            <View style={[Styles.w60, Styles.jc_center]}>
                                <Text style={[Styles.f_24, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, Styles.ml5, {bottom: 3}]}>
                                    {LANG.myhome_text_05}
                                </Text>
                            </View>
                            <View style={[Styles.w20, Styles.jc_center, Styles.al_end]}>
                                <MaterialIcons name="arrow-forward-ios" size={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (<>
                    <MaterialCommunityIcons name="home-search" size={120} color="#DDD" style={{marginTop: '30%'}}/>
                    <Text style={[Styles.mainFont, Styles.f_22, Styles.gray_text, Styles.mt10]}>{LANG.myhome_text_06}</Text>
                </>)}
            </View>
        </View>
    );
}
export default MyHome
