import React from 'react'

const PcIndexTile = (props) => {
  return(

    <div id="pc-tile">
      <div className="pc-show-tile">
        <div className="pc-show-tile-name">
          <h2>{props.name}</h2>
        </div>
        <div className="pc-show-tile-contents">

          <div className="pc-show-tile-avatar-pic">
            <img className="pc-thumb" src={ props.avatar } alt="pc photo" />
          </div>
          <div className="pc-show-tile-component">
            <p> Level : {props.level} {props.character_class}</p>
          </div>
          <div className="pc-show-tile-component">
            <p> Campaign: {props.campaign} </p>
          </div>
          <div className="pc-show-tile-component">
            <p> DM: {props.dm} </p>
          </div>
          <div className="pc-show-tile-component">
            <p> Bio: {props.bio}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PcIndexTile
