import React, { Component } from 'react'

import PcIndexTile from '../components/PcIndexTile'
import CampaignIndexTile from '../components/CampaignIndexTile'

class PcIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPcs: [],
      allCampaigns: [],
      user: {}
    }
  }

  componentDidMount() {
    console.log("Fetching")
    fetch('/api/v1/pcs')

    .then(response => {
      console.log(response)
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body =>
        this.setState({ allPcs: body }),
      )
      .catch(error => console.error(`Error in fetch: ${error.message}`));

    fetch('/api/v1/campaigns')

    .then(response => {
      console.log(response)
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body =>
        this.setState({ allCampaigns: body }),
      )
      .catch(error => console.error(`Error in fetch: ${error.message}`));


      fetch(`/api/v1/users.json`, { credentials: 'same-origin' })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ user: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }
pc

  render() {


    let pcs = this.state.allPcs
    let campaigns = this.state.allCampaigns




    let pcArray;
    let dmArray;

    if (pcs.length > 0) {
      pcArray = pcs.map((pc) => {
        // console.log(this.state.user.current_user)
        // console.log(pc.user)
        if (this.state.user.current_user.user_name === pc.user.user_name) {
          return(
            <PcIndexTile
            name={pc.name}
            key={pc.id}
            id={pc.id}
            avatar={pc.avatar}
            level= {pc.level}
            character_class ={pc.character_class}
            campaign={pc.campaign.name}
            dm={pc.dm}
            bio={pc.bio}
            />
          )
        }
      })
    }


    // This is showing the people in the campaings I am running I need to vcreate a campaigns sho tile
    if (campaigns.length > 0) {
      dmArray = campaigns.map((campaign) => {

        if (this.state.user.current_user.email === campaign.dm.email) {
          return(

            <CampaignIndexTile
            name={campaign.name}
            key={campaign.id}
            id={campaign.id}
            description={campaign.description}
            pcs = {campaign.pcs}
            // fix this to account for past dungeons at somepoint
            dungeon = {campaign.dungeons[0].name}
            />

          )
        }
      })
    }

    return(
      <div>
        <div className="homes-screen-tiles">
        <h1>Campaigns you are in</h1>
        { pcArray }
        <h1>Campaigns you are running</h1>
        { dmArray }
        </div>

      </div>
    )
  }

}
export default PcIndexContainer;
