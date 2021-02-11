import { FETCH_FILTERED_CHARACTERS } from '../types'
import errorImage from '../../img/error_image.jpg'

const getFilteredCharacters = (characters) => {
  return {
    type: FETCH_FILTERED_CHARACTERS,
    payload: characters,
  }
}

export default function getFilteredCharactersFromServer(inputValue, searchParametr) {
  return async (dispatch, getState) => {
    const currentPage = getState().pageCounterReducer.charactersPage
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&${searchParametr}=${inputValue}`
      )
      const json = await response.json()
      dispatch(getFilteredCharacters(json.results))
    } catch {
      dispatch(getFilteredCharacters([{ image: errorImage, name: 'Wrong paremets' }]))
    }
  }
}
