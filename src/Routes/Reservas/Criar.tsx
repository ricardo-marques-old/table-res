import * as React from "react"

import { DefaultLayout } from "Layouts/Default"

export function ReservasCriar() {
  return (
    <DefaultLayout
      title="Reservas"
      breadcrumbs={[
        { label: "Reservas", linkTo: "/reservas" },
        { label: "Criar", linkTo: "/reservas/criar" }
      ]}
    >
      Reservas criar
    </DefaultLayout>
  )
}
