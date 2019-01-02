import * as React from "react"

import { Paper } from "Components/Paper"
import { Text } from "Components/Text"
import {
  Breadcrumbs,
  BreadcrumbsProps
} from "Components/Navigation/Breadcrumbs"

interface DefaultLayoutProps {
  title: string
  children: React.ReactNode
  breadcrumbs?: BreadcrumbsProps["paths"]
}

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <Paper style={{ width: 800, margin: "20px auto" }}>
      <Breadcrumbs paths={props.breadcrumbs || []} />
      <div style={{ marginTop: 10 }}>{props.children}</div>
    </Paper>
  )
}
