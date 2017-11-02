import React from 'react'
import { Link } from 'react-router'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.myColor = this.myColor.bind(this)
    this.state = { active1: null, active2: null }
  }

  toggle(position) {
    if (this.state.active1 === position) {
      this.setState({active1 : null})
    } else {
      this.setState({active1 : position})
    }
  }

  myColor(position) {
    if (this.state.active1 === position) {
      return "rgba(64, 114, 180, 0.75)";
    }
    return "";
  }

  toggle1(position) {
    if (this.state.active2 === position) {
      this.setState({active2 : null})
    } else {
      this.setState({active2 : position})
    }
  }

  myColor1(position) {
    if (this.state.active2 === position) {
      return "rgba(64, 114, 180, 0.75)";
    }
    return "";
  }

  render() {
    return (
      <div className={[styles.smallerWidth]}>
        <div className={[styles.centerTextArea]}>
          <StyledText text='Delivery Options' size='regular' color='blue' />
          <br />
          <br />
          <div>
            <div className={[styles.optionBox]} style={{background: this.myColor(0)}} onClick={() => {this.toggle(0)}}>
              <StyledText text='Standard Shipping (+$0)' size='small' color='gray' />
            </div>
            <div className={[styles.optionBox]} style={{background: this.myColor(1)}} onClick={() => {this.toggle(1)}}>
              <StyledText text='Two-Day Shipping (+$10)' size='small' color='gray' />
            </div>
          </div>
          <br />
          <br />
          <StyledText text='Installation Options' size='regular' color='blue' />
          <br />
          <br />
          <div>
            <div className={[styles.optionBox]} style={{background: this.myColor1(0)}} onClick={() => {this.toggle1(0)}}>
              <StyledText text='Manual Installation (+$0)' size='small' color='gray' />
            </div>
            <div className={[styles.optionBox]} style={{background: this.myColor1(1)}} onClick={() => {this.toggle1(1)}}>
              <StyledText text='Professional Installation (+$20)' size='small' color='gray' />
            </div>
          </div>
          <br />
          <br />
          <StyledText text='Order Total: ' size='regular' color='blue' />
          <StyledText text='$185' size='regular' color='gray' />
          <br />
          <br />
          <div className={[styles.costOverview]}>
            <div className={[styles.costChild]}>
              <StyledText text='Microwave' size='small' color='gray' />
              <StyledText text='($55)' size='small' color='gray' />
            </div>
            <div className={[styles.costChild]}>
              <StyledText text='Refrigerator' size='small' color='gray' />
              <StyledText text='($100)' size='small' color='gray' />
            </div>
            <div className={[styles.costChild]}>
              <StyledText text='Two-Day Shipping' size='small' color='gray' />
              <StyledText text='($10)' size='small' color='gray' />
            </div>
            <div className={[styles.costChild]}>
              <StyledText text='Professional Installation' size='small' color='gray' />
              <StyledText text='($20)' size='small' color='gray' />
            </div>
          </div>
          <Link to='/finished'>
            <button className={[styles.proceedButton]}>Confirm Order</button>
          </Link>
        </div>
      </div>
    )
  }
}
