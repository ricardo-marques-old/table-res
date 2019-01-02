import * as React from "react"
import { Link as _Link, LinkProps } from "react-router-dom"

export function Link(props: LinkProps) {
  return (
    <_Link to={props.to} style={props.style}>
      {props.children}
    </_Link>
  )
}
