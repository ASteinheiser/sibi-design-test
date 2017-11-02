import React from 'react'
import { Link } from 'react-router'

import ItemCard from '../components/item-card'
import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { appliances: null }
  }

  render() {
    self = this;

    function handleSubmit(e) {
      e.preventDefault();
      var jsx = (
        <div>
          <div className={[styles.outerContainer]}>
            <ItemCard text="WASHER" />
            <ItemCard text="DRYER" />
            <ItemCard text="REFRIGERATOR" />
            <ItemCard text="DISHWASHER" />
            <ItemCard text="OVEN" />
            <ItemCard text="MICROWAVE" />
          </div>
          <Link to='/confirmation'>
            <button className={[styles.proceedButton]}>Continue</button>
          </Link>
        </div>
      )
      self.setState({appliances: jsx})
    }

    return (
      <div className={[styles.centerTextArea]}>
        <StyledText text="Welcome to Project Sibi" size="regular" color="blue"/>

        <br />
        <input placeholder="Enter Property Address" className={[styles.textBox]}/>
        <button onClick={handleSubmit} className={[styles.acceptButton]}>Submit</button>

        <br />
        {this.state.appliances}
      </div>
    )
  }
}
