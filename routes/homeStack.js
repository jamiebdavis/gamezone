import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from "../shared/header";
import React from "react";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Game Review App" />
            }
        }

    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Reviews',

        }
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'pink',
            height: 100
        }
    }
});

export default HomeStack;