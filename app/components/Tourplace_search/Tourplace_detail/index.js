import React from "react";
import { View, Text, Button, TextInput, FlatList,TouchableHighlight,Image } from "react-native";
import styles from './styles'

class Tourplace_detail extends React.Component {
   
    constructor(props){
      console.log("detail page")
        super(props);
        this.state = {
            data : this.props.navigation.getParam('data')
        }
    }
        
  render() {

    return (
        <View>
            <Text>{this.state.data.title} </Text>
            {this.state.data.firstimage ? (
              <Image source={{ uri: this.state.data.firstimage }} style={{ height: 200}} />
            ) : null}
            <Text>주소 : {this.state.data.addr1} </Text>
            {/* 지도 보여줄 곳(하영) */}
            <Text>위도? : {this.state.data.mapx} </Text>
            <Text>경도? : {this.state.data.mapy} </Text>
            {this.state.data.readcount?(
            <Text>조회수 : {this.state.data.readcount} </Text>
            ) : null}
            {this.state.data.tel?(
            <Text>전화번호 : {this.state.data.tel} </Text>
            ) : null}
        </View>
    );


  }
    
}

export default Tourplace_detail
