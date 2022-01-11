import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";

var screen = "HomeDetail"
export default class Header extends React.Component {
    render() {
        return (
            <View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20, Styles.mainColor, Styles.boxWithShadow, Styles.mb5]}>
                <View style={[Styles.w20]} />
                <View style={[Styles.w60, Styles.al_center, Styles.jc_end, { bottom: 5 }]}>
                    <Image
                        source={require("../../../assets/image/logo-header.png")}
                        style={[Styles.w70, { tintColor: '#FFF', height: '32%' }]}
                    />
                </View>
                <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
                    <TouchableOpacity onPress={()=> navigate.navigate("Notify", {screen})}>
                        <MaterialIcons name="notifications-none" size={26} color={'#FFF'}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
