import React from 'react'
import { findDOMNode } from 'react-dom'
import { Button, Modal, Panel, FormControl } from 'react-bootstrap'
import { close } from '../actions/ModalAction'
import { registerTags } from '../actions/ImageAction'

let HumanCheckModal = React.createClass({
  render(){
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
              style={{width:'100%', height: 'auto'}}
              alt={image.old_tags} />

            <Panel>
              <p>現在のタグ：{image.old_tags}</p>

              <form onSubmit={e => {
                  e.preventDefault()
                  let newTagsInput = findDOMNode(this.refs.newTags)
                  dispatch(registerTags(image, newTagsInput.value))
                }}>
                <p>割り当てるタグ (※カンマ区切りで複数割当可)</p>
                <FormControl type="text" ref="newTags"
                  style={{marginBottom: "16px"}}
                  />
                <Button type="submit">登録</Button>
              </form>
            </Panel>
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
