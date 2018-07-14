import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Button, Checkbox, Form, Header, Container, TextArea } from 'semantic-ui-react'
import SocialMediaForm from './SocialMediaForm';

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

  render() {
    return (
      <Container text>
        <Form>
          <Header>Venue contact</Header>
          <AddressForm />
          <SocialMediaForm />
          <Form.Field>
            <label>Lead time for bookings</label>
            <input placeholder='Lead time' />
          </Form.Field>
          <Form.Field>
            <label>Application dates</label>
            <input placeholder='Application dates' />
          </Form.Field>
          <Form.Field control={TextArea} label='Bio' placeholder='Tell us more about you...' />
          <input type="submit" value="Submit" />
        </Form>
      </Container>
    );
  }
}

export default VenueForm;
