// In App.js in a new project

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import styles from './styles'
import ImagePicker from "react-native-image-picker"


class New_Tour_Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.getParam('user'),
      photo: [],
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

      if (response.uri) {
        this.setState({
          picture_num: this.state.picture_num + 1
        })
        this.setState({
          photo: this.state.photo.concat(response)
        });
      }
    });
  }

  photoList = () => {
    let photo_arr = []
    for (i in this.state.photo) {
      photo_arr.push(
        <TouchableOpacity onPress={() => this.picture_detail()}>
          <Text style={{ textAlign: 'center', color: '#949494', lineHeight: 25, }}>{this.state.review[i] ? "작성완료" : "review not done"}</Text>
          <Image
            source={{ isStatic: true, uri: 'file://' + this.state.photo[i]['path'] }}
            style={{ width: 300, height: 300 }}
          />
        </TouchableOpacity>
      )
    }
    return photo_arr
  }

  saveServer = async () => {
    try {
      const response = await fetch('http://192.168.219.101:3000/record', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.user.email,
          photo: this.state.photo,
          review: this.state.review
        })
      });
      console.log("test",this.s)
      const json = await response.json()
      if (json.message == 0) {
        console.log('서버 저장 성공')
        return json._id;
      } else {
        console.log('서버 저장 실패')
      }
    }
    catch (e) {
      console.log(e);
      alert(e);
    }
  }

  getData = async (id) => {
    const response = await fetch('http://192.168.219.101:3000/record/' + id)
    const responseJson = await response.json()

    console.log(responseJson[0].photo);

    ///여기서부터
    responseJson[0]["geodata"] = []
    for (i in responseJson[0].photo) {
      console.log(responseJson[0].photo['latitude'])
      responseJson[0]["geodata"].push({
        latitude : responseJson[0].photo['latitude'],
        longitude : responseJson[0].photo['longitude']
      })
    }
    console.log(responseJson)
    return responseJson
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

  picture_map = async()=> {
    if (this.state.photo.length > 0 && this.state.review.length >0) {

      const record_id = await this.saveServer();
      const data = await this.getData(record_id);

      console.log("record_id = ",record_id)
      console.log("data = ",data)

      this.props.navigation.navigate('new_map', {
        'data' : data[0],
        'record_id': record_id,
        'user': this.state.user
      });
    }
    else {
      alert("등록된 사진이나 리뷰가 없습니다")
    }

  }

  back_to_home() {
    this.props.navigation.navigate('home');
  }

  render() {

    return (
      <ScrollView contentContainerStyle={styles.container}>

        <TouchableOpacity
          style={styles.btn_start}
          onPress={this.handleChoosePhoto}>
          <Text style={{ textAlign: 'center', color: 'white', lineHeight: 45 }}>choose photo</Text>
        </TouchableOpacity>

        <View>
          {this.photoList()}
        </View>

        <TouchableOpacity
          style={styles.btn_end}
          onPress={() => this.picture_map()}>
          <Text style={{ textAlign: 'center', color: 'white', lineHeight: 45 }}>내 경로 만들기</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}
export default New_Tour_Main