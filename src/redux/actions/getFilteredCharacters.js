import { FETCH_FILTERED_CHARACTERS } from '../types'

const getFilteredCharacters = (characters) => {
  return {
    type: FETCH_FILTERED_CHARACTERS,
    payload: characters,
  }
}

export default function getFilteredCharactersFromServer(inputValue, searchParametr) {
  return async (dispatch, getState) => {
    try {
      const currentPage = getState().pageCounterReducer.charactersPage
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&${searchParametr}=${inputValue}`
      )
      const json = await response.json()
      dispatch(getFilteredCharacters(json.results))
    } catch {
      alert('Wrong parametrs')
    }
  }
}
