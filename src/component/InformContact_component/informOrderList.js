import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import mainScript from "../../script";

import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";

import * as Global from "../../globalState"
import { useRecoilState, useSetRecoilState } from "recoil";


const InformOrderList = ({ item, deleteItem }) => {
    const [LANG, setLANG] = useRecoilState(Global.Language)
    return (
        <>
            <View style={[Styles.w100, Styles.p15, Styles.mt15, Styles.br_5, { backgroundColor: "#ffecec" }]}>
                <View style={[Styles.w100, Styles.row]}>
                    <View style={[Styles.w50]}>
                        <Text style={[Styles.f_22, Styles.mainFont]}>
                            {LANG.informcontact_text_06}
                        </Text>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                            {mainScript.setTypeInform(item.categoryId, LANG)}
                        </Text>
                    </View>
                    <TouchableOpacity style={[Styles.w50, Styles.al_end]} onPress={()=>deleteItem(item.id)}>
                        <Feather name="trash" size={20} style={[Styles.mainColor_text]} />
                    </TouchableOpacity>
                </View>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10,]}>
                    {LANG.informcontact_text_07}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                    {item.description}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10,]}>
                    {LANG.informcontact_text_08}
                </Text>
                <ScrollView style={[Styles.w100, Styles.mt5]} horizontal={true}>
                    {item.imgUri.length > 0 ? (item.imgUri.map((img) => (
                        <Image
                            //source={{ uri: `https://btnconnectapi.myorigin.net/image/profile/${img.fileCurName}` }}
                            source={{uri: img}}
                            style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                        />
                    ))) : (
                        <>
                            <Image
                                source={require('../../../assets/image/image_not_found.png')}
                                style={[Styles.br_5, { width: 120, height: 120, marginRight: 10, opacity: 0.3 }]}
                            />
                        </>
                    )}
                </ScrollView>
            </View>
        </>
    );
}

export default InformOrderList
