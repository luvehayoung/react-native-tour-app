// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'

class New_Tour_daily_detail extends React.Component {

  go_to_main(){

    this.props.navigation.navigate('new_tour');
  }
  render() {
    const { heading, input, parent } = styles

    return (
        <View>
            <Text>내 여행 사진이랑 후기 넣는 페이지- 다이어그램에서 내 여행후기 사진추가 페이지</Text>

            <TouchableOpacity onPress={() => this.go_to_main() } style={ styles.button }>
    					<Text>사진 추가 완료</Text>
    				</TouchableOpacity>
        </View>
    );


  }
}


export default New_Tour_daily_detail
