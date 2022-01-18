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

import MainHeader from "../component/mainHeader";

const SelectTypeInform = () => {
    const [typeInform, setTypeInform] = useRecoilState(Global.informType)
    const gobalData = useSetRecoilState(Global.informSelectType)

    function gotoInformAdd(param) {
        var informType = {
            type: param
        }
        gobalData(informType)
        navigate.navigate('InformAdd', {informType})
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'แจ้งซ่อม'} backto={'Homecare'} />
                <ScrollView style={[Styles.w100, Styles.FFF]}>
                    <View style={[Styles.w100, Styles.p15]}>
                        <Text style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text]}>
                            เลือกประเภท
                        </Text>
                    </View>
                    {typeInform.map((item) => (
                        <TouchableOpacity onPress={()=>{gotoInformAdd(item.value)}}
                            style={[Styles.w100, Styles.p10, Styles.row, { borderColor: '#DDD', borderBottomWidth: 0.5 }]}>
                            <View style={[Styles.w10, Styles.al_center]}>
                                <Image source={item.iamge} style={{ height: 30, width: 30 }} />
                            </View>
                            <View style={[Styles.w80, Styles.jc_center]}>
                                <Text style={[Styles.f_22, Styles.mainFont_x, Styles.pl10]}>
                                    {item.name}
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
