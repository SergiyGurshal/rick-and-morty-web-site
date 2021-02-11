import { CHARACTER_PAGE, DECREMENT_CHARACTER_PAGE, INCREMENT_CHARACTER_PAGE, RESET_CHARACTER_PAGE } from '../types'

export const pageCounterReducer = (state = { charactersPage: 1 }, action) => {
  switch (action.type) {
    case CHARACTER_PAGE:
      return state
    case INCREMENT_CHARACTER_PAGE:
      if (state.charactersPage < 35) return { ...state, charactersPage: state.charactersPage + 1 }
      return state
    case DECREMENT_CHARACTER_PAGE:
      if (state.charactersPage > 1) return { ...state, charactersPage: state.charactersPage - 1 }
      return state
    case RESET_CHARACTER_PAGE:
      return { ...state, charactersPage: 1 }
    default:
      return state
  }
}
