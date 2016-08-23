import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
  constructor(){
    super();
    this.state = {
      search: 'My default contact'
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 40)});
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map((contact)=>{
            return <Contact contact={contact} key={contact.id}/>
          })}
        </ul>
        <input type="text"
               value={this.state.search}
               onChange={this.updateSearch.bind(this)}/>

      </div>

    )
  }
}

export default ContactsList;
