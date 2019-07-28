// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity,Image, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'
import ImagePicker from "react-native-image-picker"


class New_Tour_Main extends React.Component {


    state ={
      photo: [],
      lanlat: [],
      picture_num: null,
      selected: false,
      review: [],
    }

    handleChoosePhoto = () =>{
      const options = {
        noData: true,

      };


    ImagePicker.launchImageLibrary(options, response => {
        console.log("response", response)


        if(response.uri){
          this.setState({picture_num: this.state.picture_num+ 1})
          //[...prevState.myArray, response]
          //console.log("picture_num", this.state.picture_num)
          this.setState({
            photo: this.state.photo.concat(response)
            });
            console.log("photo", this.state.photo)
        }


      });

    }


  onSelect = data => {
     this.setState(data);


   };

  onReview = data => {
    //this.setSate(data)
    //this.setState(data);
    // photo: this.state.photo.concat(response)
    // });

    this.setState({
      review: this.state.review.concat(data)
    });

  };


  picture_detail(){
    //New_Tour_daily_detail
    //this.props.navigation.navigate('put_picture');
    this.props.navigation.navigate("put_picture", { onSelect: this.onSelect, onReview: this.onReview });
  }

  picture_map(){
    //New_Tour_daily_detail
    // this.setState({
    //   lanlat: this.state.lanlat.concat({latitude: this.state.photo[i]['latitude'], longitude: this.state.photo[i]['longitude']})
    // });

    this.props.navigation.navigate('new_map', {'photo': this.state.photo, 'review': this.state.review, 'picture_num': this.state.picture_num, 'lanlat': this.state.lanlat});
    console.log('selected', this.state.selected);
    console.log('review', this.state.review);
    console.log('lanlat', this.state.lanlat);
    console.log('num', this.state.picture_num);

  }


  back_to_home(){
    console.log("result: ", this.state.photo )
    this.props.navigation.navigate('home');

  }

  render() {
    // const NameOBJ = this.props.navigation.getParam('NameOBJ');
    // const NumberOBJ = this.props.navigation.getParam('NumberOBJ');

    const { heading, input, parent } = styles

    const {photo} = this.state

    return (
        <ScrollView>
            <Text>내 여행 등록하는 페이지 - 다이어그램에서 내여행사진 등록하기 전체</Text>

            <Button
              title = "choose photo"
              onPress = {this.handleChoosePhoto}
            />

            <View>

            {photo[0] && (

              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.selected ? "Selected" : "Not Selected"}</Text>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[0]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[1] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
              <Text>{this.state.review[1] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[1]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[2] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[2]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[3] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[3]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[4] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[4]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[5] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[5]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[6] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[6]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[7] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[7]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[8] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[8]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[9] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[9]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[10] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Text>{this.state.review[0] ? "작성완료": "review not done"}</Text>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[10]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}
            </View>



            <Button
              title = "내 경로 만들기"
              onPress = {() => this.picture_map()}
            />


            <Button
              title = "홈으로 가기"
              onPress = {() => this.back_to_home()}
            />
        </ScrollView>
    );


  }
}


export default New_Tour_Main
