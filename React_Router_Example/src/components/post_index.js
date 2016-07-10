import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-success">
            Add a Post
          </Link>
        </div>
        List of all posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);