import React, { Component } from 'react';
import pokeball from './p.png';

import './App.css';

  

export class PokemonSearch extends Component {

  render() {
    return (
    
        <searchFrame className="searchPane">
              <img 
                src={pokeball} 
                className="pokeball" 
                alt="PokeBall" />
              <input 
                id="searchbox" 
                type="text" 
                placeholder="Search All Pokemon..." 
                className="searchBox" />
              <button 
                id="searchbtn" 
                className="searchButton" 
                title="Go Search!">GO!
              </button>
              <br/> 
              <div className="searchDiv">
                 <h2 className="log-title">POKEMON LIST</h2> 
                 <table className="tableList">
                  <tr>
                    <th>Pokemon Name</th>
                    <th>Type</th>
                  </tr>
                 </table>
               </div>
               <div className="searchBottom">

               </div>
      </searchFrame>
    );
  }
}


export default PokemonSearch;

