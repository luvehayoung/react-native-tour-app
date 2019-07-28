// In App.js in a new project

import React from "react";
import { Dimensions, ScrollView, Image, View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

// <ScrollView>
//     <Text>일지 보기</Text>
//
//
//
//
//     <TouchableOpacity onPress={() => this.go_to_main() } style={ styles.button }>
//       <Text>사진</Text>
//     </TouchableOpacity>
// </ScrollView>


class New_Tour_daily_show extends React.Component {



  render() {
    const { heading, input, parent } = styles
    const photo = this.props.navigation.getParam('photo');
    const review = this.props.navigation.getParam('review');

    console.log("checkcheck", review);
    return (
      <Swiper
      style={styles.wrapper}
      renderPagination={renderPagination}
      loop={false}
      >

        <View style={styles.slide} >
          <Image  style={styles.image} source={{isStatic:true, uri: 'file://' + photo[0]['path']}} />
          <Text style = {styles.image_text} numberOfLines={1}>제목: {review[0]['review'][0]}</Text>
          <Text style = {styles.image_text2} numberOfLines={1}>후기: {review[0]['review'][1]}</Text>
        </View>

        <View style={styles.slide}>
          <Image style={styles.image} source={{isStatic:true, uri: 'file://' + photo[1]['path']}} />
          <Text style = {styles.image_text} numberOfLines={1}>제목: {review[1]['review'][0]}</Text>
          <Text style = {styles.image_text2} numberOfLines={1}>후기: {review[1]['review'][1]}</Text>
        </View>


        <View style={styles.slide} >
          <Image style={styles.image} source={{isStatic:true, uri: 'file://' + photo[2]['path']}} />
          <Text style = {styles.image_text} numberOfLines={1}>제목: {review[2]['review'][0]}</Text>
          <Text style = {styles.image_text2} numberOfLines={1}>후기: {review[2]['review'][1]}</Text>
        </View>

      </Swiper>

    );


  }
}


export default New_Tour_daily_show