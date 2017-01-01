import * as types from '../constants/ActionTypes'

const host = 'http://localhost:5000'

export const handleImageClick = (image) => ({
  type: types.IMAGE_CLICK,
  selectedImage: image
})

const registeredTags = () => ({
  type: types.REGISTERED_TAGS
})

const requestTags = () => ({
  type: types.REGISTER_TAGS
})

export const registerTags = (image, newTagsString) => dispatch => {
  dispatch(requestTags())
  image.new_tags = newTagsString.split(',')
  image.changed = true
  let images =　[image]
  const path = '/images/human_checked'
  const url = host + path
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Method': 'PUT'
    },
    body: JSON.stringify(images)
  }).then(res => dispatch(registeredTags))
}

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
  const path = '/images/candidates?keyword=' + keyword
  const url = host + path
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveImages(json)))
}
