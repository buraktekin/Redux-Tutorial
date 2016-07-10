import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const celcius = temps.map( k => k - 273 );
    const pressures = cityData.list.map(pressure => pressure.main.pressure);
    const humidities = cityData.list.map(hum => hum.main.pressure);
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={ cityData.city.id }>
        <td><GoogleMap lon={ lon } lat={ lat } /></td>
        <td><Chart data={ celcius } color="blue" units="°C" /></td>
        <td><Chart data={ pressures } color="black" units="hPa" /></td>
        <td><Chart data={ humidities } color="orange" units="%" /></td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather: weather } Thanks to ES6 <3
}

export default connect(mapStateToProps)(WeatherList);