import React from 'react'

const RoomShowTile = (props) => {
  return(
    <div id="show">

      <div className="room-details">

      <img src={ props.roomData.picture } alt="Room Photo" />

      <p>Description: { props.roomData.description }</p>
      <p>Traps: { props.roomData.traps }</p>
      <p>Monsters: { props.roomData.monsters }</p>
      <p>Treasure: { props.roomData.treasure }</p>

      </div>

  </div>
  )
}

export default RoomShowTile
