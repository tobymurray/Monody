import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class SocialMediaForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { email, website, facebook, instagram, twitter } = this.props

    return (
      <Form.Group>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' name={this.props.fieldPrefix + "email"} value={email} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Website</label>
          <input placeholder='Website' name={this.props.fieldPrefix + "website"} value={website} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Facebook Page</label>
          <input placeholder='Facebook Page' name={this.props.fieldPrefix + "facebook"} value={facebook} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Instagram</label>
          <input placeholder='Instagram' name={this.props.fieldPrefix + "instagram"} value={instagram} onChange={this.props.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Twitter</label>
          <input placeholder='Twitter' name={this.props.fieldPrefix + "twitter"} value={twitter} onChange={this.props.handleChange} />
        </Form.Field>
      </Form.Group>
    )
  }
}

export default SocialMediaForm
