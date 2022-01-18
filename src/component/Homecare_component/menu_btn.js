import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { Styles } from "../../styles";

//transparent f1645e
export default class MenuBtn extends React.Component {
    state = {
        selectNotify: "#ffcfcf",
        selectHistory: "transparent"
    }

    onSelectMenu = (SELECT) => {
        if(SELECT === "INFORM"){
            this.setState({
                selectNotify: "#ffcfcf",
                selectHistory: "transparent"
            })
        } else if (SELECT === "HISTORY") {
            this.setState({
                selectNotify: "transparent",
                selectHistory: "#ffcfcf"
            })
        }
        const { selectMenu } = this.props;
        this.selectMenu = selectMenu;
        this.selectMenu(SELECT);
    };

    render() {
        return (
            <View style={[Styles.w100, Styles.p15, Styles.row, { backgroundColor: "#ffecec" }]}>
                <TouchableOpacity onPress={()=> this.onSelectMenu("INFORM")}
                    style={[Styles.w40, Styles.p5, Styles.circle, Styles.al_center, { backgroundColor: this.state.selectNotify }]}>
                    <Text style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont]}>รายการแจ้งซ่อม</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.onSelectMenu("HISTORY")}
                    style={[Styles.w50, Styles.p5, Styles.circle, Styles.al_center, { backgroundColor: this.state.selectHistory }]}>
                    <Text style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont, Styles.text_center]}>ประวัติแจ้งซ่อม</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
