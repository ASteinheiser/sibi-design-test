import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from '../containers/home'
import Layout from '../containers/layout'
import Confirmation from '../containers/confirmation'
import Finished from '../containers/finished'
import NotFound from '../components/not-found'

export default (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="confirmation" component={Confirmation} />
      <Route path="finished" component={Finished} />
    </Route>

    <Route path="*" status={404} component={NotFound} />
  </Route>
)
