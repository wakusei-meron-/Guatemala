import * as types from '../constants/ActionTypes'

export const handleImageClick = (image) => ({
  type: types.IMAGE_CLICK,
  selectedImage: image
})

const requestImages = (keyword) => ({
  type: types.REQUEST_IMAGES,
  keyword: keyword,
})

const receiveImages = (json) => ({
  type: types.RECEIVE_IMAGES,
  images: json
})

export const fetchImages = keyword => dispatch => {
  dispatch(requestImages(keyword))
  const host = 'http://localhost:5000'
  const path = '/images/candidates?keyword=' + keyword
  const url = host + path
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveImages(json)))
}
