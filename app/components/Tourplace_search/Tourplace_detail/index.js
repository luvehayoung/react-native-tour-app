// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'

class Tourplace_detail extends React.Component {

  render() {


    return (
        <View>
            <Text>일지눌렀을때 보이는 상세화면 페이지 - 다이어그램에서 다른사람 여행일지 상세</Text>
        </View>
    );


  }
}


export default Tourplace_detail
