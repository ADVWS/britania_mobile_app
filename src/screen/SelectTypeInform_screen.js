import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";

import * as Global from "../globalState"

import { Styles } from "../styles";
import mainScript from "../script";

import MainHeader from "../component/mainHeader";

const SelectTypeInform = () => {
    const [caseType, setCaseType] = useRecoilState(Global.caseType)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT)


    function gotoInformAdd(param, name) {
        var details = {
            categoryId: param,
            description: ""
        }
        navigate.navigate('InformAdd', details)
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={LANG.type_text_01} backto={'Homecare'} />
                <ScrollView style={[Styles.w100, Styles.FFF]}>
                    <View style={[Styles.w100, Styles.p15]}>
                        <Text style={[Styles.f_24, Styles.mainFont, ]}>
                            {LANG.type_text_02}
                        </Text>
                    </View>
                    {caseType.map((item) => (
                        <TouchableOpacity onPress={()=>{gotoInformAdd(item.id, item.nameThai)}}
                            style={[Styles.w100, Styles.p10, Styles.row, { borderColor: '#DDD', borderBottomWidth: 0.5 }]}>
                            <View style={[Styles.w10, Styles.al_center]}>
                                <Image source={item.image} style={{ height: 30, width: 30 }} />
                            </View>
                            <View style={[Styles.w80, Styles.jc_center]}>
                                <Text style={[Styles.f_22, Styles.mainFont_x, Styles.pl10, {color: '#000'}]}>
                                    {LANGTEXT === 'TH' ? item.nameThai : LANG[`type_${item.seq}`]}
                                </Text>
                            </View>
                            <View style={[Styles.w10, Styles.al_center, Styles.jc_center]}>
                                <MaterialIcons name="arrow-forward-ios" size={17} style={Styles.mainColor_text} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default SelectTypeInform
