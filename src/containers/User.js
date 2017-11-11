import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { userActions } from '../actions'
import { Loading, Bio, Navbar, Slider, Grid } from '../components'
import { userSelectors, slideSelectors, gridSelectors } from '../selectors'

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const { fetching, data: user, error } = this.props.user
    const { slides, grid } = this.props
    if(fetching) {
      return (
        <View style={{flex: 1}}>
          <StatusBar barStyle='light-content' />
          <Navbar text='Profile' />
          <Loading />
        </View>
      )
    }    

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <Navbar text='Profile' />
        <ScrollView style={{backgroundColor: '#eefaff'}}>
          <Bio user={user} />
          <Slider slides={slides} />
          <Grid grid={grid} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelectors.getUserData(state),
    slides: slideSelectors.getSlides(state),
    grid: gridSelectors.getGrid(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(userActions.getUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
