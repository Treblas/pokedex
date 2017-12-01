import React, { Component } from 'react';
import '../App.css';
 
class PokemonRender extends Component {
  state = { result: {} }
  componentWillReceiveProps(nextProps){
    this.setState({ result: nextProps.details})
  }
  render() {
    const { sprites,abilties,moves,name } = this.state.result
    const img = !sprites ? '' : sprites.front_default
    console.log(this.props, 'state: ', this.state)
    return (
     <renderframe className="renderPane">
          <div className="renderTop">
          <h2>{name}</h2>
          <img className="spriteImage" src={img}/>
          </div>
          <div className="renderCenter">
          </div>
      </renderframe>
    );
  }
}


export default PokemonRender;
