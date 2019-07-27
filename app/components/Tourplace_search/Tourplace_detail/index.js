import React from "react";
import { View, Text, Button, TextInput, FlatList,TouchableHighlight,Image } from "react-native";
import styles from './styles'
import { ScrollView } from "react-native-gesture-handler";

class Tourplace_detail extends React.Component {

    constructor(props){
      console.log("detail page")
        super(props);
        this.state = {
            data : this.props.navigation.getParam('data')
        }
    }

    Detail_list = ()=>{
      var except_key = ["_id","cat1","cat2","cat3","contenttypeid","firstimage","firstimage2","mapx","mapy","modifiedtime","title","mlevel","zipcode","areacode"]
      let detail_arr = []
      for(key in this.state.data){
        if(!except_key.includes(key)){
          detail_arr.push(<Text>{key} : {this.state.data[key]}</Text>)
        }
      }
      return detail_arr
    }

  render() {
    
    return (
        <ScrollView>
          <View>
              <Text>{this.state.data.title} </Text>
              {this.state.data.firstimage ? (
                <Image source={{ uri: this.state.data.firstimage }} style={{ height: 200}} />
              ) : null}
              {this.state.data.addr1?(
              <Text>주소 : {this.state.data.addr1} </Text>
              ):<Text>주소 : {this.state.data.areacode[0].name}</Text>}
              {/* 지도 보여줄 곳(하영) */}
              <Text>위도? : {this.state.data.mapx} </Text>
              <Text>경도? : {this.state.data.mapy} </Text>
              {this.state.data.readcount?(
              <Text>조회수 : {this.state.data.readcount} </Text>
              ) : null}
              {this.state.data.tel?(
              <Text>전화번호 : {this.state.data.tel} </Text>
              ) : null}
              {this.Detail_list()}
          </View>
        </ScrollView>
    );


  }

}

export default Tourplace_detail
