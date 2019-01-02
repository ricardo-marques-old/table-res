import * as React from "react"
import Typography from "@material-ui/core/Typography"
import { checkPropTypes } from "prop-types"
import { CSSProperties } from "jss/css"

interface TextProps {
  size?: "large" | "medium" | "small"
  variant?: "header" | "text" | "note"
  type?: "primary" | "default"
  style?: "bold" | "italic" | "default"
  align?: "center" | "initial"
  children: React.ReactNode
}

export function Text(props: TextProps) {
  return (
    <Typography
      variant={getVariantFromVariant(props.variant || "text")}
      style={getStyleFromProps(props)}
      color={props.type || "default"}
    >
      {props.children}
    </Typography>
  )
}

function getVariantFromVariant(variant: TextProps["variant"]) {
  if (variant === "header") {
    return "h3"
  }
}

function getStyleFromProps(props: TextProps) {
  let fontSize: React.CSSProperties["fontSize"] = "initial"

  if (props.size === "large") {
    fontSize = "2em"
  } else if (props.size === "medium" || props.size == null) {
    fontSize = "1.2em"
  } else if (props.size === "small") {
    fontSize = "0.9em"
  }

  let fontWeight: React.CSSProperties["fontWeight"] = "normal"

  if (props.style === "bold") {
    fontWeight = "bold"
  }

  return {
    fontSize,
    fontWeight
  }
}
