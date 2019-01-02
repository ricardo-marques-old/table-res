import * as React from "react"
import { EventNote } from "@material-ui/icons"

import { RouteChoice } from "Components/Navigation/RouteChoice"

import { DefaultLayout } from "Layouts/Default"

export function HomeRoute() {
  return (
    <DefaultLayout title="Home">
      <RouteChoice image={<EventNote />} text="Reservas" linkTo="/reservas" />
    </DefaultLayout>
  )
}
