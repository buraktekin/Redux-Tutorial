import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
// import SpidermanList from '../containers/spiderman-list';
// import CarList from '../containers/car-list';

export default class App extends Component {
  render() {
      return (
          <div className="container">
              <h2> Mr Grider's Example :) </h2>
              <hr />
              <div className="row">
                  <BookList />
                  <BookDetail />
              </div>
          </div>
      );
  }
}
