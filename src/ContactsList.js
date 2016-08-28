import React from 'react';
import Contact from './Contact';

const ContactsList = ({contacts})=>
        <ul>
          {contacts.map((contact)=>{
            return <Contact contact={contact} key={contact.id} />
          })}
        </ul>

export default ContactsList;
