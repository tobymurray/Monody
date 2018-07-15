import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class MenuComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Menu.Item as={Link} to="home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            as={Link}
            to="discover"
            name='discover'
            active={activeItem === 'discover'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="create"
            name='create'
            active={activeItem === 'create'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}