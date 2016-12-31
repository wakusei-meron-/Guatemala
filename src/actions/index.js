let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const requestImages = (keyword) => ({
  type: 'REQUEST_IMAGES',
  keyword: keyword,
})

const receiveImages = (json) => ({
  type: 'RECEIVE_IMAGES',
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
