import React from 'react'
import { Link } from 'react-router'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Finished extends React.Component {
  render() {
    return (
      <div className={[styles.centerTextArea]}>
        <StyledText text="Thank you for choosing Project Sibi!" size="regular" color="blue"/>
        <br />
        <br />
        <br />
        <StyledText text="Your items will be dispatched soon..." size="small" color="pearl"/>
        <br />
        <StyledText text="Check your email for the reciept and tracking number." size="small" color="pearl"/>
        <br />
        <Link to='/'>
          <button className={[styles.proceedButton]}>Finished</button>
        </Link>
      </div>
    )
  }
}
