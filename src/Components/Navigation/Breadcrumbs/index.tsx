import * as React from "react"

import { Text } from "Components/Text"

import { Link } from "../Link"

export interface BreadcrumbsProps {
  paths: Array<{ label: string; linkTo: string }>
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <Text style="bold" size="large" type="primary">
      <Link
        to={{ pathname: "/" }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Home
      </Link>
      {props.paths.map(path => (
        <React.Fragment key={path.linkTo}>
          {" / "}
          <Link
            to={path.linkTo}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {path.label}
          </Link>
        </React.Fragment>
      ))}
    </Text>
  )
}
