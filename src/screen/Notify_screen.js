import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { Styles } from "../styles";
import MainHeader from "../component/mainHeader";
import { LinearGradient } from "expo-linear-gradient";
import { SimpleLineIcons } from '@expo/vector-icons';
import Allnotify from "../component/Notify_component/Allnotify";
import Newsnotify from "../component/Notify_component/Newsnotify";
import Fixnotify from "../component/Notify_component/FixNotify";


const Notify = ({route}) => {
    const backto = route.params.screen
    const [all, setAll] = React.useState({open: true, color: "#f1645e", text: "#FFF"})
    const [news, setNews] = React.useState({open: false, color: "transparent", text: "#f1645e"})
    const [fix, setFix] = React.useState({open: false, color: "transparent", text: "#f1645e"})

    function changeTabs(req) {
        var select = {open: true, color: "#f1645e", text: "#FFF"}
        var notSelect = {open: false, color: "transparent", text: "#f1645e"}
        if(req === 'all'){
            setAll(select)
            setNews(notSelect)
            setFix(notSelect)
        }
        if(req === 'news'){
            setAll(notSelect)
            setNews(select)
            setFix(notSelect)
        }
        if(req === 'fix'){
            setAll(notSelect)
            setNews(notSelect)
            setFix(select)
        }
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <LinearGradient
                colors={["#fbd4d4", "#FFF", "#FFF"]}
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'แจ้งเตือน'} backto={backto} />
                <ScrollView style={[Styles.w100, Styles.p15]}>
                    <View style={[Styles.row, Styles.w100]}>
                        <TouchableOpacity onPress={()=>changeTabs('all')} style={[{ width: '25%', alignItems: 'center', backgroundColor: all.color }, Styles.p5, Styles.circle]}>
                            <Text style={[Styles.mainFont, Styles.f_16, { color: all.text }]}>ทั้งหมด</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={()=>changeTabs('news')} style={[{ width: '25%', alignItems: 'center', backgroundColor: news.color }, Styles.p5, Styles.circle]}>
                            <Text style={[Styles.mainFont, Styles.f_16, { color: news.text }]}>ข่าวสาร</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>changeTabs('fix')} style={[{ width: '25%', alignItems: 'center', backgroundColor: fix.color }, Styles.p5, Styles.circle]}>
                            <Text style={[Styles.mainFont, Styles.f_16, { color: fix.text }]}>ซ่อมแซม</Text>
                        </TouchableOpacity>
                    </View>
                    {all.open && 
                        <Allnotify />
                    }
                    {news.open && 
                        <Newsnotify />
                    }
                    {fix.open && 
                        <Fixnotify />
                    }
                </ScrollView>
            </LinearGradient>
        </View>
    );
}

export default Notify
