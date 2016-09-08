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
      <div className="searchView">
        <h4>Search Term:</h4>
        <h4 className='searchBox'>{this.state.term}</h4>
        <input type='text' placeholder="What would you like to search?" onChange={(event)=>this.textSearch(event.target.value)} />
      </div>

    );
  }
}

export default Searchbar;
