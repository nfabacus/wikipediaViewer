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
        <li className="animated slideInRight">{this.props.contact.name} {this.props.contact.phone} <button className="waves-effect waves-light btn red deleteBtn" onClick={ (contact) => this.props.onDelete(this.props.contact.id)}>x</button></li>
      </div>

    );
  }
}

export default Contact;
