// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'

class New_Tour_Main extends React.Component {

  picture_detail(){
    this.props.navigation.navigate('put_picture');
  }
  back_to_home(){
    this.props.navigation.navigate('home');

  }

  render() {
    const itemId = this.props.navigation.getParam('email');
    const { heading, input, parent } = styles
    return (
        <View>
            <Text>내 여행 등록하는 페이지 - 다이어그램에서 내여행사진 등록하기 전체</Text>
            <View>
              <Text>itemId: {JSON.stringify(itemId)}</Text>
            </View>


            <TouchableOpacity onPress={() => this.picture_detail() } style={ styles.button }>
    					<Text>사진 추가하기</Text>
    				</TouchableOpacity>


            <TouchableOpacity onPress={() => this.back_to_home() } style={ styles.button }>
    					<Text>홈으로 가기</Text>
    				</TouchableOpacity>
        </View>
    );


  }
}


export default New_Tour_Main
