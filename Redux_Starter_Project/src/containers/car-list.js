import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarList extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return(
        <li key={car.brand} style={{backgroundColor: car.color, color: "#FFF"}} className="list-group-item">{car.brand}</li>
      );
    });
  }

  render() {
    return(
      <ul className="list-unstyled list-group col-sm-12">
        {this.renderCars()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(CarList);
