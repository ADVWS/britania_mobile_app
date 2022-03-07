import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import Key from '../../KEYS.json'
import Script from "../../script/Satisfaction_script";
import mainScript from "../../script";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState"

const OrderList = ({ data, index, route, informDetail }) => {
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT)
    console.log('data', data)
    var paramNav = route

    function gotoResponsible(param) {
        var mechanic = param
        navigate.navigate('Responsible', {paramNav, mechanic})
    }

    function gotoOnsite(param) {
        var mechanic = param
        navigate.navigate('Onsite', {paramNav, mechanic})
    }

    function gotoRepiairList(param) {
        var mechanic = param
        navigate.navigate('RepiairList', {paramNav, mechanic})
    }

    function gotoSatisfaction(param) {
        Script.homecareAllCsatQuestion(Key.TOKEN, (res)=>{
            var mechanic = param
            var QUES = res
            var thisCase = data
            navigate.navigate('Satisfaction', { paramNav, mechanic, QUES, informDetail, thisCase})
        })
    }

    return (
        <>
            <View
                style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.mainColorF9,
                    Styles.mt10
                ]}>
                <Text style={[Styles.mainColor_text, Styles.f_22, Styles.mainFont_x_db]}>
                    {LANG.homecare_text_11} {index}
                </Text>
                <View style={[Styles.w100, Styles.row, Styles.mt10]}>
                    <View style={[Styles.w50]}>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                            {LANG.homecare_text_12}
                        </Text>
                        <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
                            {data.category !== null ? mainScript.setTypeInform(data.category.id, LANG) : '-'}
                        </Text>
                    </View>
                    <View style={[Styles.w50, Styles.al_start]}>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                            {LANG.homecare_text_13}
                        </Text>
                        <Text style={[Styles.f_20, Styles.mainFont, { color: "#8f8f8f" }]}>
                            {data.isRate ?  LANG.homecare_text_20 : LANG.homecare_text_14}
                        </Text>
                    </View>
                </View>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5]}>
                    {LANG.homecare_text_15}
                </Text>
                <Text style={[Styles.mainFont, Styles.f_20, { color: "#8f8f8f" }]}>
                    {data.description}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.spacing5, Styles.mt10]}>
                    {LANG.homecare_text_16}
                </Text>
                <ScrollView style={[Styles.w100, Styles.mt5]} horizontal={true}>
                    {data.image ? (
                            <>
                                {data.image.map((item) => (
                                    <Image
                                        source={{ uri: item }}
                                        style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                                    />
                                ))}
                            </>
                        ) : (
                            <Image
                                source={require("../../../assets/image/image_not_found.png")}
                                style={[Styles.br_5, { width: 120, height: 120, marginRight: 10, opacity: 0.3}]}
                            />
                        )
                    }
                </ScrollView>
                {data.status !== 'Pending' &&
                    <TouchableOpacity
                        onPress={() => gotoResponsible(data.homecareName)}
                        style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt20, { backgroundColor: '#ffecec' }]}>
                        <View style={[Styles.w80]}>
                            <Text style={[Styles.f_22, Styles.mainColor_text, Styles.mainFont, Styles.mt5]}>
                                {LANG.homecare_text_17}
                            </Text>
                        </View>
                        <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                            <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.mainColor_text} />
                        </View>
                    </TouchableOpacity>
                }
                {data.status !== 'Pending' && data.status !== 'Assign' &&
                    <TouchableOpacity
                        onPress={() => gotoOnsite(data.homecareName)}
                        style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt10, { backgroundColor: '#ffecec' }]}>
                        <View style={[Styles.w80]}>
                            <Text style={[Styles.f_22, Styles.mainColor_text, Styles.mainFont, Styles.mt5]}>
                                {LANG.homecare_text_18}
                            </Text>
                        </View>
                        <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                            <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.mainColor_text} />
                        </View>
                    </TouchableOpacity>
                }
                {data.status !== 'Pending' && data.status !== 'Assign' && data.status !== 'Checking' && data.status !== "Hold-Customer" &&
                    <TouchableOpacity
                        onPress={() => gotoRepiairList(data.homecareName)}
                        style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt10, Styles.mb10, { backgroundColor: '#ffecec' }]}>
                        <View style={[Styles.w80]}>
                            <Text style={[Styles.f_22, Styles.mainColor_text, Styles.mainFont, Styles.mt5]}>
                                {LANG.homecare_text_19}
                            </Text>
                        </View>
                        <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                            <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.mainColor_text} />
                        </View>
                    </TouchableOpacity>
                }
                {route === "SUCCESS" &&
                    <TouchableOpacity
                        onPress={() => gotoSatisfaction(data.homecareName)}
                        style={[Styles.w100, Styles.p15, Styles.mainColor, Styles.br_5, Styles.al_center, { marginBottom: 20 }]}>
                        <Text style={[Styles.f_24, Styles.white_text, Styles.mainFont, Styles.mt5]}>
                            {LANG.homecare_text_21}
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </>
    );
}

export default OrderList
