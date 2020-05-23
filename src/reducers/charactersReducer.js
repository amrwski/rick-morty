export default (
  state = {
    info: {},
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CHARACTERS":
    case "FILTER_CHARACTERS":
      return action.payload
    default:
      return state
  }
}
