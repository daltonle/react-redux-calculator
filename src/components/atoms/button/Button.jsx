import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const Button = props => {
  const {
    type,
    handleClick,
    className,
    children,
  } = props

  const classname = `${styles.button} ${className}`

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={handleClick} className={classname}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  className: '',
}

export default Button
