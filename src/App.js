import React, { Component, useEffect } from 'react';
import Location from './components/location';
import WeatherProperties from './components/weather-properties';
import axios from 'axios';
import API_Key from './index';
import './App.css';
import './tailwind.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: window.navigator.geolocation.getCurrentPosition(
        res => 'london',
        () => 'london'
      ),

      weatherText: '',
      windSpeed: '',
      humidity: '',
      date_: '',
      time: '',
      tempF: '',
      tempC: '',
      selectedDay: new Date().getDay(),
    }
  }

  setWeatherProperties =()=> {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=london&days=4`)
      .then(res => {
        const data = res.data.forecast.forecastday[this.state.selectedDay];
        const d = new Date();
        this.setState({
          weatherText: data.day.condition.text,
          windSpeed: data.day.avgvis_km,
          humidity: data.day.avghumidity,
          date_: data.date,
          time: `${d.getHours()}:${d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes()}`,
          tempC: data.day.avgtemp_c,
          tempF: data.day.avgtemp_f,
        })
      })
      // console.log(this.state.currentCity);
  }

  render() {
    return (
      <React.Fragment>
        <Location currentCity={this.state.currentCity} updateWeather={this.setWeatherProperties} />
        <WeatherProperties 
          weatherText={this.state.weatherText}
          windSpeed={this.state.windSpeed}
          humidity={this.state.humidity}
          date_={this.state.date_}
          time={this.state.time}
          tempF={this.state.tempF}
          tempC={this.state.tempC}
          selectedDay={this.state.selectedDay}
        />
      </React.Fragment>
    );
  }
}

export default App;