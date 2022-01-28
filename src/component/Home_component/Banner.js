import * as React from "react";
import { Image, View, Text } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { Styles } from "../../styles";

export default class Banner extends React.Component {
    _renderItem = ({ item, index }) => {
        return (
            <View
                style={[
                    Styles.boxWithShadow,
                    Styles.transparent,
                    {
                        width: '100%',
                        height: '100%',
                        borderRadius: 5,
                        padding: 10,
                    }]}>
                <Image source={item} style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 5,
                }} />
            </View>
        );
    };
    render() {
        return (
            <>
                <Carousel
                    ref={c => {
                        this._carousel = c;
                    }}
                    data={this.props.images}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={400}
                    itemWidth={400}
                    layout={'default'}
                    firstItem={0}
                    inactiveSlideOpacity={1}
                />
            </>
        );
    }
}
