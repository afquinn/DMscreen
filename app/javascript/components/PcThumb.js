import React from 'react'


const PcThumb = (props) => {
  return(

    <div id="pc-thumb">

      <div className="pc-thumb-tile">

        <span>
        
          <img className="pc-mini-thumb" src={ props.avatar } alt="pc photo" />

          {props.name}-Level:{props.level} {props.character_class}

        </span>

      </div>

  </div>

  )
}

export default PcThumb
