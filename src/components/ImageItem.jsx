import React from 'react'

const ImageItem = ({photo}) => {
    console.log(photo)
  return (
    <div>
        <img className='imageListImg' src={photo.urls.small} alt={photo.alt_description} />
      
    </div>
  )
}

export default ImageItem
