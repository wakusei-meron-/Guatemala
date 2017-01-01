import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { fetchImages, handleImageClick } from '../actions/ImageAction'
import Images from '../components/Images'
import Modal from '../components/Modal'
import { Col, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'

class SearchImage extends Component {
  render() {
    const { dispatch, keyword, images, showModal, selectedImage } = this.props

    return (
      <Col md={12}>
        <form onSubmit={e => {
            e.preventDefault()
            let input = findDOMNode(this.refs.searchWord)
            if (!input.value.trim()) {
              return
            }
            dispatch(fetchImages(input.value))
            input.value = ''
          }}>
          <FormGroup>
            <InputGroup>

              <FormControl type="text" ref="searchWord" />
              <InputGroup.Button>
                <Button type="submit">検索</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
        <p>検索ワード：{keyword}</p>
        <Images images={images} onImageClick={
            (image) => dispatch(handleImageClick(image))
        } />
        <Modal show={showModal} dispatch={dispatch} image={selectedImage}/>
      </Col>
    )
  }
}
const mapStateToProps = (state) => ({
  keyword: state.images.keyword,
  images: state.images.images,
  showModal: state.images.showModal,
  selectedImage: state.images.selectedImage
})

SearchImage = connect(mapStateToProps)(SearchImage)

export default SearchImage
