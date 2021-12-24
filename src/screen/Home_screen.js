import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Keyboard,
    Image,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../navigator/RootNavigation";

import Banner from "../component/Home_component/Banner";

import { Styles } from "../styles";
//transparent
export default function Home() {
    const [images, setImages] = React.useState([
        require('../../assets/image/banner/banner_1.jpeg'),
        require('../../assets/image/banner/banner_2.jpeg'),
    ])
    const [feeds, setFeeds] = React.useState([
        {
            image: require('../../assets/image/feed/feed_1.jpeg'),
            topic: "บริทาเนีย ให้เหนือกว่าใคร กับ โปรอยู่ฟรีสูงสุด 2 ปี",
            detail: "8 โครงการบ้านเดี่ยว บ้านแฝด ทาวน์โฮม พร้อมเข้าอยู่สไตล์ Modern British"
        },
        {
            image: require('../../assets/image/feed/feed_2.png'),
            topic: "โปรปลดล็อก บริทาเนีย บางนา กม.42",
            detail: "บ้านขทาวน์โฮม พร้อมด้วยคลับเฮาส์สุดหรู ว่ายน้ำ ฟิตเนสใหญ่สุด สวนมากสุด2โซน"
        }
    ])
    return (
        <LinearGradient
            colors={["#fbd4d4", "#FFF", "#FFF"]}
            style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20, { backgroundColor: 'transparent' }]}>
                    <View style={[Styles.w20]} />
                    <View style={[Styles.w60, Styles.al_center, Styles.jc_end]}>
                        <Image
                            source={require("../../assets/image/logo2.png")}
                            style={[Styles.w80, Styles.h50]}
                        />
                    </View>
                    <View style={[Styles.w20, Styles.al_end, Styles.jc_end, Styles.p5]}>
                        <MaterialIcons name="notifications-none" size={26} color="#f1645e" />
                    </View>
                </View>
                <ScrollView style={[Styles.w100, Styles.h75]}>
                    <View style={[Styles.w100, Styles.al_center, { height: 260 }]}>
                        <Banner images={images} />
                    </View>
                    <View style={[Styles.w100, Styles.p20, { marginTop: '-15%' }]}>
                        <Text
                            style={[
                                Styles.f_18,
                                Styles.mainFont,
                                Styles.mainColor_text,
                            ]}>
                            ข่าวสาร & กิจกรรม
                        </Text>
                        <View style={[Styles.w100]}>
                            {feeds.map((item) => (
                                <View style={[Styles.w100, Styles.mt15, Styles.boxWithShadow]}>
                                    <Image source={item.image} style={[Styles.w100, { height: 170, borderTopLeftRadius: 5, borderTopRightRadius: 5 }]} />
                                    <View style={[Styles.w100, Styles.p15, Styles.FFF, { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }]}>
                                        <Text
                                            style={[
                                                Styles.f_16,
                                                Styles.mainFont,
                                                Styles.mainColor_text,
                                            ]}>
                                            {item.topic}
                                        </Text>
                                        <Text
                                            style={[
                                                Styles.f_14,
                                                Styles.mainFont_thin,
                                                Styles.mt10
                                            ]}>
                                            {item.detail}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
}
