export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_EPISODES":
      return action.payload
    default:
      return state
  }
}
