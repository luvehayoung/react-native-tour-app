import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableHighlight,
  Image
} from "react-native";
import styles from './styles'
import { ScrollView } from "react-native-gesture-handler";

class TourDetail extends React.Component {

  constructor(props) {
    console.log("detail page")
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data')
    }
    console.log(this.state.data);
  }

  Detail_list = () => {
    var except_key = ["_id", "cat1", "cat2", "cat3", "contenttypeid", "firstimage", "firstimage2", "mapx", "mapy", "modifiedtime", "title", "mlevel", "zipcode", "areacode","image",
        "heritage1","heritage2","heritage3"]
    let detail_arr = []
    for (key in this.state.data) {
      if (!except_key.includes(key)) {
          console.log(key);
        detail_arr.push(<Text>{key} : {this.state.data[key]}</Text>)
      }
    }
    return detail_arr
  }

  render() {

    return (
      <ScrollView>
        <Text>{this.state.data.title} </Text>
        {this.Detail_list()}
      </ScrollView>
    );


  }

}

export default TourDetail
