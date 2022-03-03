import React from 'react'

function Img({altText, imgSrc, imgClass}) {
  return (
    <img alt={altText} src={imgSrc} className={`imgFluid ${imgClass}`} />
  )
}

export default Img