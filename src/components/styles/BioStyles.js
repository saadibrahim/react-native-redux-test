import { StyleSheet, Dimensions } from 'react-native'

var {width} = Dimensions.get('window')

export default StyleSheet.create({
  wrapper: {
  	padding: 15,
  	flexDirection: 'row'
  },
  avatarWrapper: {
  	marginRight: 10
  },
  username: {
  	fontSize: 18,
  	marginBottom: 10
  },
  description: {
  	color: "#333333",
  	fontSize: 14
  },
  meta: {
  	width: width - 104
  },
  hashtag: {
  	color: "#2CBCF2"
  },
  mention: {
  	color: "#2CBCF2"
  }
})