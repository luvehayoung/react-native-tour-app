import React from 'react';
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import styles from './styles'

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    //로그인 정보 삭제하고 싶을 때
    //await AsyncStorage.clear();
    const userEmail = await AsyncStorage.getItem('userEmail');

    if (!userEmail)
      this.props.navigation.navigate('Auth');
    else {
      const users = await fetch('http://192.168.219.101:3000/users/'+userEmail)
      const user_json = await users.json()

      this.props.navigation.navigate('home', {
        email: userEmail,
        accessToken: user_json.accessToken,
        nickname: user_json.nickname,
        login_type: 0,
      })
    }
    //하영이 언니가 실행할때는 서버없으니까 밑에걸로 실행
    // this.props.navigation.navigate('home', {
    //     email: userEmail,
    //     accessToken:" user_json.accessToken",
    //     nickname: "user_json.nickname",
    //     login_type: 0,
    //   })
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;