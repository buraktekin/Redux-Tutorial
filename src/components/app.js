import React, { Component } from 'react';

import BookList from '../containers/book-list';
import SpidermanList from '../containers/spiderman-list';
import CarList from '../containers/car-list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h2> Mr Grider's Example :) </h2>
        <div className="row">
          <BookList />
        </div>
        <hr />
        <h2> My Examples </h2>
        <div className="container">
          <div className="row">
            <SpidermanList />
          </div>
          <hr />
          <div className="row">
            <CarList />
          </div>
        </div>
      </div>
    );
  }
}
