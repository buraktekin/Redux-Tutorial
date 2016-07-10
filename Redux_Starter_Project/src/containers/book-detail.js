import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Hey! Select a book to get started.</div>
        }
        return(
          <div className="col-sm-8">
              <h3>Selected Book Details</h3>
              <hr />
              <h5>Title: </h5><span>{this.props.book.title}</span>
              <hr />
              <h5># of Pages: </h5><span>{this.props.book.pages}</span>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)