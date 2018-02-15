import React from 'react'

const FeatureButton = (props) => {

  return(

    <span><a className="button catagooory" id={props.name} onClick = {props.handleClick}>{props.name}</a></span>
  )
}

export default FeatureButton
