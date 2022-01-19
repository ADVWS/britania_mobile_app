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

export default class Vote extends React.Component {

    state = {
        vote: { vote1: 0, vote2: 0, vote3: 0, vote4: 0, vote5: 0 },
        star: { 
            vote1: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' },
            vote2: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' },
            vote3: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' },
            vote4: { color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD' }, 
        }
    }

    // const[vote1, setVote1] = React.useState({ star1: 0, star2: 0, star3: 0, star4: 0, star5: 0, sum: 0})
    // const[star1, setStar1] = React.useState({ color1: '#DDD', color2: '#DDD', color3: '#DDD', color4: '#DDD', color5: '#DDD'})
    // const[vote2, setVote2] = React.useState({ star1: 0, star2: 0, star3: 0, star4: 0, star5: 0, sum: 0})
    // const[vote3, setVote3] = React.useState({ star1: 0, star2: 0, star3: 0, star4: 0, star5: 0, sum: 0})
    // const[vote4, setVote4] = React.useState({ star1: 0, star2: 0, star3: 0, star4: 0, star5: 0, sum: 0})
    // const[vote5, setVote5] = React.useState({ star1: 0, star2: 0, star3: 0, star4: 0, star5: 0, sum: 0})

    isVote(topic, unit) {
        var votecolor;
        var count = 0
        votecolor = this.state.star[topic]
        console.log(votecolor)
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

        }
    }

    render() {
        return (
            <>
                <View style={[Styles.w100, Styles.p15, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x]}>
                        การตรงต่อเวลาและการแต่งกาย
                    </Text>
                    <View style={[Styles.w100, Styles.al_center, Styles.row, Styles.mt10]}>
                        <View style={[Styles.w20]} />
                        <TouchableOpacity onPress={() => this.isVote('vote1', 1)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote1.color1} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote1', 2)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote1.color2} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote1', 3)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote1.color3} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote1', 4)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote1.color4} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote1', 5)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote1.color5} style={[Styles.text_center]} /></TouchableOpacity>
                        <View style={[Styles.w20]} />
                    </View>
                </View>
                <View style={[Styles.w100, Styles.p15, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x]}>
                        การให้ข้อมูลและความเอาใจใส่
                    </Text>
                    <View style={[Styles.w100, Styles.al_center, Styles.row, Styles.mt10]}>
                        <View style={[Styles.w20]} />
                        <TouchableOpacity onPress={() => this.isVote('vote2', 1)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote2.color1}style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote2', 2)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote2.color2} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote2', 3)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote2.color3} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote2', 4)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote2.color4} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote2', 5)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote2.color5} style={[Styles.text_center]} /></TouchableOpacity>
                        <View style={[Styles.w20]} />
                    </View>
                </View>
                <View style={[Styles.w100, Styles.p15, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x]}>
                        คุณภาพงานซ่อม
                    </Text>
                    <View style={[Styles.w100, Styles.al_center, Styles.row, Styles.mt10]}>
                        <View style={[Styles.w20]} />
                        <TouchableOpacity onPress={() => this.isVote('vote3', 1)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote3.color1}style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote3', 2)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote3.color2} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote3', 3)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote3.color3} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote3', 4)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote3.color4} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote3', 5)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote3.color5} style={[Styles.text_center]} /></TouchableOpacity>
                        <View style={[Styles.w20]} />
                    </View>
                </View>
                <View style={[Styles.w100, Styles.p15, { borderBottomWidth: 0.5, borderColor: "#DDD" }]}>
                    <Text style={[Styles.f_22, Styles.mainFont_x]}>
                        คุณภาพในการให้บริการโดยรวม
                    </Text>
                    <View style={[Styles.w100, Styles.al_center, Styles.row, Styles.mt10]}>
                        <View style={[Styles.w20]} />
                        <TouchableOpacity onPress={() => this.isVote('vote4', 1)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote4.color1}style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote4', 2)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote4.color2} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote4', 3)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote4.color3} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote4', 4)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote4.color4} style={[Styles.text_center]} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.isVote('vote4', 5)} style={[Styles.w12]}><FontAwesome name="star" size={35} color={this.state.star.vote4.color5} style={[Styles.text_center]} /></TouchableOpacity>
                        <View style={[Styles.w20]} />
                    </View>
                </View>
            </>
        );
    }
}
