import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { navigationRef } from "./RootNavigation";
import HomeScreen from '../screen/Home_screen';
import MyHomeScreen from '../screen/MyHome_screen';
import AccountScreen from '../screen/Account_screen';
import MyProjectFirst from "../screen/MyProjectFirst_screen"
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from '../globalState'


const Tab = createBottomTabNavigator();

const AllTabBottom = () => {
    const [userType, setUserType] = useRecoilState(Global.userType)
    const [LANG, setLANG] = useRecoilState(Global.Language)
    const [userProfile, setUserProfile] = useRecoilState(Global.userProfile)
    const [project, _setProject] = useRecoilState(Global.project)
    const setProject = useSetRecoilState(Global.project)
    if(userProfile.me.unitsAllowHomecare){
        if(userProfile.me.unitsAllowHomecare.length <= 1){
            setProject(true)
        }
    }
    function getScreenList(TYPE) {
        switch (TYPE) {
            case 1:
                return (
                    <Tab.Navigator ref={navigationRef}
                        initialRouteName={'Home'}
                        screenOptions={{
                            tabBarActiveTintColor: '#bb6a70',
                            headerShown: false,
                        }}>
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarLabel: LANG.home_text_03,
                                tabBarLabelStyle: { fontSize: 18, fontFamily: "Helvethaica_x"},
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={25} style={{ marginTop: 5 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="HomeDetail"
                            component={project ? MyHomeScreen : MyProjectFirst}
                            //component={project ? MyProjectFirst : MyHomeScreen}
                            options={{
                                tabBarLabel: LANG.home_text_04,
                                tabBarLabelStyle: { fontSize: 18, fontFamily: "Helvethaica_x" },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home-city" color={color} size={25} style={{ marginTop: 5 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="Account"
                            component={AccountScreen}
                            options={{
                                tabBarLabel: LANG.home_text_05,
                                tabBarLabelStyle: { fontSize: 18, fontFamily: "Helvethaica_x" },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={25} style={{ marginTop: 5 }} />
                                ),
                            }} />
                    </Tab.Navigator>
                );
            case 2:
                return (
                    <Tab.Navigator ref={navigationRef}
                        initialRouteName={'Home'}
                        screenOptions={{
                            tabBarActiveTintColor: '#bb6a70',
                            headerShown: false,
                        }}>
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarLabel: LANG.home_text_03,
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="Account"
                            component={AccountScreen}
                            options={{
                                tabBarLabel: LANG.home_text_04,
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
                            tabBarActiveTintColor: '##bb6a70',
                            headerShown: false,
                        }}>
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarLabel: LANG.home_text_03,
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="HomeDetail"
                            component={MyHomeScreen}
                            options={{
                                tabBarLabel: LANG.home_text_04,
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home-city" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                        <Tab.Screen
                            name="Account"
                            component={AccountScreen}
                            options={{
                                tabBarLabel: LANG.home_text_05,
                                tabBarLabelStyle: { fontSize: 13 },
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={25} style={{ marginTop: 10 }} />
                                ),
                            }} />
                    </Tab.Navigator>
                );
        }
    }
    return getScreenList(userType)
}


export default AllTabBottom