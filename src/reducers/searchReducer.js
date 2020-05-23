import _ from "lodash"

export default (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_SPECIES":
      // const { payload } = action
      // state = _.filter(state, (el) => {
      //   el.species.toLowerCase().includes(payload.toLowerCase())
      //   return state
      return {
        ...state,
        term: action.payload,
      }
    default:
      return state
  }
}
