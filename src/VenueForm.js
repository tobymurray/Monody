import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Form, Header, Container, TextArea } from 'semantic-ui-react'
import SocialMediaForm from './SocialMediaForm';
import StreetAddressForm from './StreetAddressForm';
import registerVenue from './mutations/RegisterVenue'

class VenueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    registerVenue(
      this.state.venue_name,
      this.state.leadTime,
      this.state.applicationDates,
      this.state.description,
      this.state.venue_address1,
      this.state.venue_address2,
      this.state.venue_postalCode,
      this.state.venue_city,
      this.state.venue_country,
      this.state.venueContact_firstName,
      this.state.venueContact_lastName,
      this.state.venueContact_phoneNumber,
      this.state.venueContact_email,
      this.state.venueContact_facebook,
      this.state.venueContact_instagram,
      this.state.venueContact_twitter,
      this.state.venueContact_website,
      this.state.venueContact_address1,
      this.state.venueContact_address2,
      this.state.venueContact_postalCode,
      this.state.venueContact_city,
      this.state.venueContact_country,
    )
  }

  onDrop = (files) => {
    this.setState({
      files
    })
  }

  render() {
    const { description } = this.state

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
          <Form.Field
            control={TextArea}
            label='Description'
            placeholder='Tell us more about your venue...'
            name="description"
            value={description}
            onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form>
      </Container>
    );
  }
}

export default VenueForm;
