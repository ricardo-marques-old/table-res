import * as React from "react"

import _Card from "@material-ui/core/Card"
import _CardActions from "@material-ui/core/CardActions"
import _CardActionArea from "@material-ui/core/CardActionArea"
import _CardContent from "@material-ui/core/CardContent"
import { CSSProperties } from "jss/css"

interface CardProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export function Card(props: CardProps) {
  return (
    <_Card style={props.style}>
      <_CardActionArea>
        <_CardContent>{props.children}</_CardContent>
      </_CardActionArea>
    </_Card>
  )
}
