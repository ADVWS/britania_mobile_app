import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { Styles } from "../../styles";
import { useSetRecoilState, useRecoilState } from "recoil";
import * as Global from "../../globalState"
//transparent f1645e
const MenuBtn = ({ selectMenu }) => {
    const [selectNotify, setSelectNotify] = React.useState('#bb6a70')
    const [selectHistory, setSelectHistory] = React.useState('transparent')
    const [textNotify, settextNotify] = React.useState('#fff')
    const [textHistory, settextHistory] = React.useState('#555555')
    const [LANG, setLANG] = useRecoilState(Global.Language)

    const onSelectMenu = (SELECT) => {
        if (SELECT === "INFORM") {
            setSelectNotify('#bb6a70')
            setSelectHistory("transparent")
            settextNotify('#fff')
            settextHistory('#555555')
        } else if (SELECT === "HISTORY") {
            setSelectNotify('transparent')
            setSelectHistory("#bb6a70")
            settextNotify('#555555')
            settextHistory('#fff')
        }
        selectMenu(SELECT);
    };

    

    return (
        <View style={[Styles.w100, Styles.p15, Styles.row, { backgroundColor: "#f3eced" }]}>
            <TouchableOpacity onPress={() => onSelectMenu("INFORM")}
                style={[Styles.w40, Styles.p5, Styles.circle, Styles.al_center, { backgroundColor: selectNotify }]}>
                <Text style={[Styles.f_22, Styles.mainFont, {color: textNotify}]}>{LANG.homecare_text_03}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSelectMenu("HISTORY")}
                style={[Styles.w50, Styles.p5, Styles.circle, Styles.al_center, { backgroundColor: selectHistory }]}>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.text_center, {color: textHistory}]}>{LANG.homecare_text_04}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MenuBtn