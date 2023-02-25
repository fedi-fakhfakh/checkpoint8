import React from 'react'

export default function Profile({fullName,imgSrc,bio,profession}) {
  return (
    <div>
        <img src={imgSrc} alt="" />
        <p></p>
        {fullName}
        <p></p>
        {bio}
        <p></p>
        {profession}
    </div>
  )
}
