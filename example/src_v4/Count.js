import React from 'react';

class Count extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    };
  }

  addOne(){
    this.setState({
      value: this.state.value+=1
    });
  }

  render(){

    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.addOne.bind(this)}>Click me!</button>
      </div>

    )
  }
}

export default Count;
