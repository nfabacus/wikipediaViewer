import React from 'react';

class Count extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }

  addOne(){
    this.setState({
      value: this.state.value+=1
    });
  }
  takeOne(){
    this.setState({
      value: this.state.value-=1
    });
  }

  clearNum(){
    this.setState({
      value: 0
    });
  }

  render(){

    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.addOne.bind(this)}>Add One</button>
        <button onClick={this.takeOne.bind(this)}>Take One</button>
        <button onClick={this.clearNum.bind(this)}>Clear</button>
      </div>

    )
  }
}

export default Count;
