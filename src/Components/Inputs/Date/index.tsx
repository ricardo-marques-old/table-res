import * as React from "react"
import TextField from "@material-ui/core/TextField"

interface DateInputProps {
  label: string
  onChange: (newDate: string) => void
  value: string
}

export function DateInput(props: DateInputProps) {
  return (
    <TextField
      type="date"
      label={props.label}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  )
}
