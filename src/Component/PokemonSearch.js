import React, { Component } from 'react';
import '../App.css';

class PokemonSearch extends Component {

  render() {
    return (
    
        <div className="searchPane">
              <div className="searchDiv">
              <br /><br /><br />
                <label className="searchText">
                    Search For the Pokemon!
                </label>

              <br /><br /><br />
                <input 
                  onChange={this.props.handleChange}
                  type="text" 
                  placeholder="Search Pokemon..." 
                  className="searchBox" 
                 
                  />
                <br/><br/>  
                <button 
                  onClick={this.props.handleSearch}
                  
                  className="searchButton" 
                  title="Go Search!">Search
                </button>
                <br/>
               </div>
               <div className="searchBottom">
               </div>
      </div>
    );
  }
}


export default PokemonSearch;

