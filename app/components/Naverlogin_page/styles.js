import { StyleSheet } from "react-native";


export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	loading : {
		...StyleSheet.absoluteFill,
		zIndex: 10,
		backgroundColor: 'rgba(0,0,0,0.8)',
		alignItems: 'center',
		justifyContent: 'center'
	},

	button: {
		borderColor: '#000',
		borderWidth: 1,
		padding: 10,
		width: 200,
		margin: 10,
	},
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
    }
});
