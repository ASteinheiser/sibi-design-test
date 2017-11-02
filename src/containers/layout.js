import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class Layout extends React.Component {
  render() {
    return (
      <div className={[styles.window]}>
        <div className={[styles.innerWidth]}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = propTypes
