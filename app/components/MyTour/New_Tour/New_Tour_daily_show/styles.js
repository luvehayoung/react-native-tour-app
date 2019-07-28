import { StyleSheet } from "react-native";


export default StyleSheet.create({
  wrapper: {
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
    flex: 1
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
  }
});
