import React from "react";
import { View, Text, Button, TextInput, FlatList,TouchableHighlight,Image } from "react-native";
import styles from './styles';
import Tour from './Tour';

class Area_Search extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            keyword : this.props.navigation.getParam('keyword'),
            data : [],
            page : 1,
            refreshing : false
        }
    }
    
    _getData = async () =>{
        console.log("serach function start")
        
        const att = ['addr', 'letuce', 'tomatoes'];

        fetch('http://192.168.219.101:3000/tour/area/'+ this.state.keyword+"/"+this.state.page)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                data : this.state.refreshing? responseJson:this.state.data.concat(responseJson),
                page : this.state.page + 1,
                refreshing : false
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    componentDidMount() {
        this._getData();
    }
    _handleLoadMore = () => {
        this._getData();
    }
        
    _handleRefresh = () =>{
        this.setState({
            refreshing:true,
            page: 1,
            },this._getData);
    }

  render() {

    return (
        <View>
            <TextInput 
                style = {styles.dis_btn} 
                placeholder = {this.state.keyword} 
                onChangeText = {text => this.setState({ keyword: text })} 
                value={this.state.keyword} 
            />
            <Button title ={"검색하기"} onPress={this._handleRefresh}/>
            <FlatList 
                data={this.state.data}
                renderItem={({item,index}) => {
                    return <Tour item = {item} index={index} navigation={this.props.navigation}/>
                }}
                keyExtractor={(item, index) => item.id}
                onEndReached={this._handleLoadMore}
                onEndReachedThreshold = {1}
                refreshing = {this.state.refreshing}
                onRefresh={this._handleRefresh}
            />
        </View>
    );
  }
}


export default Area_Search
