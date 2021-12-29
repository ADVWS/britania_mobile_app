import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

import { Styles } from "../../styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default class ProfilePicCom extends React.Component {
    render() {
        return (
            <View style={[Styles.al_center]}>
                {this.props.picture.map((item) => (
                    <View style={[Styles.mt10]}>
                        <ImageBackground source={item.image} imageStyle= {Styles.circle} style={[{width:150,height:150,resizeMode:'cover'}]}>
                                <View>
                                    <Image style={[{width:35,height:35,resizeMode:'cover',backgroundColor:"#ffdfdf",position:"absolute",top:106,left:106},Styles.circle,{borderWidth: 1, borderColor : "#f1645e"}]}/>
                                    <MaterialCommunityIcons name="image-plus" size={21} color="#f1645e" style={{position:"absolute",top:112.5,left:112.5}} />
                                </View>
                                
                            </ImageBackground>
                    </View>
                ))}
            </View>
        );
    }
}