
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
      moves: {},
      notes: [],
      note: ''
  }

  handleChange(/*props,*/ e){
    //console.log(props)
    this.setState({ /*[props]*/search: e.target.value })
  }

   handleSave(){
      var obj ={
        id:this.state.details.id,
        note: this.state.note
      }
      this.setState({
       notes: this.state.notes.concat(obj),
       note: '' 
     })
      const {details, note, notes} = this.state
      
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
                handleSearch={this.handleSearch.bind(this, 'note')}
               />
             <PokemonRender details={this.state.details} />
             <PokemonNote notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}


export default App;
