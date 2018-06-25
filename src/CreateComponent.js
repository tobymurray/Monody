import React from 'react'
import { Tab, Header } from 'semantic-ui-react'

import ArtistForm from './ArtistForm';
import IndustryForm from './IndustryForm';
import VenueForm from './VenueForm';

const panes = [
  { menuItem: 'Artist', render: () => <Tab.Pane><ArtistForm /></Tab.Pane> },
  { menuItem: 'Industry', render: () => <Tab.Pane><IndustryForm /></Tab.Pane> },
  { menuItem: 'Venue', render: () => <Tab.Pane><VenueForm /></Tab.Pane> },
]

const CreateComponent = () => (
  <div>
    <Header>What are you?</Header>
    <Tab panes={panes} />
  </div>
)

export default CreateComponent


