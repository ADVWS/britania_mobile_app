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

//transparent f1645e
function Homecare() {
    
    const [thisDataMyHome, setThisDataMyHome] = useRecoilState(Global.dataMyHome)
    const [listInform, setListInform] = useRecoilState(Global.dataListInform)
    const [listHistory, setlistHistory] = useRecoilState(Global.dataListHistory)
    const [selected, setSelected] = React.useState('INFORM')

    function selectMenu(SELECT) {
        console.log(SELECT)
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
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'แจ้งซ่อม'} backto={'TabFooter'} />
                <TouchableOpacity
                    onPress={() => navigate.navigate('Myproject')}
                    style={[Styles.w100, Styles.p15, Styles.FFF, Styles.row]}>
                    <View style={[Styles.w80]}>
                        <Text style={[Styles.f_18, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                            {thisDataMyHome.name}
                        </Text>
                        <Text style={[Styles.f_16, Styles.black_gray_text, Styles.mainFont_thin, Styles.mt5]}>
                            บ้านเลขที่ {thisDataMyHome.homeNo}
                        </Text>
                    </View>
                    <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                        <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.black_gray_text} />
                    </View>
                </TouchableOpacity>
                <MenuBtn selectMenu={selectMenu} />
                {selected === 'INFORM' && 
                    <InformList listInform={listInform}/>
                }
                {selected === 'HISTORY' && 
                    <HistoryList listHistory={listHistory}/>
                }
            </View>
        </View>
    );
}

export default Homecare
