import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Global from "../globalState";
import { useRecoilState, useSetRecoilState } from "recoil";

import { Styles } from "../styles";

const Modal_confirm_2 = ({ text, confirmFunction }) => {
    const [LANG, setLANG] = useRecoilState(Global.Language);
    return (
        <View
            style={[
                Styles.w90,
                Styles.al_center,
                Styles.jc_center,
                Styles.p15,
                Styles.FFF,
                Styles.br_5,
            ]}
        >
            <View style={[Styles.w100]}>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.black_gray_text, Styles.text_left]}>
                    {text}
                </Text>
                <View style={[Styles.row, Styles.w100]}>
                    <View style={[Styles.w70]}/>
                    <TouchableOpacity
                        onPress={() => { confirmFunction() }}
                        style={[
                            Styles.w30,
                            Styles.mt15,
                        ]}
                    >
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.text_right, {color: 'red'}]}>{LANG.informcalendar_text_06}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Modal_confirm_2;
