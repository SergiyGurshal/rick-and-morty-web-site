import { SET_CHARACTERS_ID, SET_MODAL_VISIBILITY } from '../types'

export const modalReducer = (state = { active: false, characterID: 0 }, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return { ...state, active: action.payload }
    case SET_CHARACTERS_ID:
      return { ...state, characterID: action.payload }
    default:
      return state
  }
}
