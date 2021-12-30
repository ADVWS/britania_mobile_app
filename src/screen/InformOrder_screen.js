import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState } from "recoil";

import * as Global from "../globalState"

import { Styles } from "../styles";

import MainHeader from "../component/mainHeader";
import InformTopic from "../component/InformOrder_component/InformTopic";
import OrderList from "../component/InformOrder_component/orderList";

export default function InformOrder({ route }) {
    const [informDetail, setInformDetail] = useRecoilState(Global.dataInformDetail)
    return (
        <View style={[Styles.flex, Styles.al_center]}>
            <View
                style={[
                    Styles.al_center,
                    Styles.w100,
                    Styles.h100
                ]}>
                <MainHeader name={'รายการแจ้งซ่อม'} backto={'Homecare'} />
                <ScrollView style={[Styles.w100]}>            
                     <InformTopic data={informDetail}/>
                    {informDetail.order.map((item, index)=>(
                        <OrderList data={item} index={index + 1} route={route.params.paramNav}/>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}
