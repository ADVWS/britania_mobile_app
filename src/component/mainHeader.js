import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { MaterialIcons } from "@expo/vector-icons";

import { Styles } from "../styles";

export default class mainHeader extends React.Component {
    state = {
        header_name: '',
        back_btn: '',
    }

    componentDidMount(){
        if(this.props.name){
            this.setState({header_name: this.props.name})
        }
        if(this.props.backto){
            this.setState({back_btn: this.props.backto})
        } else {
            this.setState({back_btn: 'TabFooter'})
        }
    }

    render() {
        return (
            <View style={[Styles.w100, Styles.h15, Styles.row, Styles.p20, Styles.mainColor]}>
                <View style={[Styles.w10, Styles.al_start, Styles.jc_end, Styles.p5]}>
                    <TouchableOpacity onPress={() => navigate.navigate(this.state.back_btn)}>
                        <MaterialIcons name="arrow-back" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={[Styles.w60, Styles.al_start, Styles.jc_end, { bottom: 5 }]}>
                    <Text style={[Styles.f_20, Styles.white_text, Styles.mainFont, Styles.mt20, Styles.ml10]}>
                        {this.state.header_name}
                    </Text>
                </View>
                <View style={[Styles.w20]} />
            </View>
        );
    }
}
