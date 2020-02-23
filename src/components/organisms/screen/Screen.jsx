import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './Screen.module.scss'

const Screen = ({ expression, hasError }) => (
  <div className={`${styles.screen} ${hasError ? styles.error : ''}`}>
    {hasError ? 'Error' : expression}
  </div>
)

Screen.propTypes = {
  expression: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  expression: state.calculator.expression,
  hasError: state.calculator.hasError,
})

export default connect(mapStateToProps, {})(Screen)
