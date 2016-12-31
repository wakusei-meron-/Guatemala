const images = (state = {keyword: "", images: []}, action) => {
  switch (action.type) {
    case 'REQUEST_IMAGES':
      return {
        ...state,
        keyword: action.keyword,
      }
    case 'RECEIVE_IMAGES':
      return {
        ...state,
        images: action.images
      }
    default:
      return state
  }
}
export default images
