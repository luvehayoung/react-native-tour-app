// In App.js in a new project

import React from "react";
import { 
  View, 
  Text, 
  Button, 
  TextInput, 
  TouchableOpacity 
} from "react-native";
import styles from './styles'

class New_Tour_daily_detail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      contents: '',
    }
  }

  go_to_main(){
    const { navigation } = this.props;
    navigation.goBack();
    // navigation.state.params.onSelect({ selected: true});
    navigation.state.params.onReview({ review: [this.state.title, this.state.contents] });
  }

  handleTitle = (text) => {
        this.setState({ title: text })
   }
   handleContents = (text) => {
      this.setState({ contents: text })
   }

  render() {
    const { heading, input, parent } = styles

    return (
        <View style={styles.container}>
          <View style={styles.contents_1}>
            <Text style={{textAlign: 'center', color:'#949494', lineHeight: 25, }}>제목을 입력해주세요</Text>
            <TextInput
             style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10,}}
             onChangeText={this.handleTitle}
           />
          </View>

          <View style={styles.contents_2}>
           <Text style={{textAlign: 'center', color:'#949494', lineHeight: 25, }}>후기를 입력해주세요</Text>
           <TextInput
             style={{width: 300, height: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 10,}}
             onChangeText={this.handleContents}
           />
           </View>
            <TouchableOpacity onPress={() => this.go_to_main() } style={ styles.btn_end }>
    					<Text style={{textAlign: 'center', color:'white', lineHeight: 45}}>사진 추가 완료</Text>
    				</TouchableOpacity>
        </View>
    );


  }
}


export default New_Tour_daily_detail
