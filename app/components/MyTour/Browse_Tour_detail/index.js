// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'

class Browse_Tour_Yet extends React.Component {

  back_to_home(){
    this.props.navigation.navigate('home');

  }
  render() {
    const itemId = this.props.navigation.getParam('email');
    const { heading, input, parent } = styles
    return (
        <View>
            <Text>내 여행 후기 등록하는 페이지 - 다이어그램에서 후기 등록안한 여행만 보이기 페이지</Text>
            <View>
              <Text>itemId: {JSON.stringify(itemId)}</Text>
            </View>
            <TouchableOpacity onPress={() => this.back_to_home() } style={ styles.button }>
    					<Text>홈으로 가기</Text>
    				</TouchableOpacity>
        </View>
    );


  }
}


export default Browse_Tour_Yet
