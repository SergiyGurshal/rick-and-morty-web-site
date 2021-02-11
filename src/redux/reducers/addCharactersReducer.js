import { FETCH_CHARACTERS, FETCH_FILTERED_CHARACTERS } from '../types'

export const addCharactersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return [...action.payload]
    case FETCH_FILTERED_CHARACTERS:
      return [...action.payload]
    default:
      return state
  }
}
