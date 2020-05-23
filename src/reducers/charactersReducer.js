export default (
  state = {
    info: {},
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CHARACTERS":
      return action.payload
    default:
      return state
  }
}
