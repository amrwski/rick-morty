import React, { useState } from "react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"

const DateSelect = () => {
  const [currentRange, setNewRange] = useState([])
  const onChange = (event, data) => {
    return setNewRange(data.value)
  }

  let startDate
  let endDate
  if (currentRange[0]) {
    startDate = currentRange[0].toISOString().slice(0, 10)
    console.log(startDate)
  }
  if (currentRange[1]) {
    endDate = currentRange[1].toISOString().slice(0, 10)
    console.log(endDate)
  }

  return <SemanticDatepicker onChange={onChange} type="range" />
}

export default DateSelect
