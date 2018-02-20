import React, { Component } from 'react'
import FeatureButton from './FeatureButton'

class RoomFeatureTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFeature: "description"
    }
    this.handleFeatureClick = this.handleFeatureClick.bind(this)
  }

  componentWillReceiveProps() {
    this.setState({ currentFeature: "description" })
  }

  handleFeatureClick(event) {
    let feature = event.target.id
    if (this.state.feature === feature) {
      feature = null;
      this.setState({ currentFeature: null })
    } else {
      this.setState({ currentFeature: feature})
    }
  }

  render() {
      console.log("RoomFeature:")
      console.log(this.state)


      let featuredContent;
      if (this.state.currentFeature ==="description") {
        featuredContent = this.props.description
      } else if (this.state.currentFeature ==="traps") {
        featuredContent = this.props.traps
      } else if (this.state.currentFeature ==="treasure") {
        featuredContent = this.props.treasure
      } else if (this.state.currentFeature ==="monsters") {
        featuredContent = this.props.monsters
      }


      let presentFeatures = this.props.presentFeatures
      let featureButtons;
      if (featuredContent){

        let featureButtons = presentFeatures.map( feature => {
          return(
            <FeatureButton
            key={feature.id}
            name = {feature}
            handleClick = {this.handleFeatureClick}
            />
          )
        })

      return(

        <div className="testing" >
          {featureButtons}
          <p><strong>
            {featuredContent}
          </strong></p>
        </div>

      )
    } else {
      return(
        <p>One Moment, Loading...</p>
      )
    }
  }
}
export default RoomFeatureTile
