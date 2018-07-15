import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Form, Header, Container, TextArea } from 'semantic-ui-react'
import SocialMediaForm from './SocialMediaForm';

class VenueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      postalCode: "",
      city: "",
      country: "",
      phoneNumber: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    console.log("Here's the state: ", this.state)
    alert("Submitting a form")
    this.setState({ bio: '' })
  }

  render() {
    const { bio } = this.state

    return (
      <Container text>
        <Form onSubmit={this.handleSubmit}>
          <Header>Venue contact</Header>
          <AddressForm handleChange={this.handleChange} />
          <SocialMediaForm />
          <Form.Field>
            <label>Lead time for bookings</label>
            <input placeholder='Lead time' />
          </Form.Field>
          <Form.Field>
            <label>Application dates</label>
            <input placeholder='Application dates' />
          </Form.Field>
          <Form.Field control={TextArea} label='Bio' placeholder='Tell us more about you...' name="bio" value={bio} onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form>
      </Container>
    );
  }
}

export default VenueForm;
