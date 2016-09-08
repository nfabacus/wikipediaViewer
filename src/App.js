import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import Searchbar from './Searchbar';
import ListView from './ListView';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      term: "",
      searchResult: ""
    };
  }

  searchWiki(term){

    $.when($.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=return&search="+term,
      dataType: 'jsonp'
    }))
    .then((result)=>{
        this.setState({
          term: term,
          searchResult: result[1]
        });
      });

  }


  render(){


    return(
      <div>
        <center>
          <h1>Wikipedia Viewer</h1>
          <Searchbar onSearchTermChange={this.searchWiki.bind(this)}/>
          <ListView terms={this.state.searchResult}/>
        </center>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
