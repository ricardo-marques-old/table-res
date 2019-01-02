import * as React from "react"

import { Card } from "Components/Card"
import { Icon } from "Components/Icon"
import { Text } from "Components/Text"

import { Link } from "../Link"

interface RouteChoiceProps {
  image: React.ReactNode
  text: string
  linkTo: string
}

export function RouteChoice(props: RouteChoiceProps) {
  return (
    <Link to={props.linkTo}>
      <Card
        style={{
          textAlign: "center",
          boxSizing: "border-box",
          width: "20%",
          display: "inline-block",
          marginRight: 20
        }}
      >
        <div style={{ padding: 10 }}>
          <Icon size="large">{props.image}</Icon>
          <div style={{ padding: 10 }} />
          <Text size="large" type="primary" style="bold">
            {props.text}
          </Text>
        </div>
      </Card>
    </Link>
  )
}
