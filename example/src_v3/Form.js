import React from 'react';

class Form extends React.Component {

  takeFormInfo(event){
    event.preventDefault();
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor((Math.random()*100) +1);
    let obj = {id, name, phone}
    this.refs.name.value = '';
    this.refs.phone.value = '';
    this.props.onFormSubmit(obj);

  }

  render(){


    return(
      <form onSubmit={ this.takeFormInfo.bind(this) }>
        Name: <input type="text" ref="name" />
        Phone: <input type="text" ref="phone" />
        <button type="submit">Add a new contact</button>
      </form>

    )
  }
}

export default Form;
