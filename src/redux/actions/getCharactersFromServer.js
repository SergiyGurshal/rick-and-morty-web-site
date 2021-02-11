import { FETCH_CHARACTERS } from '../types'

const getCharacters = (characters) => {
  return {
    type: FETCH_CHARACTERS,
    payload: characters,
  }
}

export default function getCharactersFromServer() {
  return async (dispatch, getState) => {
    const currentPage = getState().pageCounterReducer.charactersPage

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    const json = await response.json()
    dispatch(getCharacters(json.results))
  }
}
