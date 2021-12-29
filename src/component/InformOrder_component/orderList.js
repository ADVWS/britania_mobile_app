import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Styles } from "../../styles";
import { MaterialIcons } from "@expo/vector-icons";

export default class OrderList extends React.Component {
    render() {
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
                        รายการที่ 1
                    </Text>
                    <View style={[Styles.w100, Styles.row, Styles.mt10]}>
                        <View style={[Styles.w50]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                                ประเภท
                            </Text>
                            <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                                เฟอร์นิเจอร์
                            </Text>
                        </View>
                        <View style={[Styles.w50, Styles.al_start]}>
                            <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                                การประเมินความพึงพอใจ
                            </Text>
                            <Text style={[Styles.f_16, Styles.mainFont, { color: "#8f8f8f" }]}>
                                รอประเมิน
                            </Text>
                        </View>
                    </View>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5]}>
                        รายระเอียด
                    </Text>
                    <Text style={[Styles.mainFont, Styles.f_16, { color: "#8f8f8f" }]}>
                        ช่วยแก้ไขให้เรียบร้อยด้วย
                    </Text>
                    <Text style={[Styles.f_16, Styles.mainFont, Styles.spacing5, Styles.mt10]}>
                        รูปภาพ
                    </Text>
                    <ScrollView style={[Styles.w100, Styles.mt5]} horizontal={true}>
                        <Image
                            source={{ uri: 'https://zmyhome.com/public/uploads/files/AluminiumSlidingDoor.jpg' }}
                            style={[Styles.br_5, { width: 120, height: 120 }]}
                        />
                        <View style={Styles.p5} />
                        <Image
                            source={{ uri: 'https://www.img.in.th/images/8a4c3c0ef923f5986bd541141fb66461.png' }}
                            style={[Styles.br_5, { width: 120, height: 120 }]}
                        />
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => navigate.navigate('Myproject')}
                        style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt20,{backgroundColor: '#ffecec'}]}>
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
                        style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt10,{backgroundColor: '#ffecec'}]}>
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
                        style={[Styles.w100, Styles.p20, Styles.row, Styles.br_5, Styles.mt10,{backgroundColor: '#ffecec'}]}>
                        <View style={[Styles.w80]}>
                            <Text style={[Styles.f_16, Styles.mainColor_text, Styles.mainFont, Styles.mt5]}>
                                รายการแก้ไข
                            </Text>
                        </View>
                        <View style={[Styles.w20, Styles.al_end, Styles.jc_center]}>
                            <MaterialIcons name="arrow-forward-ios" size={20} style={Styles.mainColor_text} />
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}
