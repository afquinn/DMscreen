import React, { Component } from 'react'

import RoomShowTile from '../components/RoomShowTile'
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
      user: {}
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
        this.setState({
          room: body,
          room_param: room_id
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

  render() {

    console.log(this.state)
    let adjacentRooms;
    if (this.state.room) {
      adjacentRooms = this.state.room.egresses.map((room) =>{

        return(
          <AdjacentRoomTile
            key = {room.id}
            id = {room.id}
            picture = {room.picture}
            campaign_id = {this.props.params.campaign_id}
            dungeon_id = {this.props.params.dungeon_id}
          />

        )
      })

      return(
        <div>

          <h3>{this.state.room.dungeon.name}</h3>

          < RoomPictureTile
          picture = {this.state.room.picture}
          />
          < RoomFeatureTile
          description={this.state.room.description}
          traps={this.state.room.traps}
          monsters={this.state.room.monsters}
          treasure={this.state.room.treasure}

          />



          <p> Adjacent rooms</p>

          {adjacentRooms}
          </div>
      )
    }
    else {
      return (<p>Loading...</p>)
    }
  }
}

export default RoomShowContainer;
