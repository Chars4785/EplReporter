import React from 'react'
import { View, Text } from 'react-native'
import {
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import MainView from '../scene/MainView'
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import Images from '@asset/images';
import CoustomHeader from '../scene/CoustomHeader'

const RootStackNavigator = createStackNavigator(
    {
        Main: {
            screen: MainView,
        },
    },
    {
        initialRouteName: 'Main', // 여기서 앱 버전체크가 이루어짐
        defaultNavigationOptions: {
            header: CoustomHeader
        }
    }
);

const Navigation = createAppContainer(RootStackNavigator);
export default Navigation;
