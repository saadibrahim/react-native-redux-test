import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { userActions } from '../actions'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Bio from '../components/Bio'
import Slider from '../components/Slider'
import Grid from '../components/Grid'
import { getUserData } from '../selectors/user'
import { getSlides } from '../selectors/slides'
import { getGrid } from '../selectors/grid'

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
    user: getUserData(state),
    slides: getSlides(state),
    grid: getGrid(state)
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
