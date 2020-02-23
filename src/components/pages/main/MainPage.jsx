import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
    window.addEventListener('beforeunload', this.saveCalculatorHistory)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('beforeunload', this.saveCalculatorHistory)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  saveCalculatorHistory = () => {
    const { history } = this.props
    localStorage.setItem('history', JSON.stringify(history))
  }

  render() {
    const { width } = this.state
    return (
      <div className={styles.main}>
        <Link to="/history" className={styles.historyLink}>History</Link>
        <Screen />
        <Keypad type={width > 850 ? 'scientific' : 'basic'} />
      </div>
    )
  }
}

MainPage.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string,
      result: PropTypes.number,
    }),
  ).isRequired,
}

const mapStateToProps = (state) => ({
  history: state.history.entries,
})

export default connect(mapStateToProps, {})(MainPage)
