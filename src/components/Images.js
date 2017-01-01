import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'

var Images = ({images, onImageClick }) => {
  return (
  <div>
    {images.map((image, i) =>
      <Col key={i} lg={3} md={4} sm={6} xs={12} style={{height: 235}}>
        <img key={image.imageID} src={image.url}
          style={{width: 235, height: 'auto'}}
          alt={image.old_tags[0]}
          onClick={() => onImageClick(image)} />
      </Col>
    )}
  </div>
)
}

Images.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired
}

export default Images
