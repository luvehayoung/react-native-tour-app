// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput, ragement, StyleSheet, TouchableOpacity } from "react-native";
import styles from './styles'

import NaverMapView from "react-native-nmap";
import { Marker } from "react-native-nmap";
import { Polyline } from "react-native-nmap";

class Tourplace_map extends React.Component {

    going_detail() {
        this.props.navigation.navigate('search_detail');
    }

    render() {
        const keyword = this.props.navigation.getParam('keyword');

        return (

            <View style={styles.container}>
                <NaverMapView style={{ width: '100%', height: '70%', zIndex: 0 }} center={{ latitude: 37.5839, longitude: 127.0588 }}>

                    <Marker
                        coordinate={{ latitude: 37.5839, longitude: 127.0588 }}
                        anchor={{ x: 0, y: 0 }}
                        pinColor={"#007EEA"}
                        rotation={10}
                        flat={true}
                    ></Marker>

                    <Marker coordinate={{ latitude: 37.583, longitude: 127.058 }}
                        anchor={{ x: 0, y: 0 }}
                        pinColor={"#000000"}
                        rotation={10}
                        flat={true}
                    />
                    <Polyline coordinates={[{ latitude: 37.5839, longitude: 127.0588 }, { latitude: 37, longitude: 127 }]}
                        strokeWidth={3}
                        strokeColor={"blue"}></Polyline>

                </NaverMapView>

                <View style={{ position: 'absolute', zIndex: 10 }}>
                    <Text>지도 나오고 밑에 일지 조금씩 뜨는 화면 - 다이어그램에서 여행지 검색화면</Text>
                    <Text>입력했던 검색어 keyword: {JSON.stringify(keyword)}</Text>

                    <View>
                        <Button title={"상세 페이지로"} onPress={() => this.going_detail()} />
                    </View>
                </View>
            </View>
        );
    }
}

export default Tourplace_map
