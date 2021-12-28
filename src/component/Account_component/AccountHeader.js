import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../../styles";

export default class AccountHeader extends React.Component {
    render() {
        return (
            <View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20]}>
                <View style={[]} />
                <View style={[Styles.w80, Styles.text_left, Styles.jc_end, { bottom: 5 }]}>
                    <Text 
                        style={[
                            Styles.f_20,
                            Styles.mainFont,
                            Styles.mainColor_text,
                        ]}> บัญชี</Text>
                </View>
                <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
                    <MaterialIcons name="notifications-none" size={26} color={'#f1645e'}/>
                </View>
            </View>
        );
    }
}
