import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'

class IndustryForm extends Component {
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
  //   role
  //   phone number
  //   email
  //   website
  //   facebook
  //   instagram
  //   twitter
  //   bio
  render() {
    return (
      <Form>
        <AddressForm />
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}

export default IndustryForm;
