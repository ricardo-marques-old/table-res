import React from "react"
import { Route } from "react-router-dom"

import { ReservasIndex } from "./index"
import { ReservasCriar } from "./Criar"
import { ReservasGerir } from "./Gerir"

export function ReservasRoutes() {
  return (
    <>
      <Route path="/reservas" exact component={ReservasIndex} />
      <Route path="/reservas/criar" exact component={ReservasCriar} />
      <Route path="/reservas/gerir" exact component={ReservasGerir} />
    </>
  )
}
