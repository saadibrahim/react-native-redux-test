import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import ReadMore from '@expo/react-native-read-more-text';
import ParsedText from 'react-native-parsed-text';
import PropTypes from 'prop-types';
import Avatar from './Avatar'
import styles from './styles/BioStyles'

export default class Bio extends Component {
  render () {
    const { user } = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.avatarWrapper}>
          <Avatar src={user.profileThumbnail} />
        </View>
        <View style={styles.meta}>
          <Text style={styles.username}>{user.name}</Text>
          <ReadMore 
            style={styles.description}
            numberOfLines={3}
          >
            <ParsedText 
              parse={
                [
                  {pattern: /(^|\W)@\w+/g, style: styles.mention, onPress: this.handleMentionPress},
                  {pattern: /#(\w+)/,      style: styles.hashtag, onPress: this.handleHashtagPress},
                ]
              }
            >
              {user.bio}
            </ParsedText>
          </ReadMore>
        </View>
      </View>
    )
  }
  handleMentionPress(mention) {
    // usually you would use the Linking API here to open links
    Alert.alert('mention pressed', mention)
  }
  handleHashtagPress(hashtag) {
    Alert.alert('hashtag pressed', hashtag)
  }
}

Bio.propTypes = {
  user: PropTypes.object.isRequired
};