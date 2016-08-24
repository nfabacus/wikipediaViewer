import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'John',
  phone: '123 1231 12312'
}, {
  id: 2,
  name: 'Tom',
  phone: '654 4641 65464'
}, {
  id: 3,
  name: 'Jeff',
  phone: '543 4462 3345'
}, {
  id: 4,
  name: 'Bill',
  phone: '123 4323 43242'
}, {
  id: 5,
  name: 'Tim',
  phone: '654 4641 65464'
}, {
  id: 6,
  name: 'Matt',
  phone: '654 4641 65464'
}]

class App extends React.Component {
  render() {

    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

render(<App contacts={contacts}/>, document.getElementById('app'));
