import * as types from '../constants/ActionTypes'

const initialState = {
  keyword: "",
  images: [],
  showModal: false,
  selectedImage: {}
}

const images = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_IMAGES:
      return {
        ...state,
        keyword: action.keyword
      }
    case types.RECEIVE_IMAGES:
      return {
        ...state,
        images: action.images
      }
    case types.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        selectedImage: {}
      }
    case types.IMAGE_CLICK:
      return {
        ...state,
        showModal: true,
        selectedImage: action.selectedImage
      }
    default:
      return state
  }
}
export default images
