import { GET_CHARACTERS_FILTER, SET_CHARACTERS_FILTER } from '../types'

export const filterReducer = (state = { inputValue: '', type: '' }, action) => {
  switch (action.type) {
    case SET_CHARACTERS_FILTER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
