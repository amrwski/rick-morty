import rickAndMorty from "../apis/rickAndMorty"

export const fetchCharacters = () => async (dispatch) => {
  const response = await rickAndMorty.get("/character")

  dispatch({ type: "FETCH_CHARACTERS", payload: response.data.results })
}

export const selectCharacter = (character) => {
  return {
    type: "CHARACTER_SELECTED",
    payload: character,
  }
}
