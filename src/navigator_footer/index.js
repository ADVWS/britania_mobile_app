import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { navigationRef } from "./RootNavigation";
import HomeScreen from '../screen/Home_screen';
import MyHomeScreen from '../screen/MyHome_screen';
import AccountScreen from '../screen/Account_screen';

const Tab = createBottomTabNavigator();


const AllTabBottom = () => {
    function getScreenList(TYPE) {
        switch (TYPE) {
            case 1:
                return (
                    <Tab.Navigator ref={navigationRef}
                        initialRouteName={'Home'}
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
                            component={AccountScreen}
                            options={{
                                tabBarLabel: 'บัญชี',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                    </Tab.Navigator>
                );
            case 2:
                return (
                    <Tab.Navigator ref={navigationRef}
                        initialRouteName={'Home'}
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
                            component={MyHome}
                            options={{
                                tabBarLabel: 'ข้อมูลบ้าน',
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home-city" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="Account"
                            component={AccountScreen}
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
                        initialRouteName={'Home'}
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
                            component={AccountScreen}
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
    return getScreenList(1)
}


export default AllTabBottom