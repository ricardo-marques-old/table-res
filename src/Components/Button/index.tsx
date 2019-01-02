import * as React from "react"

import _Button from "@material-ui/core/Button"

interface ButtonProps {
  label: string
  type?: "primary" | "secondary"
  fullWidth?: boolean
}

export function Button({
  label,
  type = "primary",
  fullWidth = false
}: ButtonProps) {
  return (
    <_Button
      variant="contained"
      color={type}
      style={{ width: fullWidth ? "100%" : "initial" }}
    >
      {label}
    </_Button>
  )
}
