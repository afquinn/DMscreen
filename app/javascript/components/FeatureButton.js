import React from 'react'

const FeatureButton = (props) => {

  return(

    <span><a className="catagooory" id={props.name} onClick = {props.handleClick}>{props.name}</a></span>
  )
}
// button classs
export default FeatureButton
