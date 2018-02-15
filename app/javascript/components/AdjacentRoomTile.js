import React from 'react'
import { Link } from 'react-router'

const AdjacentRoomTile = (props) => {
  // console.log(props)

  return(

    <Link to={`/campaigns/${props.campaign_id}/dungeons/${props.dungeon_id}/rooms/${props.id}`}>
      <span className='adjacent-room-tile'>
        <img src={ props.picture } alt="pc photo" />
      </span>
    </Link>

  )
}

export default AdjacentRoomTile
