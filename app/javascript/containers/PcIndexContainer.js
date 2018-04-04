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
    fetch('/api/v1/pcs')

    .then(response => {
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
    if (this.state.user.current_user){
      let pcs = this.state.allPcs
      let campaigns = this.state.allCampaigns
      let pcArray;
      let dmArray;

      if (pcs.length > 0) {
        pcArray = pcs.map((pc) => {

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


      if (campaigns.length > 0) {
        dmArray = campaigns.map((campaign) => {

          if (this.state.user.current_user.email === campaign.dm.email) {
            return(

              <CampaignIndexTile
              key={campaign.id}
              id={campaign.id}
              name={campaign.name}
              description={campaign.description}
              pcs = {campaign.pcs}
              dungeon = {campaign.dungeons[0].name}
              dungeon_id = {campaign.dungeons[0].id}
              />

            )
          }
        })
      }

      return(
        <div>
          <div className="homes-screen-tiles">
            <div className="title-tile">
              <h1>Campaigns you are in</h1>
            </div>
            { pcArray }
            <div className="title-tile">
              <h1>Campaigns you are running</h1>
            </div>
            { dmArray }
          </div>

        </div>
      )
    } else {
        return(
          <div className="title-tile">
            <h1> Adventure Awaits You</h1>
            <h5> but you have to log-in/sign-up first</h5>
          </div>
        )
      }

  }

}
export default PcIndexContainer;
