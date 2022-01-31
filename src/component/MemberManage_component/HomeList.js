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
import mainScript from "../../script"
import Script from "../../script/MemberManage_script";
import KEYS from "../../KEYS.json"

export default class HomeList extends React.Component {
    selectProject = (item) => {
        Script.unitMemberAll( item, KEYS.TOKEN,(unitMember)=>{
            var data = mainScript.recoilTranform(item)
            data.unitMember = unitMember
            console.log('data:::::', data)
            navigate.navigate('MemberManageIndivi',data)
        })
    }

    render() {
        return (
            <View style={[Styles.w100, Styles.p10]}>
                {this.props.homeList.map((item) => (
                <TouchableOpacity onPress={() => this.selectProject(item)} style={[Styles.boxWithShadow, Styles.w100, Styles.p15, Styles.FFF, Styles.br_5, Styles.mt5, Styles.row]}>
                    <View style={[Styles.w80]}>
                        <Text style={[Styles.f_24, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, {bottom: 3}]}>
                            {item.projectName}
                        </Text>
                        <Text style={[Styles.f_22, Styles.mainFont_x, Styles.mt10, Styles.text_left, {bottom: 3, color: "#8f8f8f"}]}>
                            บ้านเลขที่ {item.houseNumber}
                        </Text>
                    </View>
                    <View style={[Styles.jc_center, Styles.al_end, Styles.w20]}>
                        <MaterialIcons name="arrow-forward-ios" size={18} />
                    </View>
                </TouchableOpacity>
            ))}
            </View>
        )
    }
}
