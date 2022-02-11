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


const InformOrderList = ({ item }) => {
    console.log('InformOrderList=', item)
    return (
        <>
            <View style={[Styles.w100, Styles.p15, Styles.mt15, Styles.br_5, { backgroundColor: "#ffecec" }]}>
                <View style={[Styles.w100, Styles.row]}>
                    <View style={[Styles.w50]}>
                        <Text style={[Styles.f_22, Styles.mainFont]}>
                            ประเภท
                        </Text>
                        <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                            {mainScript.setTypeInform(item.categoryId)}
                        </Text>
                    </View>
                    <View style={[Styles.w50, Styles.al_end]}>
                        <Feather name="trash" size={20} style={[Styles.mainColor_text]} />
                    </View>
                </View>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10,]}>
                    รายละเอียด
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                    {item.description}
                </Text>
                <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10,]}>
                    รูปภาพ
                </Text>
                <ScrollView style={[Styles.w100, Styles.mt5]} horizontal={true}>
                    {item.file.length > 0 ? (item.file.map((img) => (
                        <Image
                            source={{ uri: `https://btnconnectapi.myorigin.net/image/profile/${img.fileCurName}` }}
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
