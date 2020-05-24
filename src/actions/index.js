import rickAndMorty from "../apis/rickAndMorty"

export const fetchCharacters = (page) => async (dispatch) => {
  const response = await rickAndMorty.get(`/character?page=${page}`)

  dispatch({ type: "FETCH_CHARACTERS", payload: response.data })
}
export const filterSpecies = (term) => async (dispatch) => {
  const response = await rickAndMorty.get(`/character?species=${term}`)

  dispatch({ type: "FILTER_SPECIES", payload: response.data })
}

export const filterStatus = (status) => async (dispatch) => {
  const response = await rickAndMorty.get(`/character?status=${status}`)

  dispatch({ type: "FILTER_STATUS", payload: response.data })
}

// COMBINED
// export const fetchCharacters = (page, term, status) => async (dispatch) => {
//   const speciesQuery = `?species=${term}`
//   const statusQuery = `?status=${status}`
//   let response
//   if (term && !status) {
//     response = await rickAndMorty.get(`/character?page=${page}${speciesQuery}`)
//     console.log(response.data.results)
//   } else if (!term && status) {
//     response = await rickAndMorty.get(`/character?page=${page}${statusQuery}`)
//     console.log(response.data.results)
//   } else if (!term && !status) {
//     response = await rickAndMorty.get(`/character?page=${page}`)
//     console.log(response.data.results)
//   }
//   dispatch({ type: "FETCH_CHARACTERS", payload: response.data })
// }

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
