import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles/SliderStyles'

const {width} = Dimensions.get('window')

export default class Slider extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeSlide: 0,
      sliderRef: null
    }
  }
  render () {
    const { slides } = this.props
    const { activeSlide, sliderRef } = this.state
    const { data, fetching, error } = slides

    if(fetching) {
      return <View><Text>Loading</Text></View>
    }

    return (
      <View style={styles.wrapper}>
        <Carousel
          ref={(c) => { if (!this.state.sliderRef) { this.setState({ sliderRef: c }); } }}
          data={data}
          renderItem={this.renderItem}
          sliderWidth={width * 0.90}
          itemWidth={width * 0.90}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        <Pagination
          carouselRef={sliderRef}
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.dot}
          inactiveDotScale={0.6}
          tappableDots={!!sliderRef}
        />
      </View>
    )
  }
  renderItem ({item, index}) {
    return (
      <View key={item.objectId}>
        <Image style={styles.slide} source={{uri: item.thumbnail}} />
      </View>
    );
  }
}

Slider.propTypes = {
  // user: PropTypes.object.isRequired
};