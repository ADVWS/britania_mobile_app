import * as React from "react";
import {
    View,
    Text,
    Animated,
    ScrollView,
    Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as navigate from "../navigator/RootNavigation";

import Banner from "../component/Home_component/Banner";
import AnimatedHeader from "../component/Home_component/AnimationHeader";
import Feed from "../component/Home_component/Feeds";

import { useRecoilState } from "recoil";
import * as Global from "../globalState"
import Script from "../script/Home_script"

import { Styles } from "../styles";
export default function Home() {
    const [userProfile, setUserProfile] = useRecoilState(Global.userProfile)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const [banner, setBanner] = React.useState([])
    const [feeds, setFeeds] = React.useState([])
    const scrollref = React.createRef();
    const offset = React.useRef(new Animated.Value(0)).current;
    console.log(userProfile)
    React.useEffect(() => {
        Script.announcement((res) => {
            setBanner(res.banner)
            setFeeds(res.feeds)
        })
    }, [])

    return (
        <SafeAreaProvider>
            <View
                style={[Styles.flex, Styles.al_center, Styles.mainColorF9]}>
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
                            {userProfile.me &&
                                <Text style={[Styles.mainFont_x_db, Styles.f_24, Styles.black_gray_text]}>
                                    {LANG.home_text_01}{' '}
                                    <Text style={[Styles.f_24, Platform.OS === 'ios' ? Styles.mainFont_x : null]}>
                                        {userProfile.me.name}
                                    </Text>
                                </Text>
                            }
                        </View>
                        <View style={[Styles.w100, Styles.p20, Styles.al_center, { height: 260, marginTop: '-9%' }]}>
                            <Banner banner={banner} />
                        </View>
                        <View style={[Styles.w100, Styles.p20, { marginTop: '-7%' }]}>
                            <Text
                                style={[
                                    Styles.f_26,
                                    Styles.mainFont,
                                    Styles.mainColor_text,
                                ]}>
                                {LANG.home_text_02}
                            </Text>
                            <Feed feeds={feeds} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaProvider>
    );
}
