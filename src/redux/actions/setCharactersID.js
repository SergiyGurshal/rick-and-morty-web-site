import { SET_CHARACTERS_ID } from '../types'

const setCharactersID = (id) => {
  return {
    type: SET_CHARACTERS_ID,
    payload: id,
  }
}

export default setCharactersID
