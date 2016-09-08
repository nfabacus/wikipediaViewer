import React from 'react';

class Searchbar extends React.Component {
  constructor(){
    super();
    this.state = {
      term: ""
    };
  }

  textSearch(term){
    this.setState({ term: term });
    this.props.onSearchTermChange(term);
  }

  render(){

    return(
      <div>
        <h3>Search Term:</h3>
        <h4>{this.state.term}</h4>
        <input type='text' placeholder="What would you like to search?" onChange={(event)=>this.textSearch(event.target.value)} />
      </div>

    );
  }
}

export default Searchbar;
