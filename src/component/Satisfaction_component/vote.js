import * as React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import * as navigate from "../../navigator/RootNavigation";
import { useRecoilState } from "recoil";
import { FontAwesome } from '@expo/vector-icons';

import * as Global from "../../globalState"

import { Styles } from "../../styles";
import Store from "../../store";
import Key from "../../KEYS.json"

export default class Vote extends React.Component {

    state = {
        vote: { vote1: 0, vote2: 0, vote3: 0, vote4: 0},
        star: { 
            vote1: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' },
            vote2: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' },
            vote3: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' },
            vote4: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' }, 
        },
        open: false
    }

    componentDidMount(){
        this.props.question.map((item, index)=>{
            for(let i = 0; i < item.defaultScore; i++){
                this.state.star[`vote${index + 1}`][`color${i + 1}`] = '#fcbc04'
            }
            this.state.vote[`vote${index + 1}`] = Number(item.defaultScore)
        })
        const {sendRate} = this.props;
        this.sendRate = sendRate;
        this.sendRate(this.state.vote);
        this.setState({open: true})
    }
    
    isVote(topic, unit) {
        var votecolor;
        var count = 0
        votecolor = this.state.star[topic]
        if (unit > this.state.vote[topic]) {
            for (let i = 0; i < unit; i++) {
                votecolor[`color${i + 1}`] = '#fcbc04'
                count++
            }
            var changeColor = this.state.star
            var sumunit = this.state.vote
            changeColor[topic] = votecolor
            sumunit[topic] = count
            this.setState({ star: changeColor, vote: sumunit })
            const {sendRate} = this.props;
            this.sendRate = sendRate;
            this.sendRate(this.state.vote);
        } else {
            for (let i = 0; i < this.state.vote[topic]; i++) {
                if ((i + 1) < unit) {
                    votecolor[`color${i + 1}`] = '#fcbc04'
                    count++
                } else {
                    votecolor[`color${i + 1}`] = '#DDD'
                }
            }
            var changeColor = this.state.star
            var sumunit = this.state.vote
            changeColor[topic] = votecolor
            sumunit[topic] = count
            this.setState({ star: changeColor, vote: sumunit })
            const {sendRate} = this.props;
            this.sendRate = sendRate;
            this.sendRate(this.state.vote);
        }
    }

    render() {
        return (
            <>
                {this.state.open &&
                    <>
                        {this.props.question.map((item)=>(
                            <View style={[Styles.w100, Styles.p15, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                                <Text style={[Styles.f_22, Styles.mainFont_x]}>
                                    {this.props.LANG === 'TH' ? item.wordThai : (item.wordEng ? item.wordEng : item.wordThai)}
                                </Text>
                                <View style={[Styles.w100, Styles.al_center, Styles.row, Styles.mt10]}>
                                    <View style={[Styles.w20]} />
                                    <TouchableOpacity onPress={() => this.isVote(`vote${item.seq}`, 1)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star[`vote${item.seq}`].color1} style={[Styles.text_center]} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.isVote(`vote${item.seq}`, 2)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star[`vote${item.seq}`].color2} style={[Styles.text_center]} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.isVote(`vote${item.seq}`, 3)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star[`vote${item.seq}`].color3} style={[Styles.text_center]} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.isVote(`vote${item.seq}`, 4)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star[`vote${item.seq}`].color4} style={[Styles.text_center]} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.isVote(`vote${item.seq}`, 5)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star[`vote${item.seq}`].color5} style={[Styles.text_center]} /></TouchableOpacity>
                                    <View style={[Styles.w20]} />
                                </View>
                            </View>
                        ))}
                    </>
                }
            </>
        );
    }
}
