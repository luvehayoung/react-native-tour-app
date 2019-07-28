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
import Swiper from 'react-native-swiper'


const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

class TourInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('data')
        }
        console.log(this.state.data);
    }

    Image_list = () => {
        let image_arr = []

        if(this.state.data.firstimage){
            image_arr.push(
                <View style = {styles.slide}>
                    <Image source={{ uri: this.state.data.firstimage }} style={styles.image} />
                </View>
            )
        }
        for(i in this.state.data.image){
            console.log(this.state.data.image[i].originimgurl);
            image_arr.push(
                <View style = {styles.slide}>
                    <Image source={{ uri: this.state.data.image[i].originimgurl }} style={styles.image} />
                </View>
            )
        }
        return image_arr
    }

    render() {

        return (
            <ScrollView style = {styles.scroll}>
                <Text>{this.state.data.title} </Text>
                {this.state.data.firstimage ? (
                    <Swiper
                        style={styles.wrapper}
                        renderPagination={renderPagination}
                        loop={false}
                    >   
                    {this.Image_list()}
                    </Swiper>
                ) : null}
                {this.state.data.addr1 ? (
                    <Text>주소 : {this.state.data.addr1} </Text>
                ) : <Text>주소 : {this.state.data.areacode[0].name}</Text>}
                {this.state.data.readcount ? (
                    <Text>조회수 : {this.state.data.readcount} </Text>
                ) : null}
                {this.state.data.tel ? (
                    <Text>전화번호 : {this.state.data.tel} </Text>
                ) : null}
                {/* {this.state.data.overview ? (
                <Text>소개 : {this.state.data.overview} </Text>
                ) : null}
                {this.state.data.homepage ? (
                <Text>홈페이지 : {this.state.data.homepage} </Text>
                ) : null} */}
            </ScrollView>
        );


    }

}

export default TourInfo
