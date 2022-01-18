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

import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";


const InformOrderList = ({ data, Addmore, gotoinformCalendar }) => {

    return (
        <>
            {data.map((item)=>(
                <View style={[Styles.w100, Styles.p15, Styles.mt15, Styles.br_5, { backgroundColor: "#ffecec" }]}>
                    <View style={[Styles.w100, Styles.row]}>
                        <View style={[Styles.w50]}>
                            <Text style={[Styles.f_22, Styles.mainFont]}>
                                ประเภท
                            </Text>
                            <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                                {item.type}
                            </Text>
                        </View>
                        <View style={[Styles.w50, Styles.al_end]}>
                            <Feather name="trash" size={20} style={[Styles.mainColor_text]} />
                        </View>
                    </View>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10,]}>
                        รายระเอียด
                    </Text>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                        {item.detail}
                    </Text>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10,]}>
                        รูปภาพ
                    </Text>
                    <ScrollView style={[Styles.w100, Styles.mt5]} horizontal={true}>
                        {item.image.map((img) => (
                            <Image
                                source={{ uri: img }}
                                style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                            />
                        ))}
                    </ScrollView>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.mt10,]}>
                        หมายเหตุ
                    </Text>
                    <Text style={[Styles.f_22, Styles.mainFont, Styles.mt5, { color: "#8f8f8f" }]}>
                        {item.comment}
                    </Text>
                </View>
            ))}
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
        </>
    );
}

export default InformOrderList
