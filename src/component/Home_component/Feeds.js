import * as React from "react";
import { Image, View, Text } from "react-native";
import { Styles } from "../../styles";

export default class Feeds extends React.Component {
    render() {
        return (
            <View style={[Styles.w100]}>
                {this.props.feeds.map((item) => (
                    <View style={[Styles.w100, Styles.mt15, Styles.boxWithShadow]}>
                        <Image source={item.image} style={[Styles.w100, { height: 170, borderTopLeftRadius: 5, borderTopRightRadius: 5 }]} />
                        <View style={[Styles.w100, Styles.p15, Styles.FFF, { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }]}>
                            <Text
                                style={[
                                    Styles.f_16,
                                    Styles.mainFont,
                                    Styles.mainColor_text,
                                ]}>
                                {item.topic}
                            </Text>
                            <Text
                                style={[
                                    Styles.f_14,
                                    Styles.mainFont_thin,
                                    Styles.mt10
                                ]}>
                                {item.detail}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        );
    }
}
