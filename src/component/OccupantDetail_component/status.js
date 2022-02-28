import * as React from "react";
import {
    View,
    Text,
} from "react-native";
import { Styles } from "../../styles";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState";

const status = ({status}) => {
    const [LANG, setLANG] = useRecoilState(Global.Language);

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
                                Styles.f_22,
                                Styles.mainFont,
                                {
                                    color: "#3fc89b",
                                    marginLeft: 10,
                                    marginRight: 10,
                                },
                            ]}
                        >
                            {LANG.occupantdetail_text_02}
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
                            Styles.f_22,
                            Styles.mainFont,
                            {
                                color: "#f4910d",
                                marginLeft: 10,
                                marginRight: 10,
                            },
                        ]}
                    >
                        {LANG.occupantdetail_text_12}
                    </Text>
                </View>
            </View>
        );
    }
};

export default status;
