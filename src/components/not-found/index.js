import React from 'react'

import StyledText from '../styled-text'

export default class NotFound extends React.Component {

  componentWillMount() {
    window.location = '/'
  }

  render() {
    return <StyledText text="Page Not Found. Redirecting..." size="billboard" color="gray" />
  }
}
