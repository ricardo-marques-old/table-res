import * as React from "react"
import SvgIcon from "@material-ui/core/SvgIcon"

interface IconProps {
  children: React.ReactNode
  size?: "large" | "medium"
}

export function Icon({ children, size = "medium" }: IconProps) {
  return (
    <SvgIcon color="primary" style={getStyleFromSize(size)}>
      {children}
    </SvgIcon>
  )
}

function getStyleFromSize(size: IconProps["size"]) {
  if (size === "large") {
    return {
      fontSize: "4em"
    }
  } else if (size === "medium") {
    return {
      fontSize: "1em"
    }
  }
}
