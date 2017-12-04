import React, { Component } from 'react';
import '../App.css';
 
class PokemonRender extends Component {
  state = { 
     result: {} 
  }
  componentWillReceiveProps(nextProps){
    this.setState({ result: nextProps.details})
  }
  renderMoves(moves){
    console.log(moves)
    var move = []
    if(moves){
      moves.map((item, index) => {
        if(index < 5){
          move = move.concat(<h4 key={index}><li>{item.move.name}</li></h4>)
        }
      })
    }
    return move
  }
  renderBaseStats(basestats){
    console.log(basestats)
    var basestat = []
    if(basestats){
      basestats.map((item, index) => {
        if(index < 6){
          basestat = basestat.concat(<h4 key={index}><li>{item.base_stat}</li></h4>)
        }
      })
    }
    return basestat
  }
  renderTypes(types){
    console.log(types)
    var type = []
    if(types){
      types.map((item, index) => {
        if(index < 2){
          type = type.concat(<h4 key={index}><li>{item.type.name}</li></h4>)
        }
      })
    }
    return type
  }
   renderStats(stats){
    console.log(stats)
    var stat = []
    var base_stat = []
    if(stats){
      stats.map((item, index) => {
        if(index < 6){
          stat = stat.concat(<h4 key={index}>{item.stat.name + " :  " + item.base_stat }</h4>)
        }
      })
    }
    return stat
  }

  
  

  render() {
    const {id,sprites,abilities,moves,name,height,weight,types,stats,base_stat } = this.state.result
  
    const img = !sprites ? '' : sprites.front_shiny
    console.log(this.props, 'state: ', this.state)
    return (
     <renderframe className="renderPane">
        <div className="renderTop">
          <img className="spriteImage" src={img}/>
           <div className="renderCenter">
               <br/><br/><br/><br/>
               <div className="nameText">{name}</div>
                <div className="heightText">Height : {height}</div>
                <div className="weightText">Weight : {weight}</div>
                <div className="moveText">
                <u>Moves</u>{this.renderMoves(moves)}
              </div>
              <div className="typeText">Types : {this.renderTypes(types)}</div>
              <div className="idText"> #{id}</div>
              <div className="statText">Statistics{this.renderStats(stats)}</div>
              <div className="statText">{this.renderBaseStats(base_stat)}</div> 
 
          </div>
          </div>
      </renderframe>
    );
  }
}


export default PokemonRender;
