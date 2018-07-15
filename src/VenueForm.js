import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Form, Header, Container, TextArea, Dropdown } from 'semantic-ui-react'
import SocialMediaForm from './SocialMediaForm';
import StreetAddressForm from './StreetAddressForm';
import { venueTypes } from './VenueTypes';
import Dropzone from 'react-dropzone' 

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
      phoneNumber: "",
      files: []
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
            <input placeholder='Name' />
          </Form.Field>
          <section> 
            <div className="dropzone"> 
              <Dropzone onDrop={this.onDrop.bind(this)}> 
                <p>Upload some images of your venue</p> 
              </Dropzone> 
            </div> 
            <aside> 
              <h2>Attached files</h2> 
              <ul> 
                { 
                  this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>) 
                } 
              </ul> 
            </aside> 
          </section> 
          <StreetAddressForm />
          <Form.Field>
            <label>Venue Type</label>
            <Dropdown
              fluid
              search
              selection
              button
              labeled
              options={venueTypes}
              text='Select type of venue'
            />

            <hr />
          </Form.Field>
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
