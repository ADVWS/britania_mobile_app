import React from 'react';
import { Animated, View, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from '../../styles';

const HEADER_HEIGHT = 50;
const AnimatedHeader = ({ animatedValue }) => {
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
    return (
        <Animated.View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20, { backgroundColor: colorSet}]}>
            <View style={[Styles.w20]} />
            <View style={[Styles.w60, Styles.al_center, Styles.jc_end, {bottom: 5}]}>
                <Animated.Image
                    source={require("../../../assets/image/logo-header.png")}
                    style={[Styles.w70, {tintColor: imageSet, height: '32%'}]}
                />
            </View>
            <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
                <Animated.Text style={{color: imageSet}}><MaterialIcons name="notifications-none" size={26}/></Animated.Text>
            </View>
        </Animated.View>
    );
};

export default AnimatedHeader;