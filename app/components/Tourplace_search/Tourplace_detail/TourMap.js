// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, ragement, StyleSheet, TouchableOpacity } from "react-native";
import styles from './styles'

import NaverMapView from "react-native-nmap";
import { Marker } from "react-native-nmap";
import { Polyline } from "react-native-nmap";

class TourMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.navigation.getParam('data')
        }
        console.log(this.state.data)
        console.log(typeof(this.state.data.mapx))
      }
    render() {
        return (
            <View style={styles.container}>
                {this.state.data.mapx? 
                (<NaverMapView style={{ width: '100%', height: '70%', zIndex: 0 }} center={{ latitude: this.state.data.mapy, longitude: this.state.data.mapx }}>
                    <Marker
                        coordinate={{ latitude: this.state.data.mapy, longitude: this.state.data.mapx }}
                        anchor={{ x: 0, y: 0 }}
                        pinColor={"#000000"}
                        rotation={10}
                        flat={true}
                    ></Marker>
                </NaverMapView>):(
                <Text>
                    등록된 주소가 없습니다
                </Text>)
            }
            </View>
        );


    }
}


export default TourMap
