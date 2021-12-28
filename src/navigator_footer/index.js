import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { initialRouteName } from "../globalState"
import { useRecoilState, atom, useRecoilValue } from "recoil";

import { navigationRef } from "./RootNavigation";

import HomeScreen from '../screen/Home_screen';
import MyHomeScreen from '../screen/MyHome_screen';
import Account from '../screen/Account_screen';

const Tab = createBottomTabNavigator();
//const page = useRecoilState(initialRouteName)

// function TabBottom() {
//     //console.log(initialRouteName)
//     return (
//         <Tab.Navigator ref={navigationRef}
//             initialRouteName={''}
//             screenOptions={{
//                 tabBarActiveTintColor: '#f1645e',
//                 headerShown: false,
//             }}>
//             <Tab.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{
//                     tabBarLabel: 'หน้าแรก',
//                     tabBarLabelStyle: { fontSize: 13 },
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="home" color={color} size={25} style={{ marginTop: 10 }} />
//                     ),
//                 }} />
//             <Tab.Screen
//                 name="HomeDetail"
//                 component={MyHomeScreen}
//                 options={{
//                     tabBarLabel: 'ข้อมูลบ้าน',
//                     tabBarLabelStyle: { fontSize: 13 },
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="home-city" color={color} size={25} style={{ marginTop: 10 }} />
//                     ),
//                 }} />
//             <Tab.Screen
//                 name="Account"
//                 component={HomeScreen}
//                 options={{
//                     tabBarLabel: 'บัญชี',
//                     tabBarLabelStyle: { fontSize: 13 },
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="account" color={color} size={25} style={{ marginTop: 10 }} />
//                     ),
//                 }} />
//         </Tab.Navigator>
//     )
// }
class AllTabBottom extends React.Component {
    constructor(props) {
        super(props);
    }

    getScreenList(TabBottom) {
        switch (TabBottom) {
            case "HOME":
                return (
                    <Tab.Navigator ref={navigationRef}
                        initialRouteName={'HomeDetail'}
                        screenOptions={{
                            tabBarActiveTintColor: '#f1645e',
                            headerShown: false,
                        }}>
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarLabel: 'หน้าแรก',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="HomeDetail"
                            component={MyHomeScreen}
                            options={{
                                tabBarLabel: 'ข้อมูลบ้าน',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home-city" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="Account"
                            component={Account}
                            options={{
                                tabBarLabel: 'บัญชี',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                    </Tab.Navigator>
                );
            default:
                return (
                    <Tab.Navigator ref={navigationRef}
                        initialRouteName={''}
                        screenOptions={{
                            tabBarActiveTintColor: '#f1645e',
                            headerShown: false,
                        }}>
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarLabel: 'หน้าแรก',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="HomeDetail"
                            component={MyHomeScreen}
                            options={{
                                tabBarLabel: 'ข้อมูลบ้าน',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home-city" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="Account"
                            component={Account}
                            options={{
                                tabBarLabel: 'บัญชี',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                    </Tab.Navigator>
                );
        }
    }
    render() {
        return (
            <>
                {this.getScreenList('')}
            </>
        );
    }
}


export default AllTabBottom