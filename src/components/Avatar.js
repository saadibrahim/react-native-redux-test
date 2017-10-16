import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types';
import styles from './styles/AvatarStyles'

export default class Avatar extends Component {
  render () {
    const { src } = this.props;

    return (
       <Image source={{uri: src}} style={styles.image} />
    )
  }
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired
};