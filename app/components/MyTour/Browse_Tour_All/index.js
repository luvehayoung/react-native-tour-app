// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'

class Browse_Tour_All extends React.Component {

  go_to_detail(){

    this.props.navigation.navigate('browse_tour_detail');
  }
  new_tour(user){
    this.props.navigation.navigate('new_tour');
  }

  back_to_home(){
    this.props.navigation.navigate('home');

  }
  render() {

    const { heading, input, parent } = styles

    return (
        <View>
            <Text>내 여행 모두 조회하는 페이지 - 다이어그램에서 내여행 조회 페이지</Text>


            <TouchableOpacity onPress={() => this.go_to_detail() } style={ styles.button }>
    					<Text>여행 후기 1</Text>
    				</TouchableOpacity>


            <View style = {parent}>
                <Button title ={"내 여행 기록 남기기"} onPress={() => this.new_tour() }/>
            </View>

            <TouchableOpacity onPress={() => this.back_to_home() } style={ styles.button }>
    					<Text>홈으로 가기</Text>
    				</TouchableOpacity>
        </View>
    );


  }
}


export default Browse_Tour_All
