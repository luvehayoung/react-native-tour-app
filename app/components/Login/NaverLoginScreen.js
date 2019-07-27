/**
네이버 로그인 하는곳!!!
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
*/

import React, {Component} from 'react';
import {
    Text, 
    View, 
    TouchableOpacity, 
    ActivityIndicator, 
    AsyncStorage
} from 'react-native';

import NaverLogin from 'react-native-ccs-naver-login';
import styles from './styles'

export class NaverLoginScreen extends Component {

	constructor(props) {
        super(props);
        this.state = {
            loading : false
        }
	}

	login = async()=> {
		this.setState({ loading: true });

        try{
            const res = await NaverLogin.login();
            this.setState({ loading: false });

            /*curl http://blog.naver.com/PostView.nhn?blogId=chic1007&logNo=221482550815&categoryNo=15&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search*/
            //여기서 우리가 가져온 값들 정리해서 디비에 저장하면 될것같다 __ 은지
            
            const response = await fetch(`https://openapi.naver.com/v1/nid/me`, {
                headers: {
                    Authorization: `Bearer ${res.accessToken}`
                }
            })
            const json = await response.json()
            await AsyncStorage.setItem('userEmail', json.response.email);
            
            this.props.navigation.navigate('home', {
                email: json.response.email,
                accessToken : res.accessToken,
                nickname : json.response.nickname,
                login_type: 0,
            })
        }
        catch(err){
            console.log(err);
            alert("다시 로그인 해주세요!");

            //로그인을 잘못해도 토큰이 살아있어서 없애줘야함...!
            fetch('https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=FbkrsrnqyIAabTRpvvUg&client_secret=TniDRPTiML&access_token='+token.accessToken+'&service_provider=NAVER')
            this.setState({ loading: false });
          }
	}

    login_g(){
        //로그인 페이지 만들고 연결, 일단은 홈으로 바로 넘어가게 구현했음
        this.props.navigation.navigate('home', {email: 'random@email.com', login_type: 1 })
    }


    sign_up(){
        //로그인 페이지 만들고 연결, 일단은 홈으로 바로 넘어가게 구현했음
        this.props.navigation.navigate('home', {email: 'random@email.com', login_typle: 1})
    }

    /*
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

    /*
    				<TouchableOpacity onPress={() => this.logout() } style={ styles.button }>
    					<Text>네이버 연동 해제</Text>
    				</TouchableOpacity>

    				<TouchableOpacity onPress={() => this.getToken() } style={ styles.button }>
    					<Text>getToken</Text>
    				</TouchableOpacity>
    				*/

	render() {
		return (
			<View style={styles.container}>

				{(this.state.loading && true) && (
				<View style={ styles.loading }>
					<ActivityIndicator />
				</View>
				)}

				<TouchableOpacity onPress={this.login } style={ styles.button }>
					<Text>네이버 소셜 로그인</Text>
				</TouchableOpacity>

                <TouchableOpacity onPress={() => this.login_g() } style={ styles.button }>
                    <Text>일반 회원 로그인</Text>
                </TouchableOpacity>


				<TouchableOpacity onPress={() => this.sign_up() } style={ styles.button }>
                	<Text>일반 회원 가입</Text>
                </TouchableOpacity>



			</View>
		);
	}
}

export default NaverLoginScreen
