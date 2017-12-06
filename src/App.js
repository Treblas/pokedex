
import React, { Component } from 'react';
import header from './tops.png';
import './App.css';
import PokemonSearch from './Component/PokemonSearch'
import PokemonRender from './Component/PokemonRender'
import PokemonNote from './Component/PokemonNote'
import request from 'superagent'

class App extends Component {
  state = {
      search: '',
      details: {},
      notes: [],
      note: ''
  }

  handleChange(prop, e){
    this.setState({[prop]: e.target.value })
  }
  
  handleSave(){
      var obj ={
        id:   this.state.details.id,
        note: this.state.note
      }
      this.setState({
       notes: this.state.notes.concat(obj),
       note: '',


     })
     const {details, note, notes} = this.state

  }

 
  handleSearch(){
    const { search } = this.state
    var that = this
    const url = 'https://pokeapi.co/api/v2/pokemon'
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
             <PokemonSearch 
                handleChange={this.handleChange.bind(this, 'search')}
                handleSearch={this.handleSearch.bind(this)}
               />
             <PokemonRender details={this.state.details} />
             <PokemonNote 
               handleChange={this.handleChange.bind(this, 'note')}
               handleSave={this.handleSave.bind(this)}
               notes={this.state.notes}
               details={this.state.details}
               note={this.state.note}
          
              />
        </div>
      </div>
    );
  }
}


export default App;
