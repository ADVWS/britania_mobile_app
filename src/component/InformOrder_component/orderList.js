import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Styles } from "../../styles";
import * as navigate from "../../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";

const OrderList = ({ data, index, route }) => {
    console.log(data)
    var paramNav = route
    function gotoResponsible(param){
        var mechanic = param
        console.log(param)
        navigate.navigate('Responsible', {paramNav, mechanic})
    }

    return (
        <>
            <View
                style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.FFF,
                    Styles.mt10
                ]}>
                <Text style={[Styles.mainColor_text, Styles.f_17, Styles.mainFont]}>
                    รายการที่ {index}
                </Text>
                <View style={[Styles.w100, Styles.row, Styles.mt10]}>
                    <View style={[Styles.w50]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                            ประเภท
                        </Text>
                        <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                            {data.type}
                        </Text>
                    </View>
                    <View style={[Styles.w50, Styles.al_start]}>
                        <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                            การประเมินความพึงพอใจ
                        </Text>
                        <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                            {data.rate}
                        </Text>
                    </View>
                </View>
                <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                    รายระเอียด
                </Text>
                <Text style={[Styles.mainFont, Styles.f_16, { color: "#8f8f8f" }]}>
                    {data.detail}
                </Text>
                <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5, Styles.mt10]}>
                    รูปภาพ
                </Text>
                <ScrollView style={[Styles.w100, Styles.mt5]} horizontal={true}>
                    {data.image.map((item) => (
                        <Image
                            source={{ uri: item }}
                            style={[Styles.br_5, { width: 120, height: 120, marginRight: 10 }]}
                        />
                    ))}
                </ScrollView>
                <TouchableOpacity
                    onPress={() => gotoResponsible(data.mechanic)}
                    style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt20, { backgroundColor: '#ffecec' }]}>
                    <View style={[Styles.w80]}>
                        <Text style={[Styles.f_16, Styles.mainColor_text, Styles.mainFont, Styles.mt5]}>
                            เจ้าหน้าที่ Homecare ที่เข้าตรวจสอบ
                        </Text>
                    </View>
                    <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                        <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.mainColor_text} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate.navigate('Myproject')}
                    style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt10, { backgroundColor: '#ffecec' }]}>
                    <View style={[Styles.w80]}>
                        <Text style={[Styles.f_16, Styles.mainColor_text, Styles.mainFont, Styles.mt5]}>
                            ตรวจสอบหน้างาน
                        </Text>
                    </View>
                    <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                        <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.mainColor_text} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate.navigate('Myproject')}
                    style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt10, Styles.mb10, { backgroundColor: '#ffecec' }]}>
                    <View style={[Styles.w80]}>
                        <Text style={[Styles.f_16, Styles.mainColor_text, Styles.mainFont, Styles.mt5]}>
                            รายการแก้ไข
                        </Text>
                    </View>
                    <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                        <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.mainColor_text} />
                    </View>
                </TouchableOpacity>
                {route === "SUCCESS" &&
                    <TouchableOpacity
                        onPress={() => navigate.navigate('Myproject')}
                        style={[Styles.w100, Styles.p15, Styles.mainColor, Styles.br_5, Styles.al_center, { marginBottom: 20 }]}>
                        <Text style={[Styles.f_18, Styles.white_text, Styles.mainFont, Styles.mt5]}>
                            ประเมินความพึงพอใจ
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </>
    );
}

export default OrderList
