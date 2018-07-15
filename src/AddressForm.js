import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import StreetAddressForm from './StreetAddressForm';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { firstName, lastName, phoneNumber } = this.props

    return (
      <Form.Group>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' name={this.props.fieldPrefix + "firstName"} value={firstName} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Last Name</label>
          <input placeholder='Last Name' name={this.props.fieldPrefix + "lastName"} value={lastName} onChange={this.props.handleChange} />
        </Form.Field>
        <StreetAddressForm handleChange={this.props.handleChange} fieldPrefix={this.props.fieldPrefix} />
        <Form.Field >
          <label>Phone number</label>
          <input placeholder='Phone number' name={this.props.fieldPrefix + "phoneNumber"} value={phoneNumber} onChange={this.props.handleChange} />
        </Form.Field>
      </Form.Group>
    )
  };
}

export default AddressForm