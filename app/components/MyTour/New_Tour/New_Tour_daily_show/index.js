// In App.js in a new project

import React from "react";
import { Dimensions, ScrollView, Image, View, Text, Button, TextInput, TouchableOpacity } from "react-native";
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

class New_Tour_daily_show extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.getParam('user'),
      photo: this.props.navigation.getParam('photo'),
      review: this.props.navigation.getParam('review')
    }
    console.log("checkcheck", this.state.review);
  }

  reviewList = () => {
    let review_arr = []
    for (i in this.state.photo) {
      review_arr.push(
        <View style={styles.slide} >
          <Image style={styles.image} source={{ isStatic: true, uri: 'file://' + this.state.photo[i]['path'] }} />
          <Text style={styles.image_text} numberOfLines={1}>제목: {this.state.review[i][0]}</Text>
          <Text style={styles.image_text2} numberOfLines={1}>후기: {this.state.review[i][1]}</Text>
        </View>
      )
    }
    return review_arr
  }

  render() {
    const { heading, input, parent } = styles

    return (
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
      >
      {this.reviewList()}
      </Swiper>

    );
  }
}


export default New_Tour_daily_show
