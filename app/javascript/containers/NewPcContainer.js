// when you want to get fancy this looks like a fun place to Start
// https://github.com/JedWatson/react-select


import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router';

class NewPc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "enter your name here",
      level: 1,
      class: "",
      bio: 'Your story...',
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
    event.preventDefault();
    let formPayload = new FormData()
    // formPayload.append("key", "value");
    formPayload.append("name", this.state.name)
    formPayload.append("level", this.state.level)
    formPayload.append("character_class", this.state.class)
    formPayload.append("bio", this.state.bio)
    formPayload.append("avatar", this.state.file[0])
    console.log(formPayload.getAll('key'))
    console.log(formPayload.getAll('name'))
    console.log(formPayload.getAll('level'))
    console.log(formPayload.getAll('character_class'))
    console.log(formPayload.getAll('bio'))
    console.log(formPayload.getAll('avatar'))


    alert('A PC was submitted: ' + this.state.name + '\n' + this.state.level + '\n' + this.state.class + '\n' + this.state.bio);
    console.log(document.cookie);

    fetch('/api/v1/pcs', {
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
      <h1> Make your Character</h1>
      <form onSubmit={this.handleSubmit}>

        <label className="pc-new-feature-tile">
          <h3>Character Name:</h3>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label className="pc-new-feature-tile">
          <h3>Character Level: </h3>
          (between 1 and 20)
          <input type="number" name= "level" min="1" max="20" value={this.state.level} onChange={this.handleChange} />
        </label>

        <label className="pc-new-feature-tile">
         <h3>Choose your Characters Class:</h3>
         <select name="class" value={this.state.class} onChange={this.handleChange}>
           <option value="bard">Bard</option>
           <option value="barbarian">Barbarian</option>
           <option value="cleric">Cleric</option>
           <option value="druid">Druid</option>
           <option value="fighter">Fighter</option>
           <option value="monk">Monk</option>
           <option value="paladin">Paladin</option>
           <option value="ranger">Ranger</option>
           <option value="rogue">Rogue</option>
           <option value="sorcerer">Sorcerer</option>
           <option value="warlock">Warlock</option>
           <option value="wizard">Wizard</option>
         </select>
       </label>

        <label className="pc-new-feature-tile">
          <h3>Character Bio:</h3>
          <textarea name= "bio" value={this.state.bio} onChange={this.handleChange} />
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


export default NewPc;
