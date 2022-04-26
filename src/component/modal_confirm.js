import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Styles } from "../styles";

import { useRecoilState } from "recoil";
import * as Global from "../globalState";

const Modal_confirm = ({ text, confirmFunction }) => {
    const [LANG, setLANG] = useRecoilState(Global.Language);

    return (
        <View
            style={[
                Styles.w80,
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
                    <View style={[Styles.w50]}/>
                    <TouchableOpacity
                        onPress={() => { confirmFunction('CANCEL') }}
                        style={[
                            Styles.w25,
                            Styles.mt15,
                        ]}
                    >
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.text_right, {color: '#8f8f8f'}]}>{LANG.account_text_10}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { confirmFunction() }}
                        style={[
                            Styles.w25,
                            Styles.mt15,
                        ]}
                    >
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.text_right, {color: 'red'}]}>{LANG.account_text_09}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Modal_confirm;
