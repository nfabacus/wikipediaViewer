import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
  {id: 1, name: "John", phone: "12321 32132"},
  {id: 2, name: "Tony", phone: "12321 32132"},
  {id: 3, name: "Steve", phone: "12321 32132"},
  {id: 4, name: "Bill", phone: "12321 32132"}
]

class App extends React.Component {

  render(){

    return (
      <div>
        <h1>Simple React Contact List</h1>
        <ContactsList contacts = {this.props.contacts}/>
      </div>

    )
  }
}

render(<App contacts={contacts}/>, document.getElementById("app"))
