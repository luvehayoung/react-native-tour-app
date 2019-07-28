// In App.js in a new project

import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from "react-navigation";
/*
import Home from './app/components/Home'
import {AuthLoadingScreen,NaverLoginScreen} from './app/components/Login'
import Naverlogin_page from './app/components/Naverlogin_page'
import Tourplace_map from './app/components/Tourplace_search/Tourplace_map'
import Tourplace_detail from './app/components/Tourplace_search/Tourplace_detail'
import Tourplace_list from './app/components/Tourplace_search/Tourplace_list'
import Browse_Tour_detail from './app/components/MyTour/Browse_Tour_detail'
import Browse_Tour_All from './app/components/MyTour/Browse_Tour_All'
import New_Tour_Main from './app/components/MyTour/New_Tour/New_Tour_Main'
import New_Tour_Map from './app/components/MyTour/New_Tour/New_Tour_Map'
import New_Tour_daily_detail from './app/components/MyTour/New_Tour/New_Tour_daily_detail'
import New_Tour_daily_show from './app/components/MyTour/New_Tour/New_Tour_daily_show'
*/

import Home from './app/components/Home'
import {AuthLoadingScreen,NaverLoginScreen} from './app/components/Login'
import Tourplace_map from './app/components/Tourplace_search/Tourplace_map'
import { TourDetail, TourInfo, TourMap } from './app/components/Tourplace_search/Tourplace_detail'
import {AreaSearch, TitleSearch} from './app/components/Tourplace_search/Tourplace_list'
import Browse_Tour_detail from './app/components/MyTour/Browse_Tour_detail'
import Browse_Tour_All from './app/components/MyTour/Browse_Tour_All'
import New_Tour_Main from './app/components/MyTour/New_Tour/New_Tour_Main'
import New_Tour_Map from './app/components/MyTour/New_Tour/New_Tour_Map'
import New_Tour_daily_detail from './app/components/MyTour/New_Tour/New_Tour_daily_detail'
import New_Tour_daily_show from './app/components/MyTour/New_Tour/New_Tour_daily_show'


const SearchNavigator = createMaterialTopTabNavigator(
      {
        TitleSearch: { screen: TitleSearch },
        AreaSearch: { screen: AreaSearch }
      },
      {
          // activeColor: '#f0edf6', // 왜인지 안됌..
          // inactiveColor: '#3e2465',
          // barStyle: { backgroundColor: '#694fad' },
          tabBarOptions: {
              activeTintColor: 'white',
              inactiveTintColor: 'gray',
          },
      }
  )
  const InfoNavigator = createMaterialTopTabNavigator(
    {
      TourInfo: { screen: TourInfo },
      TourDetail: { screen: TourDetail },
      TourMap: { screen: TourMap }
    },
    {
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      },
    }
  )


const AuthStack = createStackNavigator({ naver_login: NaverLoginScreen, });

const AppNavigator = createStackNavigator({
  home: Home,
  search_list: SearchNavigator,
  search_map: Tourplace_map,
  search_detail: InfoNavigator,
  browse_tour:Browse_Tour_All,
  browse_tour_detail:Browse_Tour_detail,
  new_tour: New_Tour_Main,
  put_picture: New_Tour_daily_detail,
  daily: New_Tour_daily_show,
  new_map: New_Tour_Map,
  /*
  screen: HomeScreen,
  test: Test*/



});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
