import rickAndMorty from "../apis/rickAndMorty"

export const fetchCharacters = (page, term, status) => async (dispatch) => {
  const searchQuery = `/character/?page=${page || "1"}&species=${term || ""}&status=${status || ""}`
  const response = await rickAndMorty.get(searchQuery)
  dispatch({ type: "FETCH_CHARACTERS", payload: response.data })
}

export const fetchCharacter = (id) => async (dispatch) => {
  const response = await rickAndMorty.get(`/character/${id}`)

  dispatch({ type: "FETCH_CHARACTER", payload: response.data })
}

export const fetchEpisodes = (episodeIds) => async (dispatch) => {
  const response = await rickAndMorty.get(`/episode/${episodeIds}`)

  dispatch({ type: "FETCH_EPISODES", payload: response.data })
}

export const searchSpecies = (term) => {
  return {
    type: "SEARCH_SPECIES",
    payload: term,
  }
}

export const searchStatus = (status) => {
  return {
    type: "SEARCH_STATUS",
    payload: status,
  }
}

export const filterByDate = (startDate, endDate) => {
  return {
    type: "FILTER_DATE",
    payload: [startDate, endDate],
  }
}
