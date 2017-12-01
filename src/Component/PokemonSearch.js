import React, { Component } from 'react';
import pokeball from '../images/p.png';
import '../App.css';

class PokemonSearch extends Component {

  render() {
    return (
    
        <searchframe className="searchPane">
              <img 
                src={pokeball} 
                className="pokeball" 
                alt="PokeBall" />
              <input 
               onChange={this.props.handleChange}
                type="text" 
                placeholder="Search All Pokemon..." 
                className="searchBox" 
                 />
              <button 
                onClick={this.props.handleSearch}
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
      </searchframe>
    );
  }
}


export default PokemonSearch;

