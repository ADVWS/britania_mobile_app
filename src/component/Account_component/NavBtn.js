import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";

import { Styles } from "../../styles";

export default class NavBtn extends React.Component {
    render() {
        return (
        <View style={[Styles.boxWithShadow,Styles.mt20]}>
            {this.props.option.map((item) => (
                <TouchableOpacity onPress={() => navigate.navigate(item.nav)} style={[Styles.boxWithShadow, Styles.w100, Styles.p15, Styles.FFF, Styles.br_5, Styles.mt10, Styles.row]}>
                    <View style={[Styles.w90]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, {bottom: 3}]}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={[Styles.jc_center, Styles.al_end]}>
                        <MaterialIcons name="arrow-forward-ios" size={20} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
        );
    }
}