import { StyleSheet, Dimensions } from 'react-native'

const {width} = Dimensions.get('window')
const itemWidth = (width - 4) / 3

export default StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  slideContainer: {
    width: itemWidth,
    height: itemWidth,
    marginTop: 2
  },
  slide: {
    backgroundColor: '#9DD6EB',
    height: itemWidth,
    width: itemWidth
  }
})