import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.button}>
        <NavLink to='/form'>FORM</NavLink>
    </div>
  )
}

export default Main