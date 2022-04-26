import * as React from "react";
import { Image, Linking, TouchableOpacity, View, Platform } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { Styles } from "../../styles";

export default class Banner extends React.Component {
    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={ ()=>{ Linking.openURL(item.link)}}
                style={[
                    Styles.boxWithShadow,
                    Styles.transparent,
                    {
                        width: Platform.OS === 'android' ? '90%' : '100%',
                        height: '100%',
                        marginRight: Platform.OS ==='android'? '5%' : '0%',
                        marginLeft: Platform.OS ==='android'? '5%' : '0%',
                        borderRadius: 5,
                        //padding: 10,
                    }]}>
                <Image source={{uri: item.image}} style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 5,
                }} />
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Carousel
                    ref={c => {
                        this._carousel = c;
                    }}
                    data={this.props.banner}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={400}
                    itemWidth={400}
                    layout={'default'}
                    firstItem={0}
                    inactiveSlideOpacity={1}
                />
            </View>
        );
    }
}
