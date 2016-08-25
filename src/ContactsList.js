import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      contacts: props.contacts,
      value: 0
    };
  }

  addOne() {
    this.setState({
      value: this.state.value +=1
    });
  }


  render(){

    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.addOne.bind(this)}>Add one</button>
        <ul>
          {this.props.contacts.map((contact)=>{
            return <Contact contact={contact} key={contact.id} />
          })}
        </ul>
      </div>

    )
  }
}

export default ContactsList;
