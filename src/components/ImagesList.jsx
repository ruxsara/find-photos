import React from 'react'
import ImageItem from './ImageItem'

const ImagesList = ({imagesPlaceholder}) => {
  return (
    <div className='imageList'>
      {imagesPlaceholder.map((image,index)=>{
        return <ImageItem key={index} photo={image}/>


      }
      )}
    </div>
  )
}

export default ImagesList
