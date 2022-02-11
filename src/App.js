import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Location from './components/location';
import WeatherProperties from './components/weather-properties';
import axios from 'axios';
import API_Key from './index';
import cities from 'cities.json'
import './App.css';
import './tailwind.css';

class App extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      currentCity: 'london',
      weatherText: '',
      windSpeed: '',
      humidity: '',
      date_: '',
      time: '',
      tempF: '',
      tempC: '',
      selectedDay: 0,
    }
  }

  citySearch = () => {
    cities.forEach((n, index) => {
      if (n.name.toLowerCase().startsWith(this.inputRef.current.value))
        ReactDOM.render(
          <React.Fragment>
            
          </React.Fragment>,
          document.querySelector('#search-result')
        )
          
      if (index === 3) 
        return;
    })
  }

  changeDay = (selectedDay, currentCity) => {
    this.setState({ selectedDay, currentCity });
  }

  componentDidMount = () => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${this.state.currentCity}&days=4`)
      .then(res => {
        const data = res.data.forecast.forecastday[this.state.selectedDay];
        this.setState({
          weatherText: data.day.condition.text,
          windSpeed: data.day.avgvis_km,
          humidity: data.day.avghumidity,
          date_: data.date,
          time: res.data.current.last_updated.slice(11,16),
          tempC: data.day.avgtemp_c,
          tempF: data.day.avgtemp_f,
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Location
          currentCity={this.state.currentCity}
          updateWeather={this.componentDidMount}
          onSearch={this.citySearch}
          inputRef={this.inputRef}
        />
        <WeatherProperties
          weatherText={this.state.weatherText}
          windSpeed={this.state.windSpeed}
          humidity={this.state.humidity}
          date_={this.state.date_}
          time={this.state.time}
          tempF={this.state.tempF}
          tempC={this.state.tempC}
          selectedDay={this.state.selectedDay}

          onDayChange={this.changeDay}
        />
      </React.Fragment>
    );
  }
}

export default App;