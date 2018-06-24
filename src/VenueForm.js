import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'

class VenueForm extends Component {
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
        <Form.Field>
          <label>Genre of music</label>
          <input placeholder='Genre of music' />
        </Form.Field>
        <Form.Field>
          <label>Name of artist, band or project</label>
          <input placeholder='Name of artist, band or project' />
        </Form.Field>
        <Header>Venue contact</Header>
        <AddressForm />
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}

export default VenueForm;
