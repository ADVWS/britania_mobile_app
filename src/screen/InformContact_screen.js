import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";
import InformOrderList from "../component/InformContact_component/informOrderList";


const InformContact = ({ route }) => {
    console.log(route)
    const [address, setAddress] = React.useState('')
    const [fullname, setFullname] = React.useState('')
    function gotoInformContact() {
        navigate.navigate('InformContact')
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'แจ้งซ่อม'} backto={'InformAdd'} param={route.params.informSet} />
                <ScrollView style={[Styles.w100, Styles.flex]}>
                    <View style={[Styles.w100, Styles.p15, Styles.FFF]}>
                        <Text style={[Styles.f_14, Styles.mainFont]}>
                            ห้องที่ต้องการแจ้งซ่อม
                        </Text>
                        <TextInput
                            value={address}
                            style={[Styles.w100, Styles.p10, Styles.br_5, Styles.mt10, { borderColor: "#DDD", borderWidth: 1.5 }]}
                            onChangeText={(val) => {
                                setAddress(val)
                            }}
                        />
                        <Text style={[Styles.f_14, Styles.mainFont, Styles.mt15]}>
                            ชื่อ-นามสกุล
                        </Text>
                        <TextInput
                            value={fullname}
                            style={[Styles.w100, Styles.p10, Styles.br_5, Styles.mt10, { borderColor: "#DDD", borderWidth: 1.5 }]}
                            onChangeText={(val) => {
                                setFullname(val)
                            }}
                        />
                        <Text style={[Styles.f_14, Styles.mainFont, Styles.mt15]}>
                            เบอร์โทรศัพท์
                        </Text>
                        <TextInput
                            value={fullname}
                            style={[Styles.w100, Styles.p10, Styles.br_5, Styles.mt10, Styles.mb10, { borderColor: "#DDD", borderWidth: 1.5 }]}
                            onChangeText={(val) => {
                                setFullname(val)
                            }}
                        />
                    </View>
                    <View style={[Styles.w100, Styles.p15, Styles.FFF, Styles.mt10]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.mainColor_text]}>
                            รายการแจ้งซ่อม
                        </Text>
                        {route.params.informSet.map((item)=>(
                            <InformOrderList data={item} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default InformContact
