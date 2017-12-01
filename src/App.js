
import React, { Component } from 'react';
import header from './header.png';
import './App.css';
import PokemonSearch from './Component/PokemonSearch'
import PokemonRender from './Component/PokemonRender'
import PokemonNote from './Component/PokemonNote'
import request from 'superagent'

class App extends Component {
  state = {
      search: '',
      details: {}
  }

  handleChange(e){
    this.setState({ search: e.target.value })
  }

  handleSearch(){
    const { search } = this.state
    var that = this
    const url = 'http://pokeapi.co/api/v2/pokemon'
    console.log('call api: ' , this.state.search)
    request.get(`${url}/${search}`)
    .end(function(err,res){
      if(err) alert('error')
       that.setState({ details: res.body })
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="mainFrame">
        <header className="headerFrame">
          <img src={header} className="headerLogo" alt="Logo"/>
        </header>
        <div className="mainSection">
             <PokemonSearch handleChange={this.handleChange.bind(this)}
                handleSearch={this.handleSearch.bind(this)}/>
             <PokemonRender details={this.state.details} />
             <PokemonNote />
        </div>
      </div>
    );
  }
}


export default App;
