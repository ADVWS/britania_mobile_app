import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Animated,
} from "react-native";
import MainHeader from "../component/mainHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { useSetRecoilState, useRecoilState } from "recoil";

import { Styles } from "../styles";
import ResidentList from "../component/MemberManageIndivi_component/resident_list"
import OccupantList from "../component/MemberManageIndivi_component/occupant_list"
import MenuBtn from "../component/MemberManageIndivi_component/menu_manage_btn";
import * as Global from "../globalState"

export default function MemberManageIndivi_screen({ route }) {

    console.log("ROUTE", route);
    // console.log(route)

    console.log("Visit")

    var resident = useRecoilState(Global.dataListResident)[0];
    var occupant = useRecoilState(Global.dataListOccupant)[0];

    const gobalData = useSetRecoilState(Global.callbackAccount)

    console.log("RESIDENT")
    console.log(resident);
    console.log("OCCUPANT")
    console.log(occupant);

    var item = route.params;
    gobalData(item)
    const scrollref = React.createRef();

    const [selected, setSelected] = React.useState(<ResidentList resident={resident} />)

    const selectMenu = (SELECT) => {
        console.log(SELECT)
        switch (SELECT) {
            case 'RESIDENT':
                setSelected(<ResidentList resident={resident} item={item}/>)
                break
            case 'OCCUPANT':
                setSelected(<OccupantList occupant={occupant} />)
                break
            default:
                setSelected(<ResidentList resident={resident} />)
                break
        }
    }

    return (
        <View
            style={[Styles.flex, Styles.al_center]}>
            <View style={[Styles.flex, Styles.al_center, Styles.w100, Styles.h100,]}>
                <MainHeader name={item.name} backto={'MemberManage'} />
                <ScrollView
                    ref={scrollref}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    style={[Styles.w100, Styles.h75]
                    }>
                    <View style={[Styles.w100, Styles.p15, Styles.al_center, Styles.FFF]}>
                        <View style={[Styles.boxWithShadow, Styles.w100, { height: 200 }]}>
                            <Image source={{ uri: item.image }} style={[Styles.h100, Styles.w100, Styles.br_5]} />
                        </View>
                        <View style={Styles.w70}>
                            <Text style={[Styles.f_18, Styles.mainColor_text, Styles.mainFont, Styles.mt20, Styles.text_center]}>
                                {item.name}
                            </Text>
                        </View>

                    </View>
                    <MenuBtn selectMenu={selectMenu} />
                    {selected}
                </ScrollView>

            </View>
        </View>
    );
}
