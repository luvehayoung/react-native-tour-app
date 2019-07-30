import { StyleSheet } from "react-native";

export default StyleSheet.create({
    heading:{
        fontSize: 20,
        backgroundColor: 'red',
        textAlign: 'center',
    },
     input:{
        backgroundColor: 'blue',
        color: 'white',
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        marginBottom:10,
    },
    parent:{
        flex:1,
        justifyContent:'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    wrapper: {
      height:200
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    image: {
      flex: 1,
      height : 100
    },
    image_text: {
      position:'absolute',
      backgroundColor: 'white',
      bottom: 30,
    },
    image_text2: {
      position:'absolute',
      backgroundColor: 'white',
      bottom: 10,
    },
    paginationStyle: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },
    paginationText: {
      color: 'white',
      fontSize: 20
    },
    scroll:{
      flex: 1,
      flexDirection: 'column',
    },
    titleText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    MaintitleText: {
      fontSize: 25,
      fontWeight: 'bold',
      alignItems: 'center',
    }

})