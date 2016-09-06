import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';
import Searchbar from './Searchbar';
import Count from './Count';
import Form from './Form';

let contacts = [
  {id: 1, name: "John", phone: "12321 32132"},
  {id: 2, name: "Tony", phone: "12321 32132"},
  {id: 3, name: "Steve", phone: "12321 32132"},
  {id: 4, name: "Bill", phone: "12321 32132"}
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      contacts: props.contacts
    };

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

render(<App contacts = {contacts}/>, document.getElementById("app"))
