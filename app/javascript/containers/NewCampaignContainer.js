// THis is a mess...update it soon

import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router';

class NewCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name your Campaign",
      description: 'The Quest you heroes face.',
      file: []

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file })
    } else {
      this.setState({ message: 'You can only have character pic.'})
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    debugger
    event.preventDefault();
    let formPayload = new FormData()
    formPayload.append("name", this.state.name)
    formPayload.append("description", this.state.description)

    fetch('/api/v1/campaigns', {
      credentials: 'same-origin',
      method: 'POST',
      body: formPayload,
      headers: { }

    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())

    ///revisit 7-3
    .then(body => {
      this.setState({ body: body.formPayload })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {

    return (
      <div className='title-tile'>
      <h1> Make your Campaign</h1>
      <form onSubmit={this.handleSubmit}>

        <label className="pc-new-feature-tile">
          <h3>Campaign Name:</h3>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label className="pc-new-feature-tile">
          <h3>Short Description:</h3>
          <textarea name= "description" value={this.state.description} onChange={this.handleChange} />
        </label>

        <section >
          <div className="pc-new-feature-tile">
            <Dropzone onDrop={this.onDrop}>
              <p >Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <p>Dropped files</p>
              <ul>
                {
                  this.state.file.map(f => <li key={f.name}>{f.name}</li>)
                }
              </ul>
          </aside>
        </section>

        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default NewCampaign;
