import { combineReducers } from "redux"
import charactersReducer from "./charactersReducer"
import characterReducer from "./characterReducer"
import episodesReducer from "./episodesReducer"
import searchReducer from "./searchReducer"

export default combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  searchTerm: searchReducer,
  character: characterReducer,
})
