import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImages, handleImageClick } from '../actions'
import Images from '../components/Images'
import Modal from '../components/Modal'
//import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap'


class SearchImage extends Component {
  render() {
    let input
    const { dispatch, keyword, images, showModal } = this.props

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
      <Images images={images} onImageClick={
          (image) => dispatch(handleImageClick(image))
        }/>
      <Modal show={showModal} dispatch={dispatch}/>
      </div>
  )
  }
}
const mapStateToProps = (state) => ({
    keyword: state.images.keyword,
    images: state.images.images,
    showModal: state.images.showModal
  })
SearchImage = connect(mapStateToProps)(SearchImage)

export default SearchImage
