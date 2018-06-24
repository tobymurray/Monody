import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'

class ArtistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  // genre of music
  // name of artist, band or project
  // address
  // contact person first name
  // contact person last name
  // email address
  // "I identify as"
  // names of artists
  // website
  // facebook page
  // instagram
  // twitter
  // 50 word bio
  // photo

  render() {
    return (
      <Form>
        <AddressForm />
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}

export default ArtistForm;
