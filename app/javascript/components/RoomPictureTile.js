import React from 'react'


const RoomPictureTile = (props) => {
  return(

    <div className= "current-room-tile">

      <img src={ props.picture } alt="floor plan pic" />

    </div>

  )
}

export default RoomPictureTile
