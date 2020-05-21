import { combineReducers } from "redux"
import charactersReducer from "./charactersReducer"
import episodesReducer from "./episodesReducer"
import selectedCharacterReducer from "./selectedCharacterReducer"

export default combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  selectedCharacter: selectedCharacterReducer,
})
