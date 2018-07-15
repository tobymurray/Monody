import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Form, Header, Container, TextArea } from 'semantic-ui-react'
import SocialMediaForm from './SocialMediaForm';
import StreetAddressForm from './StreetAddressForm';

class VenueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  handleChange = (e) => {
    console.log("Event: ", e.name, "value: ", e.value);

    var propValue;
  for(var propName in e) {
    propValue = e[propName]

    console.log(propName,propValue);
  }
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    console.log("Here's the state: ", this.state)
    alert("Submitting a form")
    this.setState({ bio: '' })
  }

  onDrop = (files) => {
    this.setState({
      files
    })
  }

  render() {
    const { bio } = this.state

    return (
      <Container text>
        <Form onSubmit={this.handleSubmit}>
          <Header>Venue</Header>
          <Form.Field>
            <label>Venue Name</label>
            <input placeholder='Name' name="venue_name" onChange={this.handleChange} />
          </Form.Field>
          <StreetAddressForm handleChange={this.handleChange} fieldPrefix="venue_" />
          <Header>Venue contact</Header>
          <AddressForm handleChange={this.handleChange} fieldPrefix="venueContact_" />
          <SocialMediaForm handleChange={this.handleChange} fieldPrefix="venueContact_" />
          <Form.Field>
            <label>Lead time for bookings</label>
            <input placeholder='Lead time' name="leadTime" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Application dates</label>
            <input placeholder='Application dates' name="applicationDates" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field control={TextArea} label='Bio' placeholder='Tell us more about you...' name="bio" value={bio} onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form>
      </Container>
    );
  }
}

export default VenueForm;
