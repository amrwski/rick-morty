import React, { useState } from "react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"

const DateSelect = () => {
  const [currentRange, setNewRange] = useState([])
  const onChange = (event, data) => {
    console.log(data.value)
    return setNewRange(data.value)
  }

  return <SemanticDatepicker onChange={onChange} type="range" />
}

export default DateSelect
