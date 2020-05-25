import React, { useState } from "react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"

const DateSelect = () => {
  const [currentRange, setNewRange] = useState([])
  const onChange = (event, data) => {
    return setNewRange(data.value)
  }

  if (currentRange) {
    currentRange.map((date) => date.toISOString().slice(0, 10))
  }

  return <SemanticDatepicker onChange={onChange} type="range" />
}

export default DateSelect
