export default (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_SPECIES":
      return {
        ...state,
        term: action.payload,
      }
    case "SEARCH_STATUS":
      return {
        ...state,
        status: action.payload,
      }
    default:
      return state
  }
}
