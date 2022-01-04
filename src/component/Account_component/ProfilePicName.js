import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { Styles } from "../../styles";

export default class ProfilePicName extends React.Component {
    render() {
        return (
            <View style={[]}>
                {this.props.profile.map((item) => (
                    <View style={[Styles.row]}>
                        <Image source={item.image} style={[{width:100,height:100,resizeMode:'cover'},Styles.row,Styles.circle]}></Image>
                        <Text style={[Styles.mt40,Styles.ml5,Styles.mainFont,Styles.mainColor_text,Styles.f_18]}>{item.name}</Text>
                    </View>
                ))}
            </View>
        );
    }
}