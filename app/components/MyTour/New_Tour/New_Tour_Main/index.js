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
      picture_num: null,
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

        // let pictures = []
        //
        // for(let i = 0; i< this.state.picture_num; i++ ){
        //   console.log("state", i, "번째", this.state.photo[i]['path'])
        //
        //   pictures.push(
        //    <Image source={{isStatic:true, uri: 'file://' + this.state.photo[i]['path']}} style = {{width:300, height: 300}} />
        //     )
        // }
        // //this.setState({picture: pictures})
        //
        // console.log("pictures", pictures)

      });

    }


  picture_detail(){
    //New_Tour_daily_detail
    this.props.navigation.navigate('put_picture');
  }

  picture_map(){
    //New_Tour_daily_detail
    this.props.navigation.navigate('new_map', {'photo': this.state.photo});



  }


  back_to_home(){
    console.log("result: ", this.state.photo )
    this.props.navigation.navigate('home');

  }

  render() {
    const itemId = this.props.navigation.getParam('email');
    const { heading, input, parent } = styles

    const {photo} = this.state
    return (
        <ScrollView>
            <Text>내 여행 등록하는 페이지 - 다이어그램에서 내여행사진 등록하기 전체</Text>
            <View>
              <Text>itemId: {JSON.stringify(itemId)}</Text>
            </View>
            <Button
              title = "choose photo"
              onPress = {this.handleChoosePhoto}
            />

            <View>

            {photo[0] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[0]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[1] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
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
                <Image
                source={{isStatic:true, uri: 'file://' + photo[3]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[4] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[4]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[5] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[5]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[6] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[6]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[7] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[7]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[8] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[8]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[9] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
                <Image
                source={{isStatic:true, uri: 'file://' + photo[9]['path']}}
                style = {{width:300, height: 300}}
                />
              </TouchableOpacity>
            )}

            {photo[10] && (
              <TouchableOpacity onPress = {() => this.picture_detail()}>
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
