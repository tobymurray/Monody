import React, { Component } from 'react';
import { Form, Header, Container } from 'semantic-ui-react'
import { venues } from './Venues'

class DiscoverComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: venues,
      items: venues
    };
  }

  filterList = (event) => {
    var updatedList = this.state.initialItems.filter((item) => {
      return item.text.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    this.setState({ items: updatedList });
  }

  render() {
    return (
      <Container text>
        <Form>
          <Header>Find something...</Header>
          <Form.Field onChange={this.filterList}>
            <input placeholder='What are you looking for?' />
          </Form.Field>
        </Form>
        <ul>
          {
            this.state.items.map((item) => {
              return <li data-category={item.value} key={item.key}>{item.text}</li>
            })
          }
        </ul>
      </Container>
    );
  }
}

export default DiscoverComponent