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
import col_name from './col_name.json';

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


    var except_key = ["_id", "cat1", "cat2",
      "cat3", "contenttypeid", "firstimage",
      "firstimage2", "mapx", "mapy", "modifiedtime",
      "title", "mlevel", "zipcode", "areacode", "image",
      "heritage1", "heritage2", "heritage3", "createdtime", 'sigungucode',
      "addr2", "homepage"
    ]

    let detail_arr = []
    for (key in this.state.data) {
      if (!except_key.includes(key)) {
        if (key == "overview") {
          const regex = /(<([^>]+)>)/ig;
          const result = this.state.data[key].replace(regex, '');
          detail_arr.push(<Text><Text style={styles.titleText}>{col_name[key]}</Text> : {result}</Text>)

        }
        else {
          detail_arr.push(<Text><Text style={styles.titleText}>{col_name[key]}</Text> : {this.state.data[key]}</Text>)
        }
      }
    }
    return detail_arr
  }

  render() {

    return (
      <ScrollView >
        <Text style={styles.MaintitleText}>{this.state.data.title} </Text>
        {this.Detail_list()}
      </ScrollView>
    );


  }

}

export default TourDetail
