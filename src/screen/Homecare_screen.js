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

import MainHeader from "../component/mainHeader";
import MenuBtn from "../component/Homecare_component/menu_btn";
import InformList from "../component/Homecare_component/informList";
import HistoryList from "../component/Homecare_component/historyList";
import { useSetRecoilState, useRecoilState } from "recoil";

import * as Global from "../globalState"
import moment from "moment";

//transparent f1645e
function Homecare() {

    const [unitOwner, setUnitOwner_] = useRecoilState(Global.unitOwner)
    const [listInform, setListInform] = useRecoilState(Global.dataListInform)
    const [listHistory, setlistHistory] = useRecoilState(Global.dataListHistory)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const [selected, setSelected] = React.useState('INFORM')
    console.log('==>',moment())
    function selectMenu(SELECT) {
        switch (SELECT) {
            case 'INFORM':
                setSelected('INFORM')
                break
            case 'HISTORY':
                setSelected('HISTORY')
                break
            default:
                setSelected('INFORM')
                break
        }
    }

    return (
        <View style={[Styles.flex]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={LANG.homecare_text_01} backto={'TabFooter'} />
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => navigate.navigate('Myproject')}
                        style={[Styles.w100, Styles.p15, Styles.FFF, Styles.row]}>
                        <View style={[Styles.w80]}>
                            <Text style={[Styles.f_24, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                                {unitOwner.projectName}
                            </Text>
                            <Text style={[Styles.f_22, Styles.mainFont_x, Styles.mt5, { color: '#8f8f8f' }]}>
                                {LANG.homecare_text_02} {unitOwner.houseNumber}
                            </Text>
                        </View>
                        <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                            <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.black_gray_text} />
                        </View>
                    </TouchableOpacity>
                    <MenuBtn selectMenu={selectMenu} />
                    {selected === 'INFORM' &&
                        <InformList listInform={listInform} />
                    }
                    {selected === 'HISTORY' &&
                        <HistoryList listHistory={listHistory} />
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export default Homecare
