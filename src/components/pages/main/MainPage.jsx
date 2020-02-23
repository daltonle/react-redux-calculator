import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Keypad from '../../organisms/keypad'
import Screen from '../../organisms/screen'
import { loadHistory } from '../../../state/ducks/history/actions'

import styles from './MainPage.module.scss'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
  }

  componentDidMount = () => {
    const { loadHistoryConnect } = this.props
    loadHistoryConnect()
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
        <Screen />
        <Keypad type={width > 850 ? 'scientific' : 'basic'} />
      </div>
    )
  }
}

MainPage.propTypes = {
  loadHistoryConnect: PropTypes.func.isRequired,
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

const mapDispatchToProps = {
  loadHistoryConnect: loadHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
