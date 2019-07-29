// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from './styles'
import ImagePicker from "react-native-image-picker"


class New_Tour_Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photo: [],
      lanlat: [],
      picture_num: null,
      selected: false,
      review: [],
    }
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log("response", response)

      if (response.uri) {
        this.setState({
          picture_num: this.state.picture_num + 1
        })
        this.setState({
          photo: this.state.photo.concat(response)
        });
        console.log("photo", this.state.photo)
      }
    });
  }

  photoList = () => {
    let photo_arr = []
    for (i in this.state.photo) {
      photo_arr.push(
        <TouchableOpacity onPress={() => this.picture_detail()}>
          <Text style={{textAlign: 'center', color:'#949494', lineHeight: 25, }}>{this.state.review[i] ? "작성완료" : "review not done"}</Text>
          <Image
            source={{ isStatic: true, uri: 'file://' + this.state.photo[i]['path'] }}
            style={{ width: 300, height: 300 }}
          />
        </TouchableOpacity>
      )
    }
    return photo_arr
  }

  onSelect = data => {
    this.setState(data);
  };

  onReview = data => {
    this.setState({
      review: this.state.review.concat(data)
    });
  };


  picture_detail() {
    this.props.navigation.navigate("put_picture", { onSelect: this.onSelect, onReview: this.onReview });
  }

  picture_map() {
    this.props.navigation.navigate('new_map', {
      'photo': this.state.photo,
      'review': this.state.review,
      'picture_num': this.state.picture_num,
      'lanlat': this.state.lanlat
    });
  }

  back_to_home() {
    console.log("result: ", this.state.photo)
    this.props.navigation.navigate('home');
  }

  render() {

    return (
      <ScrollView contentContainerStyle = {styles.container}>

        <TouchableOpacity
          style = {styles.btn_start}
          onPress={this.handleChoosePhoto}>
          <Text style={{textAlign: 'center', color:'white', lineHeight: 45}}>choose photo</Text>
        </TouchableOpacity>

        <View>
          {this.photoList()}
        </View>

        <TouchableOpacity
          style = {styles.btn_end}
          onPress={() => this.picture_map()}>
          <Text style={{textAlign: 'center', color:'white', lineHeight: 45}}>내 경로 만들기</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}
export default New_Tour_Main
