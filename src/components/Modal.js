import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap'
import { close } from '../actions/ModalAction'
import { registerTags } from '../actions/ImageAction'

let HumanCheckModal = React.createClass({
  render(){
    let newTagsInput
    const { show, dispatch, image } = this.props
    return (
        <Modal show={ show } onHide={() => dispatch(close())}>
        <Modal.Header closeButton>
        <Modal.Title>画像タグの修正</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { (() => {return image ?
          <div>
          <img src={image.url}
          style={{width:200, height:200}}
          alt={image.old_tags} />

          <p>現在のタグ：{image.old_tags}</p>

          <form onSubmit={e => {
            e.preventDefault()
            dispatch(registerTags(image, newTagsInput.value))
          }}>
          <p>割り当てるタグ</p>
            <p>※カンマ区切りで複数割当可</p>
          <input ref={node => {
            newTagsInput = node
          }} />
          </form>
          <Button onClick={() => dispatch(registerTags(image, newTagsInput.value))}>登録</Button>
          </div>
          : null})()
        }
        </Modal.Body>
      </Modal>
    )},
    propTypes:{
      show: React.PropTypes.bool.isRequired,
        dispatch: React.PropTypes.func.isRequired,
        image: React.PropTypes.object
    }
});

export default HumanCheckModal
