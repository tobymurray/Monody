import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { firstName, lastName, address1, address2, postalCode, city, country, phoneNumber } = this.props
    // firstName={firstName} lastName={lastName} address={address} postalCode={postalCode} city={city} country={country} phoneNumber={phoneNumber}

    return (
      <Form.Group>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' name="firstName" value={firstName} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Last Name</label>
          <input placeholder='Last Name' name="lastName" value={lastName} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Address</label>
          <input placeholder='Address 1' name="address1" value={address1} onChange={this.props.handleChange} />
          <input placeholder='Address 2' name="address2" value={address2} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Postal Code</label>
          <input placeholder='Postal Code' name="postalCode" value={postalCode} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>City</label>
          <input placeholder='City' name="city" value={city} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Country</label>
          <input placeholder='Country' name="country" value={country} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Phone number</label>
          <input placeholder='Phone number' name="phoneNumber" value={phoneNumber} onChange={this.props.handleChange} />
        </Form.Field>
      </Form.Group>
    )
  };
}

export default AddressForm