import React, { Component } from 'react'

import { Link } from 'react-router'

class DungeonShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dungeon: {},
      campaign: {},
      user: {}
    }
  }

  componentWillReceiveProps() {
    let campaign_id = this.props.params.campaign_id;
    let dungeon_id = this.props.params.dungeon_id;
    fetch(`/api/v1/campaigns/${campaign_id}/dungeons/${dungeon_id}`)
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
        this.setState({ dungeon : body.dungeon })
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




  render(){

    return( <p>Hello</p>)
  }
}


export default DungeonShowContainer;
