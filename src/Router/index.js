/* import external modules */
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* import internal modules */
const LazyHomePage = lazy(() => import('../Pages/Home'))
const LazyUserZone = lazy(() => import('../Pages/UserZone'))

const Router = () => {

  return (
    <BrowserRouter>
     <Suspense fallback={<div>Loading..</div>}>
      <Switch>
        <Route exact path="/" component={LazyHomePage} />
        <Route exact path="/user-zone" component={LazyUserZone} />
      </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router