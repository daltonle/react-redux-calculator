import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { buttonList } from './buttonList'
import KeypadButton from '../../atoms/button'
import { addKey, equals, clear } from '../../../state/ducks/calculator/actions'

import styles from './Keypad.module.scss'

class Keypad extends Component {
  handleKeypadButtonClicked = key => {
    const { addKeyConnect, equalsConnect, clearConnect } = this.props
    if (key === '=') {
      equalsConnect()
    } else if (key === 'C') {
      clearConnect()
    } else {
      addKeyConnect(key)
    }
  }

  renderKeypadButtons = () => (
    buttonList.map(({ name, color, length }) => {
      const classname = `${styles.keypadButtonContainer} ${length === 2 ? styles.length2 : ''}`
      return (
        <div key={name} className={classname}>
          <KeypadButton
            color={color}
            handleClick={() => this.handleKeypadButtonClicked(name)}
            className={styles.keypadButton}
          >
            {(() => {
              if (name === 'negate') return '±'
              if (name === '/') return '÷'
              if (name === '*') return '×'
              if (name === '-') return '−'
              if (name === '+') return '+'
              return name
            })()}
          </KeypadButton>
        </div>
      )
    })
  )

  render() {
    return (
      <div className={styles.keypad}>
        {this.renderKeypadButtons()}
      </div>
    )
  }
}

Keypad.propTypes = {
  addKeyConnect: PropTypes.func.isRequired,
  equalsConnect: PropTypes.func.isRequired,
  clearConnect: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  addKeyConnect: addKey,
  equalsConnect: equals,
  clearConnect: clear,
}

export default connect(mapStateToProps, mapDispatchToProps)(Keypad)
