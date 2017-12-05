import React, { Component } from 'react';
import '../App.css';
 


class PokemonRender extends Component {
  state = { 
     result: {}, 
  
  }

  componentWillReceiveProps(nextProps){
    this.setState({ result: nextProps.details})
  }
  renderMoves(moves){
    console.log(moves)
    var move = []
    if(moves){
      moves.map((item, index) => {
        if(index < 7){
          move = move.concat(<h4 key={index}><li>{item.move.name}</li></h4>)
        }
      })
    }
    return move
  }
  renderAbilities(abilities){
    console.log(abilities)
    var ability = []
    if(abilities){
      abilities.map((item, index) => {
        if(index < 2){
          ability = ability.concat(<h4 key={index}>{"- " + item.ability.name}</h4>)
        }
      })
    }
    return ability
  }
  
  renderTypes(types){
    console.log(types)
    var type = []
    if(types){
      types.map((item, index) => {
        if(index < 1){
          type = type.concat(<h4 className="h4" key={index}>{"Type :" + item.type.name}</h4>)
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
     <div className="renderPane">
        <div className="renderTop">
          <img className="spriteImage" src={img}/>
           <div className="renderCenter">
             <br/><br/><br/><br/>
             <div className="nameText">
             	{name}
             </div>
             <div className="heightText">
             	Height : <b>{height}</b>
             </div>
             <div className="weightText">
             	Weight : <b>{weight}</b>
             </div>
             <div className="moveText">
                <u>Moves</u><br/>{this.renderMoves(moves)}
              </div>
             <div className="typeText">
             	{this.renderTypes(types)}
             </div>
             <div className="idText"> 
             	#{id}
             </div>
             <div className="statText">
             	<u>Statistics</u>{ this.renderStats(stats)}
             </div>
             <div className="abilitiesText">
             	<u>Abilities</u><br/>{ this.renderAbilities(abilities)}
             </div>
            
          </div>
         </div>
      </div>
    );
  }
}


export default PokemonRender;
