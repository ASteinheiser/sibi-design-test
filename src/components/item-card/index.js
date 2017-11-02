import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  text: PropTypes.string.isRequired,
}

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bgColor: 'rgba(255, 255, 255, 0.74)' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.bgColor)
    if(this.state.bgColor === 'rgba(255, 255, 255, 0.74)') {
      this.setState({ bgColor: 'rgba(0, 152, 34, 0.59)'})
    } else {
      this.setState({ bgColor: 'rgba(255, 255, 255, 0.74)' })
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} style={{backgroundColor:this.state.bgColor}} className={[styles.appContainer]}>
        {this.props.text}
      </button>
    )
  }
}

ItemCard.PropTypes = propTypes
