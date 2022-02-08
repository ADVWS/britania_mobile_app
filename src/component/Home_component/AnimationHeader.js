import React, { useState } from 'react';
import { Animated, View, TouchableOpacity, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from '../../styles';
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";
import Store from '../../store';
import Script from '../../script/Notification_script';
import Key from '../../KEYS.json'

const HEADER_HEIGHT = 50;
const screen = "Home"
const AnimatedHeader = ({ animatedValue }) => {
    const [userType, setUserType] = useRecoilState(Global.userType)
    const [counter, setCounter] = React.useState('-')
    const insets = useSafeAreaInsets();
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
        extrapolate: 'clamp',
    });
    const colorSet = animatedValue.interpolate({
        inputRange: [0, 50],
        outputRange: ['rgba(241,100,94,0)', 'rgba(241, 100, 94, 1)']
    });
    const imageSet = animatedValue.interpolate({
        inputRange: [0, 50],
        outputRange: ['rgba(241, 100, 94, 1)', 'rgba(255,255,255,1)']
    });
    //console.log(imageSet)
    const setCountNotify = () => {
        Store.getLocalStorege(Key.TOKEN,(tk)=>{
            const token = tk.detail.token
            Script.notificationCountUnread(token, (res)=>{
                setCounter(res)
            })
        })
    }

    function setNotify() {
        if (userType !== 1) {
            return (
                <TouchableOpacity disabled={true} onPress={() => navigate.navigate("Notify", { screen })}>
                    <Animated.Text style={{ color: "#000" }}>
                        <MaterialIcons name="notifications-none" size={30} />
                    </Animated.Text>
                </TouchableOpacity>)
        } else {
            return (
                <TouchableOpacity onPress={() => navigate.navigate("Notify", { screen })}>
                    <Animated.Text style={{ color: imageSet }}>
                        <MaterialIcons name="notifications-none" size={30} />
                    </Animated.Text>
                    <View style={{ backgroundColor: "red", borderRadius: 100, height: 25, width: 25, position: 'absolute', top: -12, left: 12, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFF', fontSize: 12 }}>{setCountNotify()}{counter}</Text>
                    </View>
                </TouchableOpacity>)
        }
    }
    return (
        <Animated.View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20, { backgroundColor: colorSet }]}>
            <View style={[Styles.w20]} />
            <View style={[Styles.w60, Styles.al_center, Styles.jc_end, { bottom: 5 }]}>
                <Animated.Image
                    source={require("../../../assets/image/logo-header.png")}
                    style={[Styles.w70, { tintColor: imageSet, height: '32%' }]}
                />
            </View>
            <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
                {setNotify()}
            </View>
        </Animated.View>
    );
};

export default AnimatedHeader;