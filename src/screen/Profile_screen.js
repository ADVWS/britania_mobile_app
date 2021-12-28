import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import {MaterialIcons} from "@expo/vector-icons";

import ProfileHeader from "../component/Profile_component/ProfileHeader";

import { Styles } from "../styles";
import ProfilePicCom from "../component/Profile_component/ProfilePictureCom";
import ProfileForm from "../component/Profile_component/ProfileForm";
//transparent f1645e

export default function Profile_screen() {

    const [picture, setPicture] = React.useState([{ image: require("../../assets/image/profpic/SampleProf.jpg")}])
    return (
        <LinearGradient
            colors={["#FFF","#FFF"]}
            style={[Styles.flex, Styles.al_center]}>
                <View style={[Styles.w100,Styles.h100,]}>
                    <ProfileHeader/>
                    <ProfilePicCom picture={picture}/>
                    <ProfileForm />
                </View>
        </LinearGradient>
    );
}
