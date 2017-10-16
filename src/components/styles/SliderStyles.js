import { StyleSheet, Dimensions } from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
  wrapper: {
    padding: width * 0.05
  },
  slide: {
    backgroundColor: '#9DD6EB',
    height: width * 0.90,
    width: width * 0.90
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: 'rgba(43, 193, 255, 0.92)'
  }
})