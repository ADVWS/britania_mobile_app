import * as React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader"

export default function ResidentAddOTP_2() {
    const [unit1, setUnit1] = React.useState("");
    const [unit2, setUnit2] = React.useState("");
    const [unit3, setUnit3] = React.useState("");
    const [unit4, setUnit4] = React.useState("");
    const [unit5, setUnit5] = React.useState("");
    const [unit6, setUnit6] = React.useState("");
    const unit1ref = React.createRef();
    const unit2ref = React.createRef();
    const unit3ref = React.createRef();
    const unit4ref = React.createRef();
    const unit5ref = React.createRef();
    const unit6ref = React.createRef();
    return (
        <View style={[Styles.flex, Styles.w100, Styles.h100, Styles.FFF]}>
            <MainHeader name={'เพิ่มผู้อาศัยร่วม'} backto={'ResidentAdd'} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View
                    style={[
                        Styles.al_center,
                        Styles.w100,
                        Styles.h90,
                        Styles.p30,
                    ]}
                ></View>
            </TouchableWithoutFeedback>
        </View>
    )
}