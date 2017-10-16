import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './styles/GridStyles'


export default class Grid extends Component {
  render () {
    const { grid } = this.props
    const { data, fetching, error } = grid

    if(fetching) {
      return <View><Text>Loading</Text></View>
    }

    let slider = data.map(slide => {
      return (
        <View key={slide.objectId} style={styles.slideContainer}>
          <Image style={styles.slide} source={{uri: slide.thumbnail}} />
        </View>
      )
    })

    return (
      <View style={styles.wrapper}>
        {slider}
      </View>
    )
  }
}

Grid.propTypes = {
  // user: PropTypes.object.isRequired
};