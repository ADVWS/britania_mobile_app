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

//transparent f1645e
export default function InformOrder() {

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'รายการแจ้งซ่อม'} backto={'Homecare'} />
                
            </View>
        </View>
    );
}
