import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const AddressForm = () => (
  <Form.Group>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input placeholder='Address 1' />
      <input placeholder='Address 2' />
    </Form.Field>
    <Form.Field>
      <label>Postal Code</label>
      <input placeholder='Postal Code' />
    </Form.Field>
    <Form.Field>
      <label>City</label>
      <input placeholder='City' />
    </Form.Field>
    <Form.Field>
      <label>Country</label>
      <input placeholder='Country' />
    </Form.Field>
    <Form.Field>
      <label>Phone number</label>
      <input placeholder='Phone number' />
    </Form.Field>
  </Form.Group>
)

export default AddressForm