import { SET_CHARACTERS_FILTER } from '../types'

const getCharactersFilter = (filter) => {
  return {
    type: SET_CHARACTERS_FILTER,
    payload: filter,
  }
}

export default getCharactersFilter
