import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";

const Responsible = ({ route }) => {
    const [homecareName, setHomecareName] = React.useState(route.params.mechanic)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'เจ้าหน้าที่ Homecare ที่เข้าตรวจสอบ'} backto={'InformOrder'} param={route.params.paramNav}/>
                <ScrollView style={[Styles.w100, Styles.FFF]}>
                    {homecareName !== null ?
                        (<View style={[Styles.w100, Styles.p15, Styles.row]}>
                            <View style={[Styles.w35, Styles.jc_center]}>
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
                        </View>) :
                        (<View style={[Styles.w100, Styles.p15, Styles.al_center, Styles.jc_center, { marginTop: '30%' }]}>
                            <Image source={require('../../assets/image/Britania-connect-assets/employee.png')} style={{ height: 140, width: 140, tintColor: '#9f9f9f' }} />
                            <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, {color: '#9f9f9f'}]}>
                                {LANG.homecare_text_25}
                            </Text>
                        </View>)
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export default Responsible
