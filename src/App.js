import React from 'react';

import ReactFetch from 'react-fetch';

import {render} from 'react-dom';
import ContactsList from './ContactsList';
import Searchbar from './Searchbar';
import Count from './Count';
import Form from './Form';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      contacts: []
    };

    fetch('http://localhost:3000/contacts')
      .then(response=> response.json())
      .then(json=> this.setState({ contacts: json }))
      .catch(err => console.error('parsing failed', err.toString()));

  }

  addContact(obj){
    this.setState({
      contacts: this.state.contacts.concat(obj)
    });
  }

  onDelete(item){
    let filteredItem = this.state.contacts.filter(function(el){
      return el.id !== item;
    });
    this.setState({
      contacts: filteredItem


    });
  }

  render(){
    let filteredContacts = this.state.contacts.filter((contact)=>{ return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 });


    return (
      <div>
        <center>
          <h1>Simple React App</h1>
          <Count />
          <br />
          <Form onFormSubmit={obj=>this.addContact(obj)}/>
          <Searchbar onSearchTermChange={term =>this.setState({search: term})}/>
          <ContactsList contacts={filteredContacts} onDelete={item=>this.onDelete(item)}/>
        </center>
      </div>

    )
  }
}

render(<App />, document.getElementById("app"))
