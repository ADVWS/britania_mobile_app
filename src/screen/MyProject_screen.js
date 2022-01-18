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
import Script from "../script";

import MainHeader from "../component/mainHeader";


const MyProject = () => {
    const [thisDataMyHProject, setThisDataMyHProject] = useRecoilState(Global.dataMyproject)
    const setListInform = useSetRecoilState(Global.dataListInform)
    const setlistHistory = useSetRecoilState(Global.dataListHistory)
    const gobalData = useSetRecoilState(Global.dataMyHome)

    function setDataSelect(obj) {
        gobalData(obj)
        mapDataMycare(obj, (res) => {
            console.log('data:::::', res)
            navigate.navigate('Homecare')
        })
        //navigate.navigate('Homecare')
    }

    function mapDataMycare(param, cb) {
        console.log('start', param)
        var inform = []
        var history = []
        if (param.inform) {
            param.inform.map((item) => {
                if (item.status !== 5) {
                    inform.push(item)
                } else {
                    history.push(item)
                }
            })
        }
        setListInform(inform)
        setlistHistory(history)
        var res = {
            inform: inform,
            history: history
        }
        cb(res)
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                    Styles.FFF,
                ]}>
                <MainHeader name={'โครงการของฉัน'} backto={'Homecare'} />
                {thisDataMyHProject.map((items) => (
                    <TouchableOpacity
                        onPress={() => setDataSelect(items)}
                        style={[Styles.w100, Styles.p15, Styles.FFF, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                        <View style={[Styles.w100]}>
                            <Text style={[Styles.f_24, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                                {items.name}
                            </Text>
                            <Text style={[Styles.f_22, Styles.mainFont_x, Styles.mt5, {color: "#8f8f8f"}]}>
                                บ้านเลขที่ {items.homeNo}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default MyProject
