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
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      currentCity: 'london',
      weatherText: {
        apiText: '',
        bg_icoText: '',
      },
      windSpeed: '',
      humidity: '',
      date_: '',
      time: '',
      tempF: '',
      tempC: '',
      selectedDay: 0,
      currentDay: new Date().getDay(),
    }
  }

  changeBg_Ico() {
    const weatherText = ['sun', 'cloud', 'cloud', 'rain', 'snow'];
    for (let index = 0; index < weatherText.length; index++) {
      if (this.state.weatherText.apiText.toLowerCase().includes(weatherText[index])) {
        const weatherTextResult = {
          apiText: this.state.weatherText.apiText,
          bg_icoText: weatherText[index]
        }
        this.setState({ weatherText: weatherTextResult })
        document.body.id = `${weatherText[index]}-w`;
        break;
      }
    }
  }

  citySearch = () => {
    this.inputRef.current.classList.remove('rounded-lg');

    for (let index = 0; index < cities.length; index++) {
      if (cities[index].name.toLowerCase().startsWith(this.inputRef.current.value.toLowerCase())) {
        ReactDOM.render(
          <React.Fragment>
            <li
              className='search-result-child'
              onClick={()=>this.changeCity(cities[index].name)}
              key={index}
            >
              {cities[index].name}
            </li>
          </React.Fragment>,
          document.querySelector('#search-result')
        )
        break;
      }
      if (this.inputRef.current.value === '') {
        this.removeSearchSuggestion();
        break;
      }

      else {
        ReactDOM.render(
          <li
            style={{ cursor: 'default' }}
            className='search-result-child hover:bg-trimmedWhite'
          >
            Not Found
          </li>,
          document.querySelector('#search-result')
        )
      }
    }
  }

  removeSearchSuggestion =()=> {
    ReactDOM.render(<React.Fragment></React.Fragment>, document.querySelector('#search-result'));
    this.inputRef.current.classList.add('rounded-lg');
  }

  changeDay = selectedDay => {
    this.setState({ selectedDay: selectedDay });
    this.componentDidMount();
  }

  changeCity = async currentCity => {
    await this.setState({ currentCity: currentCity });
    await this.removeSearchSuggestion();
    await this.componentDidMount();
  };

  componentDidMount = () => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${this.state.currentCity}&days=4`)
      .then(res => {
        const data = res.data.forecast.forecastday[this.state.selectedDay];

        const weatherTextResult = this.state.weatherText;
        weatherTextResult.apiText = data.day.condition.text;

        this.setState({
          weatherText: weatherTextResult,
          windSpeed: data.day.avgvis_km,
          humidity: data.day.avghumidity,
          date_: data.date,
          time: res.data.current.last_updated.slice(11, 16),
          tempC: data.day.avgtemp_c,
          tempF: data.day.avgtemp_f,
        })

        this.changeBg_Ico()
      });
  }

  render() {
    return (
      <React.Fragment>
        <Location
          currentCity={this.state.currentCity}
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
          currentDay={this.state.currentDay}
          onDayChange={this.changeDay}
        />
      </React.Fragment>
    );
  }
}

export default App;