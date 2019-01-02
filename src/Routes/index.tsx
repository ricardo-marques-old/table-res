import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { HomeRoute } from "./Home"
import { ReservasRoutes } from "./Reservas/Routes"

export function Router() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={HomeRoute} />
        <ReservasRoutes />
      </Switch>
    </BrowserRouter>
  )
}
