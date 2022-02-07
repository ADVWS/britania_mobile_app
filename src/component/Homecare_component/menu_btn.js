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
const MenuBtn = ({selectMenu}) => {
    const [selectNotify, setSelectNotify] = React.useState('#ffcfcf')
    const [selectHistory, setSelectHistory] = React.useState('transparent')
    const [LANG, setLANG] = useRecoilState(Global.Language)

    const onSelectMenu = (SELECT) => {
        if(SELECT === "INFORM"){
            setSelectNotify('#ffcfcf')
            setSelectHistory("transparent")
        } else if (SELECT === "HISTORY") {
            setSelectNotify('transparent')
            setSelectHistory("#ffcfcf")
        }     
        selectMenu(SELECT);
    };
    return (
        <View style={[Styles.w100, Styles.p15, Styles.row, { backgroundColor: "#ffecec" }]}>
            <TouchableOpacity onPress={()=> onSelectMenu("INFORM")}
                style={[Styles.w40, Styles.p5, Styles.circle, Styles.al_center, { backgroundColor: selectNotify }]}>
                <Text style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont]}>{LANG.homecare_text_03}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onSelectMenu("HISTORY")}
                style={[Styles.w50, Styles.p5, Styles.circle, Styles.al_center, { backgroundColor: selectHistory }]}>
                <Text style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont, Styles.text_center]}>{LANG.homecare_text_04}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MenuBtn