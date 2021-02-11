import { SET_MODAL_VISIBILITY } from '../types'

const setModalVisibility = (visibity) => {
  return {
    type: SET_MODAL_VISIBILITY,
    payload: visibity,
  }
}

export default setModalVisibility
