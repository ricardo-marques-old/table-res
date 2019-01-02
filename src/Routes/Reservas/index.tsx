import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import Add from "@material-ui/icons/Add"
import Edit from "@material-ui/icons/Edit"

import TablesDB from "DB/Tables"

import { RouteChoice } from "Components/Navigation/RouteChoice"

import { DefaultLayout } from "Layouts/Default"

export function ReservasIndex(props: RouteComponentProps) {
  return (
    <DefaultLayout
      title="Reservas"
      breadcrumbs={[{ label: "Reservas", linkTo: "/reservas" }]}
    >
      <RouteChoice
        image={<Add />}
        text="Criar reserva"
        linkTo={`/reservas/criar`}
      />
      <RouteChoice
        image={<Edit />}
        text="Gerir reservas"
        linkTo={`/reservas/gerir`}
      />
    </DefaultLayout>
  )
}
