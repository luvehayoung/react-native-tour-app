// In App.js in a new project

import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import styles from './styles'
import NaverMapView from "react-native-nmap";
import { Marker } from "react-native-nmap";
import { Polyline } from "react-native-nmap";

class New_Tour_Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: this.props.navigation.getParam('user'),
      record_id: this.props.navigation.getParam('record_id'),
      record: this.props.navigation.getParam('data'),
      daily: [],
      loading: false
    }
  }

  componentWillMount(){
    var arr = []
    for (var i = 0; i < this.state.record.period; i++) {
      var temp = this.dailyLilst(i);
      this.setState({
        daily: this.state.daily.concat(temp)
      })
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
  }

  go_to_main() {
    this.props.navigation.navigate('home');
  }

  go_to_daily_page(photo, review) {
    this.props.navigation.navigate('daily', { 'photo': photo, 'review': review, 'user': this.state.user });
  }

  photoList = () => {
    let photo_arr = []
    for (i in this.state.record.photo) {
      photo_arr.push(
        <Marker
          coordinate={{ latitude: this.state.record.photo[i]["latitude"], longitude: this.state.record.photo[i]["longitude"] }}
          anchor={{ x: 0.5, y: 1 }}
          caption={this.state.record.review[i].review[0]}
          subcaption={this.state.record.review[i].review[1]}
        />
      )
    }
    return photo_arr
  }

  dailyLilst = async(index) => {
    var date = await new Date(Date.parse(this.state.record.start_date))
    date.setDate(date.getDate() + index);

    let daily_arr = {
      photo: [],
      review: []
    }

    for (i in this.state.record.photo) {
      var photo_date = await new Date(Date.parse(this.state.record.photo[i].timestamp));

      if (photo_date.getMonth() == date.getMonth() && photo_date.getDate() == date.getDate()) {
        daily_arr.photo.push(this.state.record.photo[i])
        daily_arr.review.push(this.state.record.review[i].review)
      }
    }
    return daily_arr
  }

  tourDayList = async () => {
    let day_arr = []
    const days = ["첫째날", "둘째날", "셋째날", "넷째날", "다섯째날", "여섯째날", "일곱째날", "여덟째날", "아홉째날"]
    for (var i = 0; i < this.state.record.period; i++) {
      var d_list = this.dailyLilst(i)

      day_arr.push(
        <TouchableOpacity
          onPress={() => this.go_to_daily_page(d_list.photo, d_list.review)}
        >
          <Text style={styles.openText}>{days[i]}</Text>
        </TouchableOpacity>
      )
    }
    return day_arr
  }

  render() {

    const { heading, input, parent } = styles;

    return (

      <View>
        <NaverMapView style={{ width: '100%', height: '70%', zIndex: 0 }}
          center={{ latitude: this.state.record.photo[0].latitude, longitude: this.state.record.photo[0].longitude }}
        >
          {this.photoList()}

          <Polyline coordinates={this.state.geodata}
            strokeWidth={3}
            strokeColor={"blue"}></Polyline>

        </NaverMapView>

        <View>
          {this.state.loading?(this.tourDayList()):(<Text>로딩중</Text>)}

          <Button title={"홈으로 가기"} onPress={() => this.go_to_main()} style={styles.button} />
        </View>
      </View>
    );
  }
}


export default New_Tour_Map
