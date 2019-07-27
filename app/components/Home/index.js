// In App.js in a new project

import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'
//import ToastModule from './ToastExample';
//import ToastExample from '../../../../ToastExample';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      user : {
        email : this.props.navigation.getParam('email'),
        accessToken : this.props.navigation.getParam('accessToken'),
        nickname : this.props.navigation.getParam('nickname'),
        login_type: this.props.navigation.getParam('login_type')
      },
      search_keyword : ""
    }
  }

  // showToast(){
  //     ToastExample.show("awesome",ToastExample.SHORT);
  // }

  async logout() {
		//NaverLogin.logout();
    NaverLogin.getAccessToken()
      .then(token => {
                alert("logout Successful\n" + JSON.stringify(token));
                //console.log(JSON.parse(token).accessToken);
                console.log();
                //회원탈퇴같은 느낌??
                fetch('https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=FbkrsrnqyIAabTRpvvUg&client_secret=TniDRPTiML&access_token='+token.accessToken+'&service_provider=NAVER')

            this.setState({ loading: false });
          }).catch(e => {
              alert("logout Failure");
            console.log(e);
            this.setState({ loading: false });
          });
    }
    /*
	async getToken() {
		this.setState({ loading: true });
        NaverLogin.getAccessToken()
          .then(token => {
                    alert("Signed Successful\n" + JSON.stringify(token));
          			this.setState({ loading: false });
          		}).catch(e => {
          		    alert("Signed Failure");
          			console.log(e);
          			this.setState({ loading: false });
          		});
	}
    */
  disconnect_naver(){
    this.logout();
    this.props.navigation.navigate('naver_login');
  }


  disconnect_general(){
    this.props.navigation.navigate('naver_login');
  }

  //키워드 입력 받고 넘기는 부분 - 은지, 아마 여기서 거리 계산을 해야할것같
  search_on_map(){
    this.props.navigation.navigate('search_list', {'keyword': this.state.search_keyword});
  }

  //유저 데이터는 어떻게 넘기게 될지몰라서 이렇게 일단 넘겨주고있어(은지)
  show_my_tour(){
    this.props.navigation.navigate('browse_tour');
  }

  new_tour(){
    this.props.navigation.navigate('new_tour');
  }

  render() {

    const { heading, input, parent } = styles

    // //은지 여기서 네이버 api에서 받아왔던 데이터 받아온건데, 우리는 디비에 저장될거니까 어떻게 될지 모르겠구먼
    // const itemId = this.props.navigation.getParam('email');
    // const login_type = this.props.navigation.getParam('login_type');

    //this.setState({email: JSON.stringify(itemId)})


    let disconnect = []

    if(this.state.user.login_type == '0'){
      disconnect.push(
        <View style={styles.dis_btn}>
          <Text>네이버 소셜로그인을 하셨습니다. email: {String(this.state.user.email)}</Text>
          <Button title ={"네이버 연동 해지(회원 탈퇴)"} onPress={() => this.disconnect_naver() }/>
        </View>
      );
    }
    else if(this.state.user.login_type == '1'){
        disconnect.push(
          <View style={styles.dis_btn}>
            <Text>일반 회원 로그인을 하셨습니다. itemId: {String(this.state.user.login_type)}</Text>
            <Button title ={"일반 회원 탈퇴"} onPress={() => this.disconnect_general() }/>
          </View>
        );
    }


    return (
      <View>
        <Text>Home!</Text>

        <View>
            <View style = {parent}>
                <Text>모듈사용</Text>
                <Button title ={"모듈사용"}/>
            </View>

        </View>

        <View>
            <View style = {parent}>
                <Text>검색어 입력창</Text>
                <TextInput style = {input} placeholder = "검색어를 입력해주세요" onChangeText = {text => this.setState({ search_keyword: text })} />
                <Button title ={"검색하기"} onPress={() => this.search_on_map() }/>
            </View>

        </View>
        <View>
            <View style = {parent}>
                <Button title ={"내 여행 모두 보기"} onPress={() => this.show_my_tour() }/>
            </View>
            <View style = {parent}>
                <Button title ={"내 여행 기록 남기기"} onPress={() => this.new_tour() }/>
            </View>
        </View>
        {disconnect}



      </View>
    );


  }
}


export default Home
