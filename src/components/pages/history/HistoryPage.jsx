import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as ChevronLeftIcon } from '../../../assets/icons/chevron-left.svg'
import { loadHistory } from '../../../state/ducks/history/actions'

import styles from './HistoryPage.module.scss'

class HistoryPage extends Component {
  componentDidMount = () => {
    const { history, loadHistoryConnect } = this.props
    if (history.length === 0) loadHistoryConnect()
  }

  renderHistoryEntries = () => {
    const { history } = this.props
    return history.map(({ expression, result }, idx) => (
      <div className={styles.entry} key={idx}>
        <span>{expression}</span>
        <span> = {result}</span>
      </div>
    ))
  }

  render() {
    return (
      <div className={styles.page}>
        <header>
          <Link to="/"><ChevronLeftIcon className={styles.icon} /></Link>
          <h4>History</h4>
        </header>
        <div className={styles.entries}>
          {this.renderHistoryEntries()}
        </div>
      </div>
    )
  }
}

HistoryPage.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string,
      result: PropTypes.number,
    }),
  ).isRequired,
  loadHistoryConnect: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  history: state.history.entries,
})

const mapDispatchToProps = {
  loadHistoryConnect: loadHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)
