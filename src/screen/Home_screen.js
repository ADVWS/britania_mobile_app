import * as React from "react";
import {
    View,
    Text,
    Animated,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as navigate from "../navigator/RootNavigation";

import Banner from "../component/Home_component/Banner";
import AnimatedHeader from "../component/Home_component/AnimationHeader";
import Feed from "../component/Home_component/Feeds";

import { useRecoilState } from "recoil";
import * as Global from "../globalState"

import { Styles } from "../styles";
//transparent f1645e
export default function Home() {
    const [userProfile, setUserProfile] = useRecoilState(Global.userProfile)
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
    const scrollref = React.createRef();
    const offset = React.useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={["#fbd4d4", "#FFF", "#FFF"]}
                style={[Styles.flex, Styles.al_center]}>
                <View
                    style={[
                        Styles.al_center,
                        Styles.w100,
                        Styles.h100
                    ]}>
                    <AnimatedHeader animatedValue={offset} />
                    <ScrollView
                        ref={scrollref}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: offset } } }],
                            { useNativeDriver: false }
                        )}
                        style={[Styles.w100, Styles.h75]
                        }>
                        <View style={[Styles.w100, Styles.p20]}>
                            <Text style={[Styles.mainFont_x_db, Styles.f_24, Styles.black_gray_text]}>
                                ยินดีต้อนรับ{' '}
                                <Text style={[Styles.f_24, Styles.mainFont_x]}>
                                    {userProfile.me.name}
                                </Text>
                            </Text>
                        </View>
                        <View style={[Styles.w100, Styles.p20, Styles.al_center, { height: 260, marginTop: '-8%' }]}>
                            <Banner images={images} />
                        </View>
                        <View style={[Styles.w100, Styles.p20, { marginTop: '-7%' }]}>
                            <Text
                                style={[
                                    Styles.f_26,
                                    Styles.mainFont,
                                    Styles.mainColor_text,
                                ]}>
                                ข่าวสาร & กิจกรรม
                            </Text>
                            <Feed feeds={feeds}/>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </SafeAreaProvider>
    );
}
