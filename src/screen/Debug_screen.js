import * as React from "react";
import {
    View,
    Text,
    Animated,
    ScrollView,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as navigate from "../navigator/RootNavigation";

import Banner from "../component/Home_component/Banner";
import AnimatedHeader from "../component/Home_component/AnimationHeader";
import Feed from "../component/Home_component/Feeds";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../globalState"
import { Styles } from "../styles";

export default function Debug_screen() {
    
    const [inputValue, setInputValue] = React.useState('');
    const todoList = useRecoilState(Global.todoListState);
    const setTodoList = useSetRecoilState(Global.todoListState);

    console.log(todoList)

    return (
        <View>
            <Text>text</Text>
            <Text>text</Text>
            <Text>text</Text>
            <Text>text</Text>
            <Text>text</Text>
            {todoList[0].map((item) => (
                <Text key={item.text}>{item.text}</Text>
            ))}

            <TextInput style={[Styles.border_btn,Styles.f_18]} value={inputValue} onChangeText={setInputValue}/>
            <TouchableOpacity style={Styles.border_btn} onPress={() => {console.log(inputValue)}}><Text>Debug</Text></TouchableOpacity>

        </View>
    )
}
