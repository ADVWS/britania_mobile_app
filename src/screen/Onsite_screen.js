import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";

import * as Global from "../globalState"

import { Styles } from "../styles";
import Modal from "react-native-modal";

import MainHeader from "../component/mainHeader";
import moment from "moment";

const Onsite = ({ route }) => {
    const { height, width } = Dimensions.get('window');
    const actualDimensions = {
        height: (height < width) ? width : height,
        heightLayoutTop: 200,
        width: (width > height) ? height : width
    };
    const [homecareName, setHomecareName] = React.useState(route.params.mechanic)
    const [userCase, setUserCase] = React.useState(route.params._CASE)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const [zoom, setZoom] = React.useState(false);
    const [izoom, setiZoom] = React.useState("");

    console.log(userCase)
    
    function zoomImage(img) {
        setZoom(true);
        setiZoom(img);
    }

    const RemoteImage = ({ uri, desiredWidth }) => {
        const [desiredHeight, setDesiredHeight] = React.useState(0);
    
        Image.getSize(uri, (width, height) => {
          setDesiredHeight((desiredWidth / width) * height);
        });
    
        return desiredHeight > 926 ? (
          <Image
            source={require("../../assets/image_over.png")}
            style={{
              width: 420,
              height: 400,
            }}
          />
        ) : (
          <Image
            source={{ uri }}
            style={{
              width: desiredWidth,
              height: desiredHeight,
            }}
          />
        );
      };

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100,
                ]}>
                <MainHeader name={LANG.homecare_text_18} backto={'InformOrder'} param={route.params.paramNav}/>
                <ScrollView style={[Styles.w100]}>
                    {homecareName !== null ?
                        (<>
                            <View style={[Styles.w100, Styles.p15, Styles.FFF]}>
                                <Text style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text, Styles.mb10]}>
                                    {LANG.homecare_text_27}
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
                            <View style={[Styles.w100, Styles.mt10, { height: '100%' }]}>
                                <View style={[Styles.FFF, Styles.w100, Styles.p15]}>
                                    <Text style={[Styles.mainFont, Styles.mt5, { fontSize: 22 }]}>
                                        {LANG.homecare_text_27_1}
                                    </Text>
                                    <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 22 }]}>
                                        {userCase.isDateWork !== null ? moment(userCase.isDateWork).format("DD/MM/YYYY HH:mm") + ' น.' : '-'}
                                    </Text>
                                    <Text style={[Styles.mainFont, Styles.mt10, { fontSize: 22 }]}>
                                        {LANG.homecare_text_30}
                                    </Text>
                                    <Text style={[Styles.mainFont, { color: "#8f8f8f", fontSize: 22 }]}>
                                        {userCase.remark ? homecareName.remark : '-'}
                                    </Text>
                                    <Text style={[Styles.mainFont, Styles.mt10, { fontSize: 22 }]}>
                                        {LANG.homecare_text_16}
                                    </Text>
                                    <ScrollView style={[Styles.w100, Styles.mt10]} horizontal={true}>
                                        {userCase.files && userCase.files.map(function(e) { return e.status; }).indexOf('Checking') !== -1  ?
                                            <>
                                            {userCase.files.map((item) => (
                                                <>
                                                {item.status !== null && item.status == "Checking" &&
                                                    <TouchableOpacity onPress={()=>zoomImage(item.homecareImageSrc)}>
                                                        <Image
                                                            source={{ uri: item.homecareImageSrc }}
                                                            style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                                                        />
                                                    </TouchableOpacity>
                                                }
                                                </>
                                            ))}
                                            </> : 
                                            <Image
                                                source={require('../../assets/image/image_not_found.png')}
                                                style={[Styles.br_5, { width: 120, height: 120, marginRight: 10, opacity: 0.5 }]}
                                            />
                                        }
                                    </ScrollView>
                                </View>
                            </View>
                        </>) :
                        (<View style={[Styles.w100, Styles.p15, Styles.al_center, Styles.jc_center, { marginTop: '30%' }]}>
                            <Image source={require('../../assets/image/Britania-connect-assets/employee.png')} style={{ height: 140, width: 140, tintColor: '#9f9f9f' }} />
                            <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: '#9f9f9f' }]}>
                                {LANG.homecare_text_31}
                            </Text>
                        </View>)
                    }
                </ScrollView>
            </View>
            <Modal
                onBackdropPress={()=>setZoom(false) }
                isVisible={zoom}
                style={[Styles.al_center, Styles.jc_center]}>
                <RemoteImage
                    uri={izoom}
                    desiredWidth={Dimensions.get("window").width - 60}
                />
            </Modal>
        </View>
    );
}

export default Onsite
