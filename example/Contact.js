import React from 'react';

class Contact extends React.Component {

  render(){

    return (
      <li>{this.props.contact.name}</li>
    )
  }
}

export default Contact;
