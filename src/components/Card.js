import React from 'react';
import Img from './Img'

function Card({imgSrc}) {
  return (
    <div className="Card">
        <Img altText='qr-code' imgClass='QRcode' imgSrc={imgSrc} />
        <div className="Cardbody">
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
  )
}

export default Card