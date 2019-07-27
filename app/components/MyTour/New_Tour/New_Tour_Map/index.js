// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'
import NaverMapView from "react-native-nmap";
import {Marker} from "react-native-nmap";
import {Polyline} from "react-native-nmap";





class New_Tour_Map extends React.Component {



  go_to_main(){

    this.props.navigation.navigate('home');
  }

  press_marker(n){
    // your code here
    console.log("누름!!", n);
  }



  render() {



    const { heading, input, parent } = styles;

    const photo = this.props.navigation.getParam('photo');


    console.log("photo:" , photo)
    //  image = {{isStatic:true, uri: 'file://' + photo[0]['path'], width:30}}
    //<Image style={{width: '30', height: '30' }} source={{isStatic:true, uri: 'file://' + photo[0]['path']}}
    //<Image style={{width: '30', height: '30' }} source={{isStatic:true, uri: 'file://' + photo[0]['path']}} />
//  image =  {{isStatic:true, uri: 'file://' + photo[0]['path'], wid}
    return (
        <View>
            <Text>지도</Text>


            <NaverMapView style={{width: '100%', height: '100%', zIndex: 0 }}

              center={{latitude: photo[0]['latitude'], longitude: photo[0]['longitude']}}

            >


              {photo[0] && (

                  <Marker
                    coordinate= {{latitude: photo[0]['latitude'], longitude: photo[0]['longitude']}}
                      anchor ={{x:0.5, y:1}}
                      onPress = {this.press_marker(1)}
                      caption = {"제목" }
                      subcaption = {"그리고 내용..." }
                      info = {"Hello"}
                      // image =  {{isStatic:true, uri: 'file://' + photo[0]['path']}}
                  />
              )}



              {photo[1] && (
                  <Marker coordinate= {{latitude: photo[1]['latitude'], longitude: photo[1]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    info = {"Hello"}
                   />
              )}


              {photo[2] && (
                  <Marker coordinate= {{latitude: photo[2]['latitude'], longitude: photo[2]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    info = {"Hello"}
                   />
              )}

              <Polyline coordinates= {[{latitude: photo[0]['latitude'], longitude: photo[0]['longitude']}, {latitude: photo[1]['latitude'], longitude: photo[1]['longitude']}, {latitude: photo[2]['latitude'], longitude: photo[2]['longitude']}]}
                strokeWidth= {3}
                strokeColor= {"blue"}></Polyline>

            </NaverMapView>


            <TouchableOpacity onPress={() => this.go_to_main() } style={ styles.button }>
    					<Text>메인으로 가기</Text>
    				</TouchableOpacity>
        </View>
    );


  }
}


export default New_Tour_Map
