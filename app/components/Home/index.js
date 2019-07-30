// In App.js in a new project

import React from "react";
import { TouchableOpacity, View, Text, Button, TextInput } from "react-native";
import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: this.props.navigation.getParam('email'),
        accessToken: this.props.navigation.getParam('accessToken'),
        nickname: this.props.navigation.getParam('nickname'),
        login_type: this.props.navigation.getParam('login_type')
      },
      search_keyword: ""
    }
    console.log(this.state)
  }

  logout = async () => {
    //NaverLogin.logout();
    const token = await NaverLogin.getAccessToken()
    alert("logout Successful\n" + JSON.stringify(token));

    try {
      const tmp = await fetch('https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=FbkrsrnqyIAabTRpvvUg&client_secret=TniDRPTiML&access_token=' + token.accessToken + '&service_provider=NAVER')
      this.setState({ loading: false });
    }
    catch (e) {
      alert("logout Failure");
      console.log(e);
      this.setState({ loading: false });
    }
  }

  disconnect_naver() {
    this.logout();
    this.props.navigation.navigate('naver_login');
  }

  disconnect_general() {
    this.props.navigation.navigate('naver_login');
  }

  search_on_map() {
    this.props.navigation.navigate('search_list', { 'keyword': this.state.search_keyword });
  }

  show_my_tour() {
    this.props.navigation.navigate('browse_tour');
  }

  new_tour() {
    this.props.navigation.navigate('new_tour', { "user": this.state.user });
  }

  render() {

    const { heading, input, parent } = styles

    let disconnect = []

    if (this.state.user.login_type == '0') {
      disconnect.push(
        <View style={styles.case4}>
          <TouchableOpacity onPress={() => this.disconnect_naver()}>
            <Text style={{ textAlign: 'center', color: '#949494', lineHeight: 45, }}>네이버 연동 해지</Text>
          </TouchableOpacity>
        </View>
      );
    }
    else if (this.state.user.login_type == '1') {
      disconnect.push(
        <View style={styles.case4}>
          <TouchableOpacity onPress={() => this.disconnect_general()}>
            <Text style={{ textAlign: 'center', color: '#949494', lineHeight: 45, }}>일반 회원 탈퇴</Text>
          </TouchableOpacity>
        </View>
      );
    }


    return (
      <View style={styles.container}>
        {disconnect}
        <View style={styles.case1}>
          <TextInput style={styles.textinput1} placeholder="알고 싶은 관광지를 입력해주세요" onChangeText={text => this.setState({ search_keyword: text })} />
          <TouchableOpacity style={styles.touch}
            onPress={() => this.search_on_map()}><Text style={{ textAlign: 'center', color: 'white', lineHeight: 45 }}>검색</Text></TouchableOpacity>
        </View>

        <View style={styles.case2}>
          <TouchableOpacity style={styles.touch2}
            onPress={() => this.show_my_tour()}>
            <Text style={{ textAlign: 'center', color: 'white', lineHeight: 45 }}>내 여행 모두 보기</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.case3}>
          <TouchableOpacity style={styles.touch2}
            onPress={() => this.new_tour()}>
            <Text style={{ textAlign: 'center', color: 'white', lineHeight: 45 }}>내 여행 기록 남기기</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

export default Home
