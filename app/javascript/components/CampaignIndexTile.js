import React from 'react'
import PcThumb from './PcThumb'

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

        <h2>{props.name}</h2>
        <p> Description: {props.description} </p>
        <p> Players: </p>
        {pcComponents}
        <p> Dungeon: {props.dungeon} </p>

      </div>

    </div>

  )
}
export default CampaignIndexTile
