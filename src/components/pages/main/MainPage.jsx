import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Keypad from '../../organisms/keypad'
import Screen from '../../organisms/screen'

import styles from './MainPage.module.scss'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { width } = this.state
    return (
      <div className={styles.main}>
        <Screen />
        <Keypad type={width > 850 ? 'scientific' : 'basic'} />
      </div>
    )
  }
}

MainPage.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
