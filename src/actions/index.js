import rickAndMorty from "../apis/rickAndMorty"

export const fetchCharacters = () => async (dispatch) => {
  const response = await rickAndMorty.get("/character")

  dispatch({ type: "FETCH_CHARACTERS", payload: response.data.results })
}

export const fetchEpisodes = (episodeIds) => async (dispatch) => {
  const response = await rickAndMorty.get(`/episode/${episodeIds}`)

  dispatch({ type: "FETCH_EPISODES", payload: response.data })
}

export const selectCharacter = (character) => {
  return {
    type: "CHARACTER_SELECTED",
    payload: character,
  }
}
