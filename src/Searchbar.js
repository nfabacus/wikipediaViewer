import React from 'react';

class Searchbar extends React.Component {
  constructor(){
    super();
    this.state ={
      term: ""

    }
  }

  textSearch(term){
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }

  render(){

    return (
      <div>
        <h3>Searched Term: {this.state.term}</h3>
        <input type="text" placeholder="Search here" onChange={event => this.textSearch(event.target.value)} />
      </div>
    )
  }
}

export default Searchbar;
