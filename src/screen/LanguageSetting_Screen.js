import * as React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import { Styles } from "../styles";
import { AntDesign } from '@expo/vector-icons'; 
import MainHeader from "../component/mainHeader";

export default class LanguageSetting_Screen extends React.Component {
    state = {
        selectThai: true,
        selectEnglish: false
    }

    selectLanguage = (select) =>
    {
        if (select == "THAI")
        {
            this.setState({
                selectThai: true,
                selectEnglish: false
            })
        }
        else if (select == "ENGLISH")
        {
            this.setState({
                selectThai: false,
                selectEnglish: true
            })
        }
        else{
            alert("language not found")
        }
    };

    render() {
        return (
            <View style={[Styles.flex, Styles.al_center,Styles.w100,Styles.h100,Styles.FFF]}>
                <MainHeader name={'ตั้งค่าภาษา / Language'} backto={'Account'}/>
                <TouchableOpacity style={[Styles.boxWithShadow, Styles.w90, Styles.p15, Styles.FFF, Styles.br_5, Styles.mt5, Styles.row]} onPress={() => this.selectLanguage('THAI')}>
                    <View style={[Styles.w90]}>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, {bottom: 3}]}>
                            ภาษาไทย
                        </Text>
                    </View>
                    <View style={[Styles.jc_center, Styles.al_end]}>
                    {this.state.selectThai ? <AntDesign name="check" size={24} color="#f1645e"/> : null}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.boxWithShadow, Styles.w90, Styles.p15, Styles.FFF, Styles.br_5, Styles.mt5, Styles.row]} onPress={() => this.selectLanguage('ENGLISH')}>
                    <View style={[Styles.w90]}>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10, Styles.text_left, Styles.black_gray_text, {bottom: 3}]}>
                            English
                        </Text>
                    </View>
                    <View style={[Styles.jc_center, Styles.al_end]}>
                        {this.state.selectEnglish ? <AntDesign name="check" size={24} color="#f1645e"/> : null}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
