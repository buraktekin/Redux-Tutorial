import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

function validate(values) {
  const errors = {};
  if(!values.title){
    errors.title = 'Please enter a title.';
  }
  if(!values.categories){
    errors.categories = 'Please enter some categories.';
  }
  if(!values.content){
    errors.content = 'Content must be filled.';
  }
  return errors;
}

class PostsNew extends Component {
  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props; //ES6 magic

    return(
      <div>
        <form onSubmit={ handleSubmit(this.props.createPost) }>
          <h3>Create New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
            <div className="text-help">
              {title.error}
            </div>
          </div>

          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} />
            <div className="text-help">
              {categories.error}
            </div>
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" {...content} />
            <div className="text-help">
              {content.error}
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

// connect: 1st -> mapStateToProps, 2nd -> mapDispatchToProps
// reduxForm: 1st -> form config, 2nd -> mapStateToProps, 3rd -> mapDispatchToProps
export default reduxForm(
  { form: 'PostsNewForm', fields: ['title', 'categories', 'content'], validate},
  null, { createPost }
)(PostsNew);