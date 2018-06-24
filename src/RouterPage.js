import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArtistForm from './ArtistForm';
import IndustryForm from './IndustryForm';
import VenueForm from './VenueForm';

const RouterPage = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/artist">Artist</Link>
        </li>
        <li>
          <Link to="/industry">Industry</Link>
        </li>
        <li>
          <Link to="/venue">Venue</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/artist" component={ArtistForm} />
      <Route path="/industry" component={IndustryForm} />
      <Route path="/venue" component={VenueForm} />
    </div>
  </Router>
);

export default RouterPage;