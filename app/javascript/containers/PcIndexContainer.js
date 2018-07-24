import React, { Component } from 'react'
import PcIndexTile from '../components/PcIndexTile'
import CampaignIndexTile from '../components/CampaignIndexTile'
import { Link } from 'react-router'

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



      fetch(`/api/v1/users.json`, { credentials: 'same-origin' })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ user: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }


  render() {
    if (this.state.user.current_user){
      let pcs = this.state.allPcs
      // let campaigns = this.state.allCampaigns
      let campaigns = []
      let pcArray;
      let dmArray;

      // pcs.forEach(function(camp){
      //   console.log(this.state.user.current_user)
      //   console.log(camp.pc.user)
      //   if (this.state.user.current_user === camp.pc.user){
      //   console.log(camp)}
      //
      //
      //
      // })

      if (pcs.length > 0) {

        pcArray = pcs.map((pc) => {
          if (this.state.user.current_user.user_name === pc.user.user_name) {
            let currentCamp = pc.campaign
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
        console.log("yes")
        dmArray = campaigns.map((campaign) => {

         // if (this.state.user.current_user.email === campaign.dm.email) {
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
          // }
        })
      } else {console.log("no")}

      return(
        <div>
          <div className="homes-screen-tiles">
            <div className="title-tile">
              <h1>Your Player Characters</h1>
            </div>
            { pcArray }
            <div className="new-pc">
              <Link to={`/pcs/new`}>
                <p> Make a brand spankin new PC </p>
              </Link>
            </div>
            <div className="title-tile">
              <h1>Dungeons</h1>
            </div>
            { dmArray }
            <div className="campaign-dungeon-link">
              <Link to={`/campaigns/1/dungeons/1/rooms/1`}>
                <p> The Forgetten Forge (levels 3-5)</p>
              </Link>
            </div>
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
