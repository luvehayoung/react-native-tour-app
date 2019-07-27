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
    // await AsyncStorage.clear();
      const userEmail = await AsyncStorage.getItem('userEmail');
  
      if(!userEmail)
        this.props.navigation.navigate('Auth');
      else{
        // 서버에서 정보가져오기
        this.props.navigation.navigate('home', {
          email: userEmail,
          accessToken : "access",
          nickname : "nickname",
          login_type: 0,
        })
      }
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