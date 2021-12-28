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
import Menubtn from "../component/Homecare_component/menu_btn";
import NotifyList from "../component/Homecare_component/notifyList";
import HistoryList from "../component/Homecare_component/historyList";

//transparent f1645e
export default function Homecare() {

    const [selected, setSelected] = React.useState(<NotifyList />)

    const selectMenu = (SELECT) => {
        console.log(SELECT)
        switch (SELECT) {
            case 'NOTIFY':
                setSelected(<NotifyList />)
                break
            case 'HISTORY':
                setSelected(<HistoryList />)
                break
            default:
                setSelected(<NotifyList />)
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
                <TouchableOpacity onPress={() => navigate.navigate('Myproject')}
                    style={[Styles.w100, Styles.p15, Styles.FFF, Styles.row]}>
                        <View style={[Styles.w80]}>
                            <Text style={[Styles.f_18, Styles.black_gray_text, Styles.mainFont, Styles.mt5]}>
                                BELGRAVIA Bangna - Rama9
                            </Text>
                            <Text style={[Styles.f_16, Styles.black_gray_text, Styles.mainFont_thin, Styles.mt5]}>
                                บ้านเลขที่ 161/23
                            </Text>
                        </View>
                        <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                            <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.black_gray_text} />
                        </View>
                </TouchableOpacity>
                <Menubtn selectMenu={selectMenu} />
                {selected}
            </View>
        </View>
    );
}
