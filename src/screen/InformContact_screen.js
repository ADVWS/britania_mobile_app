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

import * as Global from "../globalState"
import { Feather } from "@expo/vector-icons";
import { Styles } from "../styles";
import Key from "../KEYS.json"
import MainHeader from "../component/mainHeader";
import InformOrderList from "../component/InformContact_component/informOrderList";
import mainScript from "../script";
import getTime from "../script/getTimeCheckin_script";

const InformContact = ({ route }) => {
    const newContactInform = useSetRecoilState(Global.newContactInform)
    const _setNewInform = useSetRecoilState(Global.newInform)
    const timecheck = useSetRecoilState(Global.checkInTime)
    const [newInform, setListNewInform] = useRecoilState(Global.newInform)
    const [caseList, setCaseList] = useRecoilState(Global.caseList)
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

    console.log(newInform)

    React.useEffect(() => {
        //setAddress(newInform.address)
        setFullname(newInform.owner)
        setMobileno(newInform.phoneOwner)
    }, [])

    function Addmore(req) {
        console.log(caseList)
        navigate.navigate('SelectTypeInform')
    }

    function gotoinformCalendar() {
        console.log('hi')
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
        if (mobileno === "") {
            checker.push(false)
            setAlmobileno(true)
            setAlmobilenoColor('red')
        }
        if (checker.indexOf(false) !== -1) {
            return
        }
        var _newInform = mainScript.recoilTranform(newInform)
        _newInform.owner = fullname
        _newInform.phoneOwner = mobileno
        _newInform.details = caseList
        getTime.homecareGetCheckInRangeTimeOptions(Key.TOKEN, (res) => {
            console.log('time', res)
            _setNewInform(_newInform)
            timecheck(res)
            navigate.navigate('InformCalendar')
        })
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
                        <Text style={[Styles.f_22, Styles.mainFont]}>
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
                            <Text style={[Styles.f_20, Styles.mainFont, Styles.mt5, { color: 'red' }]}>
                                กรุณาระบุ "ห้องที่ต้องการแจ้งซ่อม"
                            </Text>
                        }
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt15]}>
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
                            <Text style={[Styles.f_20, Styles.mainFont, Styles.mt5, { color: 'red' }]}>
                                กรุณาระบุ "ชื่อ-นามสกุล"
                            </Text>
                        }
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt15]}>
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
                            <Text style={[Styles.f_20, Styles.mainFont, Styles.mt5, { color: 'red' }]}>
                                กรุณาระบุ "เบอร์โทรศัพท์"
                            </Text>
                        }
                    </View>
                    <View style={[Styles.w100, Styles.p15, Styles.FFF, Styles.mt10]}>
                        <Text style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text]}>
                            รายการแจ้งซ่อม
                        </Text>
                        {caseList.map((item)=>
                            <InformOrderList item={item} />
                        )}
                        <TouchableOpacity
                            onPress={() => Addmore()}
                            style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt10, Styles.mb20, Styles.row, { borderColor: "#f1645e", borderWidth: 1.5 }]}>
                            <View style={[Styles.w40, Styles.al_end]}>
                                <Feather name="plus" size={24} color="#f1645e" />
                            </View>
                            <Text style={[Styles.f_22, Styles.mainColor_text, Styles.mainFont]}>
                                {' '}เพิ่มรายการ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => gotoinformCalendar()}
                            style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt10, Styles.mb20, Styles.row, Styles.mainColor]}>
                            <View style={[Styles.w50, Styles.al_end]}>
                                <Text style={[Styles.f_22, Styles.white_text, Styles.mainFont]}>
                                    ถัดไป
                                </Text>
                            </View>
                            <View style={[Styles.w45, Styles.al_start]}>
                                <Feather name="arrow-right" size={24} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default InformContact
