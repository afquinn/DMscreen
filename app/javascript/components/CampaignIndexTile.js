import React from 'react'
import PcThumb from './PcThumb'
import { Link } from 'react-router'


const CampaignIndexTile = (props) => {

  let pcComponents = props.pcs.map((pc) => {
    return (
      <div className="campaign-player-thumbs">
        <PcThumb
          key = {pc.id}
          name = {pc.name}
          level = {pc.level}
          character_class = {pc.character_class}
          avatar = {pc.avatar}
        />
      </div>
    )
  })


  return(

    <div id="campaign-tile">
      <div className="campaign-show-tile">
        <div className="campaign-tile-name">
          <h2>{props.name}</h2>
        </div>

        <div className="pc-show-tile-component">
          <p> Description: {props.description} </p>
        </div>

        <div className="pc-show-tile-component">
          <p> Players: </p>
          {pcComponents}
        </div>

        <div className="campaign-dungeon-link">
          <Link to={`/campaigns/${props.id}/dungeons/${props.dungeon_id}/rooms/1`}>
            <p> Dungeon: {props.dungeon} </p>
          </Link>
        </div>
      </div>
    </div>

  )
}
export default CampaignIndexTile
