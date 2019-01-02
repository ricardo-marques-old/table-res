import * as React from "react"

import _Paper from "@material-ui/core/Paper"

interface PaperProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export function Paper(props: PaperProps) {
  return (
    <_Paper style={{ padding: 20, ...props.style }}>{props.children}</_Paper>
  )
}
