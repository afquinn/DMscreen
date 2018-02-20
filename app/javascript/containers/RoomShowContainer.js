import React, { Component } from 'react'

import RoomPictureTile from '../components/RoomPictureTile'
import RoomFeatureTile from '../components/RoomFeatureTile'
import AdjacentRoomTile from '../components/AdjacentRoomTile'

import { Link } from 'react-router'

class RoomShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      room: null,
      room_param: this.props.params.room_id,
      user: {},
      presentFeatures: []
    }
    this.fetchRoomDetails = this.fetchRoomDetails.bind(this)
  }

  componentDidUpdate() {
    if (this.props.params.room_id !== this.state.room_param) {
      this.fetchRoomDetails()
    }
  }

  componentDidMount() {
    this.fetchRoomDetails()
  }

  fetchRoomDetails() {
    let campaign_id = this.props.params.campaign_id;
    let dungeon_id = this.props.params.dungeon_id;
    let room_id = this.props.params.room_id;
    fetch(`/api/v1/campaigns/${campaign_id}/dungeons/${dungeon_id}/rooms/${room_id}`)
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
      .then(body => {
        let newPresentFeatures = this.presentFeatures(body)
        this.setState({
          room: body,
          room_param: room_id,
          presentFeatures: newPresentFeatures
        })
      })

      fetch(`/api/v1/users.json`, { credentials: 'same-origin' })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ user: body.current_user })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  presentFeatures(room) {
    let presentFeatures = []
    if (room.description){
      presentFeatures.push("description")
    }

    if (room.traps){
      presentFeatures.push("traps")
    }

    if (room.monsters){
      presentFeatures.push("monsters")
    }

    if (room.treasure){
      presentFeatures.push("treasure")
    }

    return presentFeatures
  }

  render() {

    let adjacentRooms;
    if (this.state.room) {
      adjacentRooms = this.state.room.egresses.map((room) =>{

        return(
          <div >
            <AdjacentRoomTile
              key = {room.id}
              id = {room.id}
              picture = {room.picture}
              campaign_id = {this.props.params.campaign_id}
              dungeon_id = {this.props.params.dungeon_id}
            />
          </div>

        )
      })

      return(
        <div>
          <div className="room-body-page">
            <div className="dungeon-name">
              {this.state.room.dungeon.name}
            </div>

            <div className="rm-pic-tile">
              < RoomPictureTile
              picture = {this.state.room.picture}
              />
            </div>

            <div className= "master-floor-plan">
              <div className= "master-floor-plan-pic">
               <img src={ this.state.room.dungeon.master_floor_plan } alt="floor plan pic" />
              </div>
            </div>

            <div className="rm-feature-tile">
              < RoomFeatureTile
                presentFeatures={this.state.presentFeatures}
                description={this.state.room.description}
                traps={this.state.room.traps}
                monsters={this.state.room.monsters}
                treasure={this.state.room.treasure}
                room_id={this.props.params.room_id}
              />
            </div>
            <div className="adjacent-rooms">
              <div className="adjacent-rooms-title">
                <h5> Adjacent rooms</h5>
              </div>
                {adjacentRooms}
            </div>
          </div>
        </div>
      )
    }
    else {
      return (<p>Loading...</p>)
    }
  }
}

export default RoomShowContainer;
