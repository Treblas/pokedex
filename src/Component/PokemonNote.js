import React, { Component } from 'react';
import '../App.css';
 
 class PokemonNote extends Component {

  render() {
    const { details, notes } = this.props
    console.log(details)
    const note = notes
    .filter((note) => {
     // console.log('details', details)
     // console.log('notes', note)
      return details.id === note.id })
    .map((msg) => <p key="note">{msg.note}</p>)
    return (
    <div className="notePane">
       <textarea 
          name="textarea"
          placeholder="Text here.." 
          onChange={this.props.handleChange}
          className="textarea" 
          value={this.props.note}
        >
       </textarea>
       <button className="buttonStats" 
         onClick={this.props.handleSave}>SAVE
      </button>
      <div className="Notes">
      <h2 className="titleNote">POKEMON NOTES...</h2>
       {note}
      </div>
      
    </div>
    );
  }
} 


export default PokemonNote;
