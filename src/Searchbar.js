import React from 'react';

class Searchbar extends React.Component {

  render(){

    return (
      <input type="text" onChange={event => this.props.onSearchTermChange(event.target.value)} />
    )
  }
}

export default Searchbar;
