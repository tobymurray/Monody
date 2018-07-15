import React from 'react'
import { Form } from 'semantic-ui-react'

const SocialMediaForm = () => (
  <Form.Group>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Website</label>
      <input placeholder='Website' />
    </Form.Field>
    <Form.Field>
      <label>Facebook Page</label>
      <input placeholder='Facebook Page' />
    </Form.Field>
    <Form.Field>
      <label>Instagram</label>
      <input placeholder='Instagram' />
    </Form.Field>
    <Form.Field>
      <label>Twitter</label>
      <input placeholder='Twitter' />
    </Form.Field>
  </Form.Group>
)

export default SocialMediaForm