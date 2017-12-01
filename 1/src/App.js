import React, { Component } from 'react';
import body from './bg3.jpg';
import header from './header.png';
import pokeball from './p.png';
import black from './blackgrad.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="mainFrame">
        <header className="headerFrame">
          <img src={header} className="headerLogo" />
        </header>
        <div className="mainSection">
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
             <renderFrame className="renderPane">
               <div className="renderTop">
                </div>
                <div className="renderCenter">
                </div>
             </renderFrame >
             <noteFrame className="notePane">
              <input type="text" placeholder="Search All Pokemon" />
            </noteFrame>
        </div>
      </div>
    );
  }
}


export default App;
