import React, { PropTypes } from 'react'

var Images = ({images}) => {
  return (
  <ul>
    {images.map((image, i) =>
      <li key={i}>
        <img key={image.imageID} src={image.url}
          style={{width:200, height:200}}
          alt={image.old_tags[0]} />
      </li>
    )}
  </ul>
)
}

Images.propTypes = {
  images: PropTypes.array.isRequired
}

export default Images
