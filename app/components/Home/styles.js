import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around'
  },
  case1: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 10,
  },
  case2: {
    flex: 8,
    // backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  case3: {
    flex: 8,
    // backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  case4: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  textinput1: {
    marginTop: 10,
    width: 250,
    height: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 10
  },
  touch: {
    width: 50,
    height: 50,
    marginTop: 10,
    backgroundColor: 'black',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  touch2: {
    width: 300,
    height: 50,
    marginTop: 30,
    backgroundColor: 'black',
    borderRadius: 10,
  }

});
