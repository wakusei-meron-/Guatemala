import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from '../actions'
import Images from '../components/Images'

class SearchImage extends Component {
  render() {
    let input
    const { dispatch, keyword, images } = this.props

    return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(fetchImages(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          検索
        </button>
        <p>検索ワード：{keyword}</p>
      </form>
      <Images images={images} />
    </div>
  )
  }
}
const mapStateToProps = (state) => ({
    keyword: state.images.keyword,
    images: state.images.images
  })
AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
