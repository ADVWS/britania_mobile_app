import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import { FontAwesome } from '@expo/vector-icons';

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";
import Vote from "../component/Satisfaction_component/vote";

const Satisfaction = ({ route }) => {
    console.log(route.params.mechanic)
    const [question, setQuestion] = React.useState(route.params.QUES)
    const [rate, setRate] = React.useState({})
    const sendRate = (rate) => {
        console.log('RATE', rate)
        setRate(rate)
    }
    const setImage = (image) => {
        if(image){
            return (<Image source={{uri: route.params.mechanic.image}} style={[Styles.circle, { height: 100, width: 100 }]} />)
        } else {
            return (<Image source={require('../../assets/image/Britania-connect-assets/default-img-circle.png')} style={[Styles.circle, { height: 100, width: 100 }]} />)
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding"
            style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                ]}>
                <MainHeader name={'ประเมินความพึงพอใจ'} backto={'InformOrder'} param={route.params.paramNav} />
                <ScrollView style={[Styles.w100, Styles.FFF]}>
                    <View style={[Styles.w100, Styles.p15, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                        {/* <Image source={{ uri: item.image }} style={[Styles.circle, { height: 110, width: 110 }]} /> */}
                        <View style={[Styles.w100, Styles.al_center]}>
                            {setImage(route.params.mechanic)}
                            <Text style={[Styles.f_24, Styles.mainFont, Styles.mt10, Styles.text_center]}>
                                {route.params.mechanic ? route.params.mechanic.firstnameThai + ' ' + route.params.mechanic.lastnameThai : '-'}
                            </Text>
                            <Text style={[Styles.f_24, Styles.mainFont, { color: "#8f8f8f" }]}>
                                เจ้าหน้าที่ Homecare ที่เข้าซ่อม
                            </Text>
                        </View>
                        <Text style={[Styles.f_22, Styles.mainFont_x, Styles.mt10]}>
                            1 = พึงพอใจน้อยที่สุด     5 = พึงพอใจมากที่สุด
                        </Text>
                    </View>
                    <Vote question={question} sendRate={sendRate}/>
                    <View style={[Styles.w100, Styles.p15]}>
                        <Text style={[Styles.f_22, Styles.mainFont_x]}>
                            ชมเชย/เสนอแนะ
                        </Text>
                        <TextInput style={[Styles.w100, Styles.p15, Styles.br_5, { borderWidth: 0.5, borderColor: "#DDD" }]} />
                        {route.params.mechanic ?
                            (<TouchableOpacity
                                onPress={() => navigate.navigate('Homecare')}
                                style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt20, Styles.mb20, Styles.mainColor]}>
                                <Text style={[Styles.f_24, Styles.white_text, Styles.mainFont, Styles.text_center]}>
                                    ยืนยัน
                                </Text>
                            </TouchableOpacity>) :
                            (<TouchableOpacity
                                disabled={true}
                                onPress={() => navigate.navigate('Homecare')}
                                style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt20, Styles.mb20, Styles.DDD]}>
                                <Text style={[Styles.f_24, Styles.white_text, Styles.mainFont, Styles.text_center]}>
                                    ยืนยัน
                                </Text>
                            </TouchableOpacity>)
                        }
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Satisfaction
