import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";


const InformAdd = ({ route }) => {
    console.log(route.params.informType)
    const [groupinformSet, setGroupInformSet] = useRecoilState(Global.informSet)
    const gobalData = useSetRecoilState(Global.informSet)
    const [imageAdd, setImageAdd] = React.useState([])
    const [display, setDisplay] = React.useState(false)
    const [comment, setComment] = React.useState("");
    const [detail, setDetail] = React.useState("");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        var imageset = imageAdd
        console.log(result);
        setDisplay(false)
        if (!result.cancelled) {
            imageset.push(result.uri)
            setImageAdd(imageset);
            if (imageAdd.length > 0) {
                setDisplay(true)
            } else {
                setDisplay(false)
            }
        }
    };

    function gotoInformContact() {
        var informSet;
        if (route.params.informSet) {
            informSet = route.params.informSet
        } else {
            informSet = []
        }
        var informData = {
            type: route.params.informType,
            image: imageAdd,
            detail: detail,
            comment: comment
        }

        informSet.push(informData)
        navigate.navigate('InformContact', {informSet})
    }

    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'แจ้งซ่อม'} backto={'SelectTypeInform'} />
                <KeyboardAvoidingView style={[Styles.w100, Styles.h100]}  behavior="padding">
                    <ScrollView style={[Styles.w100, Styles.FFF, Styles.flex]}>
                        <View style={[Styles.w100, Styles.p15]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.mainColor_text]}>
                                ข้อมูลเพิ่มเติม
                            </Text>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.mt20]}>
                                รูปภาพ
                            </Text>
                            <TouchableOpacity onPress={() => { pickImage() }}
                                style={[Styles.w100, Styles.br_5, Styles.p10, Styles.mt5, Styles.row, Styles.jc_center, { borderColor: "#f1645e", borderWidth: 1.5 }]}>
                                <Image source={require("../../assets/image/add_image.png")} style={{ width: 30, height: 30 }} />
                                <Text style={[Styles.f_16, Styles.mainFont, Styles.mainColor_text, Styles.text_center, Styles.p4]}>
                                    เพิ่มรูป
                                </Text>
                            </TouchableOpacity>
                            {display &&
                                <ScrollView style={[Styles.w100, Styles.mt20]} horizontal={true}>
                                    {imageAdd.map((item) => (
                                        <Image
                                            source={{ uri: item }}
                                            style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                                        />
                                    ))}
                                </ScrollView>
                            }
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.mt20]}>
                                รายระเอียด
                            </Text>
                            <TextInput
                                value={detail}
                                style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt10, { borderColor: "#DDD", borderWidth: 1.5, height: 130 }]}
                                multiline={true}
                                numberOfLines={6}
                                onChangeText={(val) => {
                                    setDetail(val)
                                }}
                            />
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.mt10]}>
                                หมายเหตุ
                            </Text>
                            <TextInput
                                value={comment}
                                style={[Styles.w100, Styles.p15, Styles.br_5, Styles.mt10, { borderColor: "#DDD", borderWidth: 1.5, height: 80 }]}
                                multiline={true}
                                numberOfLines={6}
                                onChangeText={(val) => {
                                    setComment(val)
                                }}
                            />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                <TouchableOpacity
                    onPress={() => gotoInformContact()}
                    style={[Styles.w90, Styles.p15, Styles.br_5, Styles.mt20, Styles.mb20, Styles.mainColor, Styles.absolute, { bottom: 20 }]}>
                    <Text style={[Styles.f_16, Styles.white_text, Styles.mainFont, Styles.text_center]}>
                        ยืนยัน
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default InformAdd
