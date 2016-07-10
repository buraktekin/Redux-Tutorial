import React, { Component } from 'react';
import { connect } from 'react-redux';

class SpidermanList extends Component {
  spidermanCagir() {
    return this.props.spidermanFamily.map((person) => {
      const statusClass = "fa fa-circle " + person.status_icon;
      return(
        <li key={person.name} className="list-group-item">
          <h3>{person.name}</h3><span><i>{person.type}</i></span>
          <p className="small pull-right text-left" style={{width: 140+"px"}}><b>Status:</b> <i className={statusClass}></i> {person.status}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <ul className="list-unstyled list-group col-sm-12">
          {this.spidermanCagir()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    spidermanFamily: state.spidermanFamily
  }
}

export default connect(mapStateToProps)(SpidermanList);
