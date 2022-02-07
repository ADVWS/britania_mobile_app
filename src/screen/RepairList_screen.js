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
                <MainHeader name={LANG.homecare_text_18} backto={'InformOrder'} param={route.params.paramNav} />
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
                                <View style={[Styles.w80]}>
                                    <View style={[Styles.w100, Styles.row]}>
                                        <View style={[Styles.w70]}>
                                            <Text style={[Styles.mainFont, Styles.mt5, Styles.mainColor_text, { fontSize: 24 }]}>
                                                แก้ไขบานเลื่อน{' '}
                                            </Text>
                                        </View>
                                        <View style={[Styles.circle, Styles.al_center, Styles.jc_center, { backgroundColor: "#dbecfc" }]}>
                                            <Text style={[Styles.mainFont_x, Styles.mt5, { color: "#267bbf", marginLeft: 10, marginRight: 10, fontSize: 22 }]}>
                                                อยู่ระหว่างดำเนินการ
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={[Styles.mainFont, Styles.mt15, { fontSize: 22 }]}>
                                        {LANG.homecare_text_38}
                                    </Text>
                                    <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 22 }]}>
                                        13/06/62 10.00-11.00 น.
                                    </Text>
                                    <Text style={[Styles.mainFont, Styles.mt10, { fontSize: 22 }]}>
                                        {LANG.homecare_text_34}
                                    </Text>
                                    <Text style={[Styles.mainFont, Styles.mt5, { color: "#8f8f8f", fontSize: 22 }]}>
                                        {LANG.homecare_text_35}
                                    </Text>
                                    <ScrollView style={[Styles.w100, Styles.mt10]} horizontal={true}>
                                        {/* {data.image.map((item) => ( */}
                                        <Image
                                            source={{ uri: 'https://www.img.in.th/images/8a4c3c0ef923f5986bd541141fb66461.png' }}
                                            style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                                        />
                                        {/* ))} */}
                                    </ScrollView>
                                    <Text style={[Styles.mainFont, Styles.mt15, { color: "#8f8f8f", fontSize: 22 }]}>
                                        {LANG.homecare_text_36}
                                    </Text>
                                    <ScrollView style={[Styles.w100, Styles.mt10]} horizontal={true}>
                                        {/* {data.image.map((item) => ( */}
                                        <Image
                                            source={{ uri: 'https://www.tqm.co.th/gallery/2919.jpg' }}
                                            style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                                        />
                                        {/* ))} */}
                                    </ScrollView>
                                    <Text style={[Styles.mainFont, Styles.mt15, { color: "#8f8f8f", fontSize: 22 }]}>
                                        {LANG.homecare_text_37}
                                    </Text>
                                    <ScrollView style={[Styles.w100, Styles.mt10, Styles.mb20]} horizontal={true}>
                                        {/* {data.image.map((item) => ( */}
                                        <Image
                                            source={{ uri: 'https://scontent.fbkk9-3.fna.fbcdn.net/v/t1.6435-9/67665647_460250921476671_96206983962558464_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF9tD4Z4RAc_zlhYmf5CQtbox1wwKlkqvujHXDAqWSq-6F7k7TivBwke10U1M4GrDTIrywjRwf02A9hX6jv3arZ&_nc_ohc=2Ob-Y-zbqDsAX_7Q8Kx&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT9O6yF4L-ciM_8JhBUjxq6qSKfy4B80-Bs3eMRKu2J8mw&oe=61F90AD1' }}
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
