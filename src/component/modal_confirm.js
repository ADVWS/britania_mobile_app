import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Styles } from "../styles";

const Modal_confirm = ({ text, confirmFunction }) => {
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
                <Text style={[Styles.f_16, Styles.mainFont, Styles.black_gray_text, Styles.text_left]}>
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
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.text_right, {color: '#8f8f8f'}]}>ยกเลิก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { confirmFunction() }}
                        style={[
                            Styles.w25,
                            Styles.mt15,
                        ]}
                    >
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.text_right, {color: 'red'}]}>ตกลง</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Modal_confirm;
