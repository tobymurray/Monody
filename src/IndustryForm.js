import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { Button, Checkbox, Form, Header, Container, TextArea, Dropdown } from 'semantic-ui-react'
import SocialMediaForm from './SocialMediaForm';
import { industryRoles } from './IndustryRoles';

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
      <Container text>
        <Form>
          <Form.Field>
            <label>Role</label>
            <Dropdown
              fluid 
              search 
              selection
              button
              labeled
              options={industryRoles}
              text='Select role'
            />
          </Form.Field>
          <AddressForm />
          <SocialMediaForm />
          <Form.Field control={TextArea} label='Bio' placeholder='Tell us more about you...' />
          <input type="submit" value="Submit" />
        </Form>
      </Container>
    );
  }
}

export default IndustryForm;
