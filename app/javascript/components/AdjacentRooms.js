import React from 'react'
import AdjacentRoomTile from './AdjacentRoomTile'

const AdjacentRooms = (props) => {

  if (props.length > 0) {


    let allAdjacentRooms = props.rooms.map((room) => {
      return (
        <p>room.description</p>
      )
    })

    return(

      <div>
      <p>"This is where the adjacent room links should go"</p>
      {allAdjacentRooms}
      </div>

    )

  }
}
export default AdjacentRooms
