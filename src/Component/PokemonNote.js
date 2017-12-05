import React, { Component } from 'react';
import '../App.css';
 
 class PokemonNote extends Component {
  render() {
    return (
    <noteframe className="notePane">
   
       <textarea 
          name="textarea"
          placeholder="Text here.." 
          rows="13  "
          cols="30"
          className="textarea" >
          </textarea>
        
    </noteframe>
    );
  }
}


export default PokemonNote;
