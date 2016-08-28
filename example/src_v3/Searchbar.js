import React from 'react';

class Searchbar extends React.Component {

  render(){

    return (
      <input type="text" placeholder="Search here" onChange={event => this.props.onSearchTermChange(event.target.value)} />
    )
  }
}

export default Searchbar;
