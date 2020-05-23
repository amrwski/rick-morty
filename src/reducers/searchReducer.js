export default (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_SPECIES":
      return {
        ...state,
        term: action.payload,
      }
    default:
      return state
  }
}
