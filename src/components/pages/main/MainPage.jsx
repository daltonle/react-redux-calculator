import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Keypad from '../../organisms/keypad'
import Screen from '../../organisms/screen'

import styles from './MainPage.module.scss'

const MainPage = () => (
  <div className={styles.main}>
    <Screen />
    <Keypad />
  </div>
)

MainPage.propTypes = {

}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
