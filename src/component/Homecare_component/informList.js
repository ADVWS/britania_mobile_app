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
import InformBox from "./informbox";

export default class InformList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            InformData: []
        };
    }

    render() {
        return (
            <View style={[Styles.w100, Styles.p15]}>
                <TouchableOpacity style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.al_center,
                    Styles.jc_center,
                    Styles.mainColor,
                    Styles.boxWithShadow,
                    Styles.row
                ]}>
                    <MaterialIcons name="add" size={25} color={"#FFF"} />
                    <Text style={[Styles.white_text, Styles.f_18, Styles.mainFont, { marginLeft: '1%' }]}>
                        เพิ่มรายการแจ้งซ่อม
                    </Text>
                </TouchableOpacity>
                <ScrollView style={[Styles.w100, {padding: 3}]}>
                    {this.props.listInform.map((item) => (
                        <InformBox data={item} />
                    ))}
                </ScrollView>
            </View>
        );
    }
}
