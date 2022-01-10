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
import { useRecoilState, useSetRecoilState } from "recoil";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";
import InformOrderList from "../component/InformContact_component/informOrderList";


const InformContact = ({ route }) => {
    console.log('ROUTE', route)
    const newContactInform = useSetRecoilState(Global.newContactInform)
    const newInform = useSetRecoilState(Global.newInform)
    const [contactInform, setContactInform] = useRecoilState(Global.newContactInform)
    console.log(contactInform)
    const [address, setAddress] = React.useState('')
    const [alAddress, setAladdress] = React.useState(false)
    const [alAddressColor, setAladdressColor] = React.useState("#DDD")
    const [fullname, setFullname] = React.useState('')
    const [alFullname, setAlfullname] = React.useState(false)
    const [alFullnameColor, setAlfullnameColor] = React.useState("#DDD")
    const [mobileno, setMobileno] = React.useState('')
    const [alMobileno, setAlmobileno] = React.useState(false)
    const [alMobilenoColor, setAlmobilenoColor] = React.useState("#DDD")
    function gotoInformContact() {
        navigate.navigate('InformContact')
    }

    React.useEffect(()=>{
        setAddress(contactInform.address)
        setFullname(contactInform.fullname)
        setMobileno(contactInform.mobileno)
    }, [])

    function Addmore(req) {
        var contact = {
            address: address,
            fullname: fullname,
            mobileno: mobileno,
        }
        newContactInform(contact)
        newInform(route.params.informSet)
        navigate.navigate('SelectTypeInform')
    }

    function gotoinformCalendar(){
        setAladdress(false)
        setAladdressColor('#DDD')
        setAlfullname(false)
        setAlfullnameColor('#DDD')
        setAlmobileno(false)
        setAlmobilenoColor('#DDD')
        var checker = []
        if (address === "") {
            checker.push(false)
            setAladdress(true)
            setAladdressColor('red')
        }
        if (fullname === "") {
            checker.push(false)
            setAlfullname(true)
            setAlfullnameColor('red')
        }
        if(mobileno === ""){
            checker.push(false)
            setAlmobileno(true)
            setAlmobilenoColor('red')
        }
        if(checker.indexOf(false) !== -1){
            return
        }
        var contact = {
            address: address,
            fullname: fullname,
            mobileno: mobileno,
        }
        newContactInform(contact)
        newInform(route.params.informSet)
        navigate.navigate('InformCalendar')
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'แจ้งซ่อม'} backto={'InformAdd'} param={route.params} />
                <ScrollView style={[Styles.w100, Styles.flex]}>
                    <View style={[Styles.w100, Styles.p15, Styles.FFF]}>
                        <Text style={[Styles.f_14, Styles.mainFont]}>
                            ห้องที่ต้องการแจ้งซ่อม
                        </Text>
                        <TextInput
                            value={address}
                            style={[Styles.w100, Styles.p10, Styles.br_5, Styles.mt10, { borderColor: alAddressColor, borderWidth: 1.5 }]}
                            onChangeText={(val) => {
                                setAddress(val)
                            }}
                        />
                        {alAddress &&
                            <Text style={[Styles.f_12, Styles.mainFont, Styles.mt5, { color: 'red' }]}>
                                กรุณาระบุ "ห้องที่ต้องการแจ้งซ่อม"
                            </Text>
                        }
                        <Text style={[Styles.f_14, Styles.mainFont, Styles.mt15]}>
                            ชื่อ-นามสกุล
                        </Text>
                        <TextInput
                            value={fullname}
                            style={[Styles.w100, Styles.p10, Styles.br_5, Styles.mt10, { borderColor: alFullnameColor, borderWidth: 1.5 }]}
                            onChangeText={(val) => {
                                setFullname(val)
                            }}
                        />
                        {alFullname &&
                            <Text style={[Styles.f_12, Styles.mainFont, Styles.mt5, { color: 'red' }]}>
                                กรุณาระบุ "ชื่อ-นามสกุล"
                            </Text>
                        }
                        <Text style={[Styles.f_14, Styles.mainFont, Styles.mt15]}>
                            เบอร์โทรศัพท์
                        </Text>
                        <TextInput
                            value={mobileno}
                            style={[Styles.w100, Styles.p10, Styles.br_5, Styles.mt10, Styles.mb10, { borderColor: alMobilenoColor, borderWidth: 1.5 }]}
                            onChangeText={(val) => {
                                setMobileno(val)
                            }}
                        />
                        {alMobileno &&
                            <Text style={[Styles.f_12, Styles.mainFont, Styles.mt5, { color: 'red' }]}>
                                กรุณาระบุ "เบอร์โทรศัพท์"
                            </Text>
                        }
                    </View>
                    <View style={[Styles.w100, Styles.p15, Styles.FFF, Styles.mt10]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.mainColor_text]}>
                            รายการแจ้งซ่อม
                        </Text>
                        <InformOrderList data={route.params.informSet} Addmore={Addmore} gotoinformCalendar={gotoinformCalendar}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default InformContact
