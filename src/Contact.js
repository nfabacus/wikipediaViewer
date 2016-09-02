import React from 'react';

class Contact extends React.Component {
  constructor(){
    super();
    // this.state = {
    // };
  }

  render(){

    return(
      <div>
        <li>{this.props.contact.name} {this.props.contact.phone} <button onClick={ (contact) => this.props.onDelete(this.props.contact.id)}>x</button></li>
      </div>

    );
  }
}

export default Contact;
