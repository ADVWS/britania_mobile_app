import * as React from "react";

import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    TextInput,
} from "react-native";

import { Styles } from "../../styles";

export default class ProfileForm extends React.Component {
    render() {
        return (
            <View>
                <Text style={[Styles.ml5,Styles.mt10,Styles.mainFont,Styles.f_16,Styles.black_gray_text]}>ชื่อ-นามสกุล</Text>
                <View style={Styles.al_center}>
                    <TextInput style={[Styles.w90,Styles.mt10,Styles.textfieldbox]}></TextInput>
                </View>
            </View>
        )
    }
}
