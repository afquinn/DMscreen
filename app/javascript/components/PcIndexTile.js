import React from 'react'

const PcIndexTile = (props) => {
  return(

    <div id="pc-tile">

      <div className="pc-show-tile">
        <h2>{props.name}</h2>
        <img className="pc-thumb" src={ props.avatar } alt="pc photo" />
        <p> Level : {props.level} {props.character_class}</p>
        <p> Campaign: {props.campaign} </p>
        <p> DM: {props.dm} </p>
        <p> Bio: {props.bio}</p>
      </div>

  </div>

  )
}

export default PcIndexTile
