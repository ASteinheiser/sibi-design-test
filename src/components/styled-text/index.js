import React, { PropTypes } from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const TEXT_SIZES = ['regular', 'large', 'small', 'billboard']
const TEXT_COLORS = ['white', 'gray', 'blue', 'black']

const propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(TEXT_SIZES).isRequired,
  color: PropTypes.oneOf(TEXT_COLORS),
  bold: PropTypes.boolean,
  hoverBlue: PropTypes.boolean,
  hoverRed: PropTypes.boolean,
  topAlign: PropTypes.boolean,
  className: PropTypes.string,
}

export default class StyledText extends React.Component {

  render() {
    const classes = classnames(
      styles[this.props.color],
      styles[this.props.size],
      { [`${styles.bold}`]: this.props.bold },
      { [`${styles.hoverBlue}`]: this.props.hoverBlue },
      { [`${styles.hoverRed}`]: this.props.hoverRed },
      { [`${styles.hoverUnderline}`]: this.props.hoverUnderline },
      { [`${styles.hoverRedOutline}`]: this.props.hoverRedOutline },
      { [`${styles.topAlign}`]: this.props.topAlign },
      this.props.className,
      styles.font
    )

    return (
      <span className={classes}>
        {this.props.text}
      </span>
    )
  }
}

StyledText.PropTypes = propTypes
