import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './Screen.module.scss'

const Screen = ({ expression, result }) => (
  <div className={styles.screen}>
    {result === undefined ? expression : result}
  </div>
)

Screen.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.number,
}

Screen.defaultProps = {
  result: undefined,
}

const mapStateToProps = (state) => ({
  expression: state.calculator.expression,
  result: state.calculator.result,
})

export default connect(mapStateToProps, {})(Screen)
