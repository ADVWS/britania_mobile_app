import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";

const RepiairList = ({ route }) => {
    const [homecareName, setHomecareName] = React.useState(route.params.mechanic)
    const [LANG, setLANG] = useRecoilState(Global.Language)

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                ]}>
                <MainHeader name={LANG.homecare_text_19} backto={'InformOrder'} param={route.params.paramNav} />
                <ScrollView style={[Styles.w100]}>
                    {homecareName !== null ? (
                        <>
                            <View style={[Styles.w100, Styles.p15, Styles.FFF]}>
                                <Text style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text, Styles.mb10]}>
                                    {LANG.homecare_text_18}
                                </Text>
                                <View style={[Styles.w100, Styles.row]}>
                                    <View style={[Styles.w35, Styles.jc_center]}>
                                        {/* <Image source={{ uri: item.image }} style={[Styles.circle, { height: 110, width: 110 }]} /> */}
                                        {homecareName.image ? (<Image source={{ uri: homecareName.image }} style={[Styles.circle, { height: 100, width: 100 }]} />) : 
                                        (<Image source={require('../../assets/image/Britania-connect-assets/default-img-circle.png')} style={[Styles.circle, { height: 100, width: 100 }]} />)}
                                    </View>
                                    <View style={[Styles.w80]}>
                                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5]}>
                                            {LANG.homecare_text_26}
                                        </Text>
                                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                            {homecareName.firstnameThai} {homecareName.lastnameThai}
                                        </Text>
                                        <View style={[Styles.w100, Styles.row, Styles.mt5]}>
                                            <View style={[Styles.w45]}>
                                                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5]}>
                                                    {LANG.homecare_text_23}
                                                </Text>
                                                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                                    {homecareName.workPhone}
                                                </Text>
                                            </View>
                                            <View style={[Styles.w50]}>
                                                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5]}>
                                                    {LANG.homecare_text_24}
                                                </Text>
                                                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                                    {homecareName.lineId}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[Styles.w100, Styles.p15, Styles.FFF, Styles.mt10, { height: '100%' }]}>
                                <View style={[Styles.w100]}>
                                    <View style={[Styles.w100, Styles.row]}>
                                        <View style={[Styles.w50]}>
                                            <Text style={[Styles.mainFont, Styles.mt15, { fontSize: 22 }]}>
                                                {LANG.homecare_text_38}
                                            </Text>
                                        </View>
                                        <View style={[Styles.w50, Styles.al_end, Styles.mt10]}>
                                            <View style={[Styles.circle, Styles.al_center, Styles.jc_center, { backgroundColor: "#dbecfc" }]}>
                                                <Text style={[Styles.mainFont_x, Styles.mt5, { color: "#267bbf", marginLeft: 10, marginRight: 10, fontSize: 20 }]}>
                                                    อยู่ระหว่างดำเนินการ
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 22 }]}>
                                        13/06/62 10.00-11.00 น.
                                    </Text>
                                    <Text style={[Styles.mainFont, Styles.mt10, { fontSize: 22 }]}>
                                        {LANG.homecare_text_30}
                                    </Text>
                                    <Text style={[Styles.mainFont, Styles.mt5, { color: "#8f8f8f", fontSize: 22 }]}>
                                        Lorem ipsum
                                    </Text>
                                    <Text style={[Styles.mainFont, Styles.mt10, { fontSize: 22 }]}>
                                        {LANG.homecare_text_16}
                                    </Text>
                                    <ScrollView style={[Styles.w100, Styles.mt10]} horizontal={true}>
                                        {/* {data.image.map((item) => ( */}
                                        <Image
                                            source={{ uri: 'https://www.tqm.co.th/gallery/2919.jpg' }}
                                            style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                                        />
                                        {/* ))} */}
                                    </ScrollView>
                                </View>
                            </View>
                        </>) : (<View style={[Styles.w100, Styles.p15, Styles.al_center, Styles.jc_center, { marginTop: '30%' }]}>
                            <Image source={require('../../assets/image/Britania-connect-assets/employee.png')} style={{ height: 140, width: 140, tintColor: '#9f9f9f' }} />
                            <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: '#9f9f9f' }]}>
                                {LANG.homecare_text_39}
                            </Text>
                        </View>)
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export default RepiairList
