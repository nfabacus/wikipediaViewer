import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';
import Searchbar from './Searchbar';
import Count from './Count';

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
      search: ""
    };

  }

  textSearch(term){
    this.setState({search: term});
  }

  render(){
    let filteredContacts = this.props.contacts.filter((contact)=>{ return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 });


    return (
      <div>
        <h1>Simple React Contact List</h1>
        <Count />
        <br />
        <Searchbar onSearchTermChange={term => this.textSearch(term)}/>
        <ContactsList contacts={filteredContacts}/>
      </div>

    )
  }
}

render(<App contacts = {contacts}/>, document.getElementById("app"))
