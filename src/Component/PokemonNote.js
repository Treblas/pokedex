import React, { Component } from 'react';
import '../App.css';
 
 class PokemonNote extends Component {
  render() {
    
    const { details, notes } = this.props
    const note = notes
    .filter((note) => {
      return details.id == note.id })
    .map((msg) => <p>(msg.note)</p>)
   
    return (
    <div className="notePane">
   
       <textarea 
          name="textarea"
          placeholder="Text here.." 
          onChange={this.props.handleChange}
          className="textarea" >
        </textarea>
          <div className="Notes">
          </div>
          <button className="buttonStats" onClick={this.props.handleSave}>SAVE
          </button>
    </div>
    );
  }
}


export default PokemonNote;
