import React from 'react'
import PropTypes from 'prop-types'

import styles from './KeypadButton.module.scss'

const KeypadButton = props => {
  const {
    type,
    color,
    handleClick,
    className,
    children,
  } = props

  const classname = `${styles.button} ${styles[color]} ${className}`

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={handleClick} className={classname}>
      {children}
    </button>
  )
}

KeypadButton.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

KeypadButton.defaultProps = {
  type: 'button',
  color: 'grey600',
  className: '',
}

export default KeypadButton
