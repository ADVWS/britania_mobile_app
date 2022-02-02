import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';

import { Styles } from "../../styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class ProfilePicCom extends React.Component {

    state = {
        image: require('../../../assets/image/Britania-connect-assets/default-img-circle.png')
    }

    _InputImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            this.setState({
                image: {uri : result.uri}
            })
            const {InputValue} = this.props;
            this.InputValue = InputValue;
            this.InputValue(undefined, undefined, result.uri);
        }
    }

    render() {
        return (
            <View style={[Styles.al_center]}>
                <View style={[Styles.mt10]}>
                    <ImageBackground source={this.state.image} imageStyle={Styles.circle} style={[{ width: 150, height: 150, resizeMode: 'cover' }]}>
                        <View>
                            <Image style={[{ width: 35, height: 35, resizeMode: 'cover', backgroundColor: "#ffdfdf", position: "absolute", top: 106, left: 106 }, Styles.circle, { borderWidth: 1, borderColor: "#f1645e" }]} />
                            <TouchableOpacity onPress={() => this._InputImage()}>
                                <MaterialCommunityIcons name="image-plus" size={21} color="#f1645e" style={{ position: "absolute", top: 112.5, left: 112.5 }} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}