import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class StreetAddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { address1, address2, postalCode, city, country } = this.props

    return (
      <Form.Group>
        <Form.Field >
          <label>Address</label>
          <input placeholder='Address 1' name={this.props.fieldPrefix + "address1"} value={address1} onChange={this.props.handleChange} />
          <input placeholder='Address 2' name={this.props.fieldPrefix + "address2"} value={address2} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Postal Code</label>
          <input placeholder='Postal Code' name={this.props.fieldPrefix + "postalCode"} value={postalCode} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>City</label>
          <input placeholder='City' name={this.props.fieldPrefix + "city"} value={city} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field >
          <label>Country</label>
          <input placeholder='Country' name={this.props.fieldPrefix + "country"} value={country} onChange={this.props.handleChange} />
        </Form.Field>
      </Form.Group>
    )
  };
}

export default StreetAddressForm