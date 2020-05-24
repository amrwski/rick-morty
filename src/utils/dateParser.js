import { parse } from "fecha"

export const dateParser = (date) => {
  return parse(date, "isoDateTime").toDateString()
}
