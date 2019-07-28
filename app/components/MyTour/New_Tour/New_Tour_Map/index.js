// In App.js in a new project

import React from "react";
import { ScrollView, Modal, View, Text, Button, TextInput, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'
import NaverMapView from "react-native-nmap";
import {Marker} from "react-native-nmap";
import {Polyline} from "react-native-nmap";


//
// <View style={{width: '100%'}}>
//   <Modal
//   animationType="slide"
//   transparent={false}
//   item={photo}
//   visible ={this.state.showMe}
//   onRequestClose = {() => console.warn("this is a close request")}>
//
//     <View>
//       <Text>
//         Hey, modal is open now
//       </Text>
//
//
//       <TouchableOpacity
//         onPress = {() =>
//           this.setState({
//             showMe: false
//           })
//         }
//       >
//         <Text style = { styles.closeText }>창닫기</Text>
//       </TouchableOpacity>
//     </View>
//
//
//   </Modal>
//
//
//   <TouchableOpacity
//     onPress = {() =>
//       this.setState({
//         showMe: true,
//       })
//     }
//   >
//     <Text style = { styles.openText }>첫째날</Text>
//   </TouchableOpacity>
//
//
//
//
//   <Modal visible ={this.state.showMe} onRequestClose = {() => console.warn("this is a close request")}>
//     <View style = { styles.modalView }>
//       <Text>
//         Hey, modal is open now
//       </Text>
//
//       <TouchableOpacity
//         onPress = {() =>
//           this.setState({
//             showMe: false
//           })
//         }
//       >
//         <Text style = { styles.closeText }>창닫기</Text>
//       </TouchableOpacity>
//     </View>
//   </Modal>
//
//
//   <TouchableOpacity
//     onPress = {() =>
//       this.setState({
//         showMe: true
//       })
//     }
//   >
//     <Text style = { styles.openText }>둘째날</Text>
//   </TouchableOpacity>
//
//
//
//
//
//   <Modal visible ={this.state.showMe} onRequestClose = {() => console.warn("this is a close request")}>
//     <View style = { styles.modalView }>
//       <Text>
//         Hey, modal is open now
//       </Text>
//
//       <TouchableOpacity
//         onPress = {() =>
//           this.setState({
//             showMe: false
//           })
//         }
//       >
//         <Text style = { styles.closeText }>창닫기</Text>
//       </TouchableOpacity>
//     </View>
//   </Modal>
//
//
//   <TouchableOpacity
//     onPress = {() =>
//       this.setState({
//         showMe: true
//       })
//     }
//   >
//     <Text style = { styles.openText }>셋째날</Text>
//   </TouchableOpacity>


class New_Tour_Map extends React.Component {

  constructor(){
    super()
    this.state = {
      showMe:false,

    }
  }


  go_to_main(){

    this.props.navigation.navigate('home');
  }

  go_to_daily_page(photo, review){
    //날짜별로 데이터를 여기서 넘기나???
    //review를 날짜별로 나누거나 해야할듯...아직 어떻게 할지 모르겠어!!! 일단은 리뷰를 받아오면 통채로 넘겨주는 식으로 구현 해놧어!
    console.log('new page review', review)
    this.props.navigation.navigate('daily', {'photo': photo, 'review': review});
  }


  press_marker(n){
    // your code here
    console.log("누름!!", n);
  }



  render() {

    // <Image style = {{width:300, height: 300}} source={{isStatic:true, uri: 'file://' + photo[0]['path']}} />
    //
    // <Image style = {{width:300, height: 300}} source={{isStatic:true, uri: 'file://' + photo[1]['path']}} />
    //
    // <Image style = {{width:300, height: 300}} source={{isStatic:true, uri: 'file://' + photo[2]['path']}} />


    const { heading, input, parent } = styles;

    const photo = this.props.navigation.getParam('photo');
    const review = this.props.navigation.getParam('review');
    const picture_num = this.props.navigation.getParam('picture_num');

    arr = []
    for(i=0; i<picture_num; i++) {
      arr.push({latitude: photo[i]['latitude'], longitude: photo[i]['longitude']});
    }

    console.log('arr',arr);
    //[{latitude: photo[0]['latitude'], longitude: photo[0]['longitude']}, {latitude: photo[1]['latitude'], longitude: photo[1]['longitude']}, {latitude: photo[2]['latitude'], longitude: photo[2]['longitude']}]
    console.log("photo:" , photo)
    //  image = {{isStatic:true, uri: 'file://' + photo[0]['path'], width:30}}
    //<Image style={{width: '30', height: '30' }} source={{isStatic:true, uri: 'file://' + photo[0]['path']}}
    //<Image style={{width: '30', height: '30' }} source={{isStatic:true, uri: 'file://' + photo[0]['path']}} />
//  image =  {{isStatic:true, uri: 'file://' + photo[0]['path'], wid}
    return (
        <View>
            <NaverMapView style={{width: '100%', height: '70%', zIndex: 0 }}
              center={{latitude: photo[0]['latitude'], longitude: photo[0]['longitude']}}
            >
              {photo[0] && (

                  <Marker
                    coordinate= {{latitude: photo[0]['latitude'], longitude: photo[0]['longitude']}}
                      anchor ={{x:0.5, y:1}}
                      onPress = {this.press_marker(1)}
                      caption = {review[0]['review'][0]}
                      subcaption = {review[0]['review'][1]}

                      // image =  {{isStatic:true, uri: 'file://' + photo[0]['path']}}
                  />
              )}

              {photo[1] && (
                  <Marker coordinate= {{latitude: photo[1]['latitude'], longitude: photo[1]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[1]['review'][0]}
                    subcaption = {review[1]['review'][1]}

                   />
              )}

              {photo[2] && (
                  <Marker coordinate= {{latitude: photo[2]['latitude'], longitude: photo[2]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[2]['review'][0]}
                    subcaption = {review[2]['review'][1]}
                   />
              )}

              {photo[3] && (
                  <Marker coordinate= {{latitude: photo[3]['latitude'], longitude: photo[3]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[3]['review'][0]}
                    subcaption = {review[3]['review'][1]}
                   />
              )}


              {photo[4] && (
                  <Marker coordinate= {{latitude: photo[4]['latitude'], longitude: photo[4]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[4]['review'][0]}
                    subcaption = {review[4]['review'][1]}
                   />
              )}

              {photo[5] && (
                  <Marker coordinate= {{latitude: photo[5]['latitude'], longitude: photo[5]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[5]['review'][0]}
                    subcaption = {review[5]['review'][1]}
                   />
              )}

              {photo[6] && (
                  <Marker coordinate= {{latitude: photo[6]['latitude'], longitude: photo[6]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[6]['review'][0]}
                    subcaption = {review[6]['review'][1]}
                   />
              )}

              {photo[7] && (
                  <Marker coordinate= {{latitude: photo[7]['latitude'], longitude: photo[7]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[7]['review'][0]}
                    subcaption = {review[7]['review'][1]}
                   />
              )}

              {photo[8] && (
                  <Marker coordinate= {{latitude: photo[8]['latitude'], longitude: photo[8]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[8]['review'][0]}
                    subcaption = {review[8]['review'][1]}
                   />
              )}

              {photo[9] && (
                  <Marker coordinate= {{latitude: photo[9]['latitude'], longitude: photo[10]['longitude']}}
                    anchor ={{x:0.5, y:1}}
                    flat =  {true}
                    caption = {review[9]['review'][0]}
                    subcaption = {review[9]['review'][1]}
                   />
              )}

              <Polyline coordinates= {arr}
                strokeWidth= {3}
                strokeColor= {"blue"}></Polyline>

            </NaverMapView>


            <View>
              <TouchableOpacity
                  onPress = {()=> this.go_to_daily_page(photo, review) }
                 >
                   <Text style = { styles.openText }>첫째날</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress = {()=> this.go_to_daily_page() }
                 >
                   <Text style = { styles.openText }>첫째날</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress = {()=> this.go_to_daily_page() }
                 >
                   <Text style = { styles.openText }>첫째날</Text>
              </TouchableOpacity>



              <Button title = {"홈으로 가기"} onPress={() => this.go_to_main() } style={ styles.button } />
            </View>







        </View>
    );


  }
}


export default New_Tour_Map
