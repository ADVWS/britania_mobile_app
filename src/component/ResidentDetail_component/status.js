import * as React from "react";
import {
    View,
    Text,
} from "react-native";
import { Styles } from "../../styles";

const status = ({status}) => {
    if (status === 'active') {
        return (
            <View>
                <View style={[Styles.w65]}>
                    <View
                        style={[
                            Styles.circle,
                            { backgroundColor: "#dcfcf4" },
                            Styles.al_center,
                        ]}
                    >
                        <Text
                            style={[
                                Styles.f_24,
                                Styles.mainFont,
                                {
                                    color: "#3fc89b",
                                    marginLeft: 10,
                                    marginRight: 10,
                                },
                            ]}
                        >
                            เปิดการใช้งานแล้ว
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={[Styles.w65]}>
                <View
                    style={[
                        Styles.circle,
                        { backgroundColor: "#fcf4d4" },
                        Styles.al_center,
                    ]}
                >
                    <Text
                        style={[
                            Styles.f_24,
                            Styles.mainFont,
                            {
                                color: "#f4910d",
                                marginLeft: 10,
                                marginRight: 10,
                            },
                        ]}
                    >
                        ยังไม่เปิดการใช้งาน
                    </Text>
                </View>
            </View>
        );
    }
};

export default status;
