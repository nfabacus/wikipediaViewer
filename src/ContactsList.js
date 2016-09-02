import React from 'react';
import Contact from './Contact';


class ContactsList extends React.Component {

  render(){

    return(
      <ul>
        {this.props.contacts.map((contact)=>{
          return <Contact contact={contact} key={contact.id} onDelete={(contact) => this.props.onDelete(contact)}/>
        })}
      </ul>
    );
  }


}

export default ContactsList;
