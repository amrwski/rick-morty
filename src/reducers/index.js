import { combineReducers } from "redux"
import charactersReducer from "./charactersReducer"
import episodesReducer from "./episodesReducer"
import selectedCharacterReducer from "./selectedCharacterReducer"
import searchReducer from "./searchReducer"

export default combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  selectedCharacter: selectedCharacterReducer,
  searchTerm: searchReducer,
})
