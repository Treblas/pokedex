import React, { Component } from 'react';
import './App.css';
 
export class PokemonNote extends Component {
  render() {
    return (
    <noteFrame className="notePane">
       <textarea 
          name="textarea"
          placeholder="Text here.." 
          rows="7"
          cols="30"
          className="textarea" >
        </textarea>
    </noteFrame>
    );
  }
}


export default PokemonNote;
