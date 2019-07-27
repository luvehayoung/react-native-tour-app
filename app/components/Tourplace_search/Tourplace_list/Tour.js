import React from "react";
import { View, Text, Button, TextInput, FlatList,TouchableHighlight,Image } from "react-native";
import styles from './styles'
import { TouchableOpacity } from "react-native-gesture-handler";

class Tour extends React.Component {

    _pressDetail(item){
        this.props.navigation.navigate('search_detail', {'data' : item});
    }

    render(){
        return(
            <TouchableOpacity onPress={()=>{this._pressDetail(this.props.item)}}>
                <View>
                    {this.props.item.firstimage ? (
                        <Image source={{ uri: this.props.item.firstimage }} style={{ height: 200}} />
                    ) : null}
                    <Text>{this.props.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Tour;