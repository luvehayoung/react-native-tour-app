// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './app/components/Home'
import Naverlogin_page from './app/components/Naverlogin_page'
import Tourplace_map from './app/components/Tourplace_search/Tourplace_map'
import Tourplace_detail from './app/components/Tourplace_search/Tourplace_detail'
import Browse_Tour_detail from './app/components/MyTour/Browse_Tour_detail'
import Browse_Tour_All from './app/components/MyTour/Browse_Tour_All'
import New_Tour_Main from './app/components/MyTour/New_Tour/New_Tour_Main'
import New_Tour_daily_detail from './app/components/MyTour/New_Tour/New_Tour_daily_detail'

/*
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button onPress={() => this.props.navigation.navigate('test')} title ="go to test"></Button>
      </View>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Test component</Text>
        <Button onPress={() => this.props.navigation.navigate('screen')} title ="go to app"></Button>
      </View>
    );
  }
}
*/
const AppNavigator = createStackNavigator({
  naver_login: Naverlogin_page,
  home: Home,
  search_map: Tourplace_map,
  search_detail: Tourplace_detail,
  browse_tour:Browse_Tour_All,
  browse_tour_detail:Browse_Tour_detail,
  new_tour: New_Tour_Main,
  put_picture: New_Tour_daily_detail,
  /*
  screen: HomeScreen,
  test: Test*/

});

export default createAppContainer(AppNavigator);
