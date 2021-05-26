import React, { useEffect } from 'react'

import { Route, Switch, useHistory } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './utils/propsMapper'
import './App.scss'

function App (props) {
  const history = useHistory()
  return (
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
