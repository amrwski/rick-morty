export default (
  state = {
    info: {},
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CHARACTERS":
    case "FILTER_SPECIES":
    case "FILTER_STATUS":
      return action.payload
    default:
      return state
  }
}
