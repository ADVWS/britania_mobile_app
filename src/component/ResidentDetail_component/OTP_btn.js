import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { Styles } from "../../styles";

const OTP_btn = ({member}) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigate.navigate("ResidentAddOTP", member)
            }
            style={[
                Styles.w100,
                Styles.row,
                Styles.mt10,
                Styles.transparent,
                Styles.al_center,
                Styles.br_5,
                Styles.border_btn,
                Styles.p15,
                Styles.jc_center,
            ]}
        >
            <Text
                style={[
                    Styles.text_center,
                    Styles.mainColor_text,
                    Styles.f_22,
                    Styles.mainFont,
                    { marginLeft: "1%" },
                ]}
            >
                กรอก OTP เพื่อเปิดใช้งาน
            </Text>
        </TouchableOpacity>
    );
};

export default OTP_btn;
