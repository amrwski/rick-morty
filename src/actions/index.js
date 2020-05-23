import rickAndMorty from "../apis/rickAndMorty"

export const fetchCharacters = (page) => async (dispatch) => {
  const response = await rickAndMorty.get(`/character?page=${page}`)

  dispatch({ type: "FETCH_CHARACTERS", payload: response.data })
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

export const searchSpecies = (term) => (dispatch) => {
  dispatch({
    type: "SEARCH_SPECIES",
    payload: term,
  })
}
